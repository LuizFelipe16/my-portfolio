import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import 'swiper/css/bundle';
import { GlobalStyle } from '../styles/globals';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;