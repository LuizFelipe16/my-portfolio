import { VStack, Text } from '@chakra-ui/react'
import Link from 'next/link';

export function FooterBlog() {
  return (
    <VStack
      w="100vw"
      minH="25vh"
      spacing={4}
      zIndex={10}
      bg="gray.700"
      color='gray.200'
      align="center"
      fontSize="sm"
      justify="center"
      className="footer-copyright"
      fontFamily="Montserrat"
    >
      {/* <Text fontWeight="300">Meu Blog © 2022 •  Publicado com código...</Text> */}
      <Text fontWeight="300">Meu Blog © 2022 • Publicado com código...</Text>
      <Link href='/' passHref>
        <Text 
          textDecoration={'underline'} 
          cursor={'pointer'} 
          fontWeight="400"
        >
          Visitar página principal
        </Text>
      </Link>
    </VStack>
  );
}
