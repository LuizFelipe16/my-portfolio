import { HStack } from "@chakra-ui/react";

import { ItemNav } from './ItemNav';

export function Navigation() {
  return (
    <HStack
      w="58vw"
      h="auto"
      position="absolute"
      top="8"
      right="0"
      p="4"
      pr="16"

      textShadow="dark-lg"

      spacing="5"
      align="center"
      justify="space-between"
    >
      <ItemNav text="QUEM SOU" />
      <ItemNav text="O QUE FAÇO" />
      <ItemNav text="PORTFÓLIO" />
      <ItemNav text="FALE COMIGO" />
    </HStack>
  );
}