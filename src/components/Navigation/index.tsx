import { Box, Flex, Drawer, HStack, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Stack, useBreakpointValue, Button, Icon, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { useRef } from "react";
import { FaIndent } from "react-icons/fa";

import { ItemNav } from './ItemNav';

export function Navigation() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const btnRef = useRef()

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (!!isDrawerSidebar) {
    return (
      <>
        <Flex
          w="100vw"
          h="14vh"
          position="fixed"
          bg="transparent"
          zIndex="10000"
          align="center"
          justify="flex-end"
          py="6"
          px="10"
          top="0"
        >
          <Button bg='cyan.500' size="lg" color="gray.900" onClick={onOpen}>
            <Icon as={FaIndent} />
          </Button>
        </Flex>

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
        >
          <DrawerOverlay zIndex="100000">
            <DrawerContent bg="gray.900" p="4">
              <DrawerCloseButton onClick={onClose} color="gray.50" mt="6" />
              <DrawerHeader
                display="flex"
                flexDirection="row"
                mb="12"
                color="cyan.500"
                fontSize="2xl"
              >
                Navegue
              </DrawerHeader>
              <DrawerBody>
                <VStack
                  color="gray.50"
                  fontSize="lg"
                  spacing="10"
                  align="flex-start"
                  fontFamily="Montserrat"
                >
                  <Text>Quem Sou</Text>
                  <Text>O Que Faço</Text>
                  <Text>Portfólio</Text>
                  <Text>Fale Comigo</Text>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>
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