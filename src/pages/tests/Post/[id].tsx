import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import { RichText } from 'prismic-dom';
import { BsCalendar2WeekFill } from 'react-icons/bs';
import { FaUserAlt, FaLongArrowAltLeft } from 'react-icons/fa';
import { AiFillLinkedin, AiOutlineLink, AiFillInstagram } from 'react-icons/ai';

import { Footer } from '../../../components/Footer';
import { getPrismicClient } from '../../../services/prismic';

import styles from './styles.module.scss';
import { Tooltip } from '@chakra-ui/react';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    description: string;
    subtitle: string;
    author: string;
    content: {
      heading: string;
      body: string;
    }[];
  };
}

interface PostProps {
  post: Post;
}

function Post({ post }: PostProps) {
  function copyRouteToClipboard() {
    navigator.clipboard.writeText(`https://www.cybernegocio.com.br${Router.asPath}`);
  }

  return (
    <>
      <Head><title>{post.data.title} | CyberCoffee</title></Head>

      <Link href="/Blog">
        <a className={styles.back_page}>
          <FaLongArrowAltLeft />
        </a>
      </Link>

      <Tooltip
        label="Copie e Compartilhe o Link com Amigos 😯"
        placement="right-end"
        bg="blue.600"
        color="gray.400"
      >
        <div className={`${styles.options_post} ${styles.options_post_link}`}>
          <button type="button" onClick={copyRouteToClipboard}><AiOutlineLink size={22} /></button>
        </div>
      </Tooltip>

      <Tooltip
        label="Visite Nosso Instagram Para Novidades e mais Conteúdo 👀"
        placement="right-end"
        bg="blue.600"
        color="gray.400"
      >
        <div className={`${styles.options_post} ${styles.options_post_insta}`}>
          <a
            href="https://www.instagram.com/cybernegocioscn/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <AiFillInstagram size={22} />
          </a>
        </div>
      </Tooltip>

      <div className={styles.container}>
        <img className={styles.illustration} src={post.data.banner.url} alt={post.data.title} />

        <div className={styles.content}>
          <h1>{post.data.title}</h1>
          <p>
            {post.data.description}
          </p>
        </div>
      </div>

      <main className={styles.post}>
        <article className={styles.content}>
          <h1 className={styles.post_title}>{post.data.title}</h1>
          <h2 className={styles.post_subtitle}>{post.data.subtitle}</h2>
          <hr />
          <div className={styles.post_information}>
            <h2><FaUserAlt /> {post.data.author}</h2>
            <time><BsCalendar2WeekFill /> {post.first_publication_date}</time>
          </div>

          {post.data.content.map(content => (
            <div key={content.heading} className={styles.body_post}>
              <h1>{content.heading}</h1>
              <div
                className={styles.postContent}
                dangerouslySetInnerHTML={{ __html: content.body }}
              />
            </div>
          ))}
        </article>

        <div className={styles.author}>
          <img src="/authors/luizfelipe.jpeg" alt="Foto do Autor do Post" />

          <div>
            <h1>Author</h1>
            <p>{post.data.author}</p>
            <div className={styles.social}>
              <a
                href="https://www.linkedin.com/in/luiz-felipe-siqueira-felizatti-00783a1ab/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <AiFillLinkedin />
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}


export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const prismic = getPrismicClient();

  const { id } = params as any;

  const response = await prismic.getByUID('post', String(id), {});

  const post = {
    first_publication_date: new Date(String(response.first_publication_date)).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }),
    data: {
      title: response.data.title,
      banner: {
        url: response.data.banner.url
      },
      description: response.data.description,
      subtitle: response.data.subtitle,
      author: response.data.author,
      content: response.data.content.map((content: any) => {
        return {
          heading: content.heading,
          body: RichText.asHtml(content.body)
        }
      })
    }
  }

  return {
    props: {
      post
    }
  }
};

export default Post;