import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Prismic from '@prismicio/client';

import { getPrismicClient } from '../../services/prismic';

import styles from './styles.module.scss';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { Text, View } from '../../_app';

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

const Blog = ({ postsPagination }: BlogProps) => {
  return (
    <View style={styles.page}>
      <Head><title>Luiz Felipe | Blog</title></Head>

      <Text type='h1' text='Hello Dev!' />
      <Text text='Bem vindo ao meu blog, conteúdos semanais sobre design e programação.' />

      <View style={styles.posts}>
        {postsPagination.results.map(post => (
          <View key={post.uid} style={styles.post}>
            <img src={post.data.banner.url} alt={post.data.title} />

            <View style={styles.content}>
              <Text type='h1' text={post.data.title} />
              <Text text={post.data.description} />
              <Link href={`/Blog/Post/${post.uid}`}><a>Ver Post</a></Link>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
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

export default Blog;