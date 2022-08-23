import { HStack } from "@chakra-ui/react";
import { valueLeftContentTexts } from "../../SessionsPageIndex/Entry/styles";

import { ItemNav } from './ItemNav';

export function Navbar() {
  return (
    <HStack
      w="100vw"
      h="auto"
      position="absolute"
      top="0"
      left={valueLeftContentTexts}
      py="12"

      // boxShadow="dark-lg"
      textShadow="dark-lg"
      zIndex="100000"

      // background="primaryGray.1"
      // borderBottomColor="cyan.500"
      // borderBottomWidth={2}

      spacing="12"
      align="center"
      justify="flex-start"
    >
      <ItemNav href="about" text="Quem sou" />
      <ItemNav href="services" text="O que faço" />
      <ItemNav href="portfolio" text="Meu portfólio" />
      <ItemNav href="contact" text="Fale comigo" />
      <ItemNav isPage href="posts/programacao" text="Blog" />
    </HStack>
  );
}