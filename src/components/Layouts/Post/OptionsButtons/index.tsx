import { useToast } from '@chakra-ui/react';
import { AiOutlineLink, AiFillInstagram, AiOutlineArrowUp } from 'react-icons/ai';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { animateScroll } from 'react-scroll';
import Router from 'next/router';

import { copyToClipboard } from '../../../../utils';
import { Link, View } from '../../../../_app';

import styles from './styles.module.scss';

export const OptionsButtons = () => {
  const toast = useToast();

  const copyRouteToClipboard = () => {
    copyToClipboard(`https://www.cybernegocio.com.br${Router.asPath}`);

    toast({
      title: 'Link Copiado',
      description: "Mande para um amigo acessar o post.",
      status: 'success',
      duration: 4000,
      isClosable: true,
      position: 'bottom',
    });
  }

  return (
    <>
      <Link href='/posts/programacao' style={styles.back_page}><FaLongArrowAltLeft /></Link>

      <View style={`${styles.options_post} ${styles.options_post_link}`}>
        <button type="button" onClick={copyRouteToClipboard}><AiOutlineLink size={22} /></button>
      </View>

      <View style={`${styles.options_post} ${styles.options_post_top}`}>
        <button type="button" onClick={() => animateScroll.scrollToTop({ duration: 1000 })}><AiOutlineArrowUp size={22} /></button>
      </View>

      <View style={`${styles.options_post} ${styles.options_post_insta}`}>
        <a
          href="https://www.instagram.com/cybernegocioscn/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <AiFillInstagram size={22} />
        </a>
      </View>
    </>
  );
}