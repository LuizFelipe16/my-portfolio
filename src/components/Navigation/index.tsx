import { HStack, useBreakpointValue } from "@chakra-ui/react";

import { ItemNav } from './ItemNav';
import { SidebarNav } from "./SidebarNav";

export function Navigation() {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (!!isDrawerSidebar) {
    return (
      <SidebarNav />
    );
  }

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
      zIndex="100000"

      spacing="5"
      align="center"
      justify="space-between"
    >
      <ItemNav href="about" text="QUEM SOU" />
      <ItemNav href="services" text="O QUE FAÇO" />
      <ItemNav href="portfolio" text="PORTFÓLIO" />
      <ItemNav href="contact" text="FALE COMIGO" />
    </HStack>
  );
}