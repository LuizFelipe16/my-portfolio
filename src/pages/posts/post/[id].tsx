import type { GetStaticPaths, GetStaticProps } from 'next';
import Router from 'next/router';
import { Tooltip } from '@chakra-ui/react';
import { RichText } from 'prismic-dom';
import { BsCalendar2WeekFill } from 'react-icons/bs';
import { FaUserAlt, FaLongArrowAltLeft } from 'react-icons/fa';
import { AiFillLinkedin, AiOutlineLink, AiFillInstagram } from 'react-icons/ai';

import { Footer } from '../../../components';
import { getPrismicClient } from '../../../services';

import { Post } from './styles';
import { TitlePage, Link, View, Text, Divider } from '../../../_app';

interface PostData {
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
  post: PostData;
}

function PagePost({ post }: PostProps) {
  function copyRouteToClipboard() {
    navigator.clipboard.writeText(`https://www.cybernegocio.com.br${Router.asPath}`);
  }

  return (
    <Post>
      <TitlePage t={post.data.title} />
      <Link href='/blog' style='back_page'><FaLongArrowAltLeft /></Link>

      <Tooltip
        label="Copie e Compartilhe o Link com Amigos 😯"
        placement="right-end"
        bg="blue.600"
        color="gray.400"
      >
        <View style='options_post options_post_link'>
          <button type="button" onClick={copyRouteToClipboard}><AiOutlineLink size={22} /></button>
        </View>
      </Tooltip>

      <Tooltip
        label="Visite Nosso Instagram Para Novidades e mais Conteúdo 👀"
        placement="right-end"
        bg="blue.600"
        color="gray.400"
      >
        <View style='options_post options_post_insta'>
          <a
            href="https://www.instagram.com/cybernegocioscn/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <AiFillInstagram size={22} />
          </a>
        </View>
      </Tooltip>

      <View style='container'>
        <img className='illustration' src={post.data.banner.url} alt={post.data.title} />
        <View style='content'>
          <Text type='h1' text={post.data.title} />
          <Text text={post.data.description} />
        </View>
      </View>

      <View type='main' className='post'>
        <article className='content'>
          <Text type='h1' style='post_title' text={post.data.title} />
          <Text type='h2' style='post_subtitle' text={post.data.subtitle} />
          <Divider style='divider' />
          <View style='post_information'>
            <h2><FaUserAlt /> {post.data.author}</h2>
            <time><BsCalendar2WeekFill /> {post.first_publication_date}</time>
          </View>

          {post.data.content.map(content => (
            <div key={content.heading} className='body_post'>
              <h1>{content.heading}</h1>
              <div
                className='postContent'
                dangerouslySetInnerHTML={{ __html: content.body }}
              />
            </div>
          ))}
        </article>

        <View style='author'>
          <img src="/authors/luizfelipe.jpeg" alt="Foto do Autor do Post" />

          <View>
            <Text type='h1' text='Author' />
            <Text text={post.data.author} />
            <View style='social'>
              <a
                href="https://www.linkedin.com/in/luiz-felipe-siqueira-felizatti-00783a1ab/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <AiFillLinkedin />
              </a>
            </View>
          </View>
        </View>
      </View>

      <Footer />
    </Post>
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

export default PagePost;