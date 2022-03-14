import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/globals';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;