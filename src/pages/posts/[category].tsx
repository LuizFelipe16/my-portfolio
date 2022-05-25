import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import type { GetStaticProps, GetStaticPaths } from 'next';

import { FaLongArrowAltLeft } from 'react-icons/fa';
import Prismic from '@prismicio/client';

import { getPrismicClient } from '../../services/prismic';

import type { RouterCategories } from '../../types';
import { Loading } from '../../components';
import { Link, Text, TitlePage, View } from '../../_app';

import { Posts, Post } from './styles';

interface Post {
  uid?: string;
  first_publication_date: string;
  data: {
    title: string;
    description: string;
    banner: {
      url: string;
    };
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface BlogProps {
  postsPagination: PostPagination;
}

function PagePosts({ postsPagination }: BlogProps) {
  const { query } = useRouter() as RouterCategories;
  const [isLoading, setIsLoading] = useState(true);

  const category = query?.category == 'programacao' ? 'Programação' : 'Design';

  useEffect(() => { setTimeout(() => setIsLoading(false), 500) }, []);

  if (!!isLoading) return <Loading />;

  return (
    <Posts>
      <TitlePage t={`Posts ${category}`} />
      <Link href='/blog' style='backPage'>
        <FaLongArrowAltLeft />
      </Link>

      <Text type='h1' text={`Posts ${category}`} />
      <Text text='Códigos... coisa magnífica! Acesse um dos conteúdos que foram preparados cuidadosamente para você.' />

      <View type='main' style='posts'>
        {postsPagination.results.map(post => (
          <Post key={post.uid}>
            <img src={post.data.banner.url} alt={post.data.title} />

            <View style='content'>
              <Text type='h1' text={post.data.title} />
              <Text text={post.data.description} />
              <Link href={`/Blog/Post/${post.uid}`}><a>Ver Post</a></Link>
            </View>
          </Post>
        ))}
      </View>
    </Posts>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const postsResponse = await prismic.query([
    Prismic.Predicates.at('document.type', 'post')
  ], {
    pageSize: 20
  });

  const posts = postsResponse?.results?.map(post => {
    return {
      uid: post.uid,
      first_publication_date: new Date(String(post.first_publication_date)).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }),
      data: {
        title: post.data.title,
        description: post.data.description,
        author: post.data.author,
        banner: post.data.banner
      }
    }
  });

  return {
    props: {
      postsPagination: {
        next_page: postsResponse.next_page,
        results: posts
      }
    }
  }
};

export default PagePosts;
