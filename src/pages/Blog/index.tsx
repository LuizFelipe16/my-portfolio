import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { BsCalendar2WeekFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
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

      <View style={styles.content}>
        <Text type='h1' text='Conheça o nosso o meu Blog!' />
        <Text text='Conteúdos semanais sobre o mundo Neuro relacionado ao marketing, design, desenvolvimento de sites e textos publicitários.' />
      </View>

      <main className={styles.posts}>
        {postsPagination.results.map(post => (
          <View key={post.uid} style={styles.post}>
            <img src={post.data.banner.url} alt={post.data.title} />

            <View style={styles.content}>
              <h1>{post.data.title}</h1>
              <p>{post.data.description}</p>
              <Link href={`/Blog/Post/${post.uid}`}><a>Ver Post</a></Link>
            </View>
          </View>
        ))}
      </main>

      {postsPagination?.next_page !== null ? (
        <button className={styles.load_posts} type="button">Carregar mais posts</button>
      ) : null}

      <Footer />
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