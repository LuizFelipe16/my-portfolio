import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import type { GetStaticProps, GetStaticPaths } from 'next';
import { BsFillFileEarmarkCodeFill } from 'react-icons/bs'

import Prismic from '@prismicio/client';

import { getPrismicClient } from '../../services';

import type { PostData, RouterCategories } from '../../types';
import { Footer, Loading } from '../../components';
import { Interactive3DElement, Link, Text, TitlePage, View } from '../../_app';

import { Posts, Post } from './styles';
import { Button, Icon, Spinner } from '@chakra-ui/react';
import { MyParticles } from '../../components/MyParticles';
import { Navigation } from '../../components/Posts';

interface PostPagination {
  next_page: string;
  results: PostData[];
}

interface PostsProps {
  postsPagination: PostPagination;
}

function PagePosts({ postsPagination }: PostsProps) {
  const { query } = useRouter() as RouterCategories;
  const [isLoading, setIsLoading] = useState(true);

  const category = query?.category == 'programacao' ? 'Programação' : 'Design';

  useEffect(() => { setTimeout(() => setIsLoading(false), 1000) }, []);

  if (!!isLoading) return <Loading />;

  return (
    <Posts>
      <TitlePage t={`Posts ${category}`} />

      <MyParticles opacity={0.1} id='bgParticlesPageBlog' />

      <Navigation />

      <View className='blog-content'>
        <h1>
          <Icon className='icon' as={BsFillFileEarmarkCodeFill} color="cyan.500" fontSize={["1.2rem", "1.3rem", "1.4rem"]} />
          Bem vindo
        </h1>
        <Text text={`Conteúdos gerais sobre ${category}`} />

        <View type='main' style='posts'>
          {postsPagination.results.map(post => (
            <Post key={post.uid}>
              <img src={post.data.banner.url} alt={post.data.title} />

              <View style='content'>
                <Text type='h1' text={post.data.title} />
                <Text text={post.data.description} />
                <Link href={`/posts/post/${post.uid}`}><a>Ver Post</a></Link>
              </View>
            </Post>
          ))}
        </View>
      </View>

      <Footer isBlog />
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
