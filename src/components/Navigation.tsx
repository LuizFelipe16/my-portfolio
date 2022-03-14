import { Text, HStack } from "@chakra-ui/react";

export function Navigation() {
  return (
    <HStack
      position="absolute"
      top="0"
      right="0"
      w="55vw"
      h="auto"
    >
      <Text>
        Quem Sou
      </Text>
      <Text>
        O que faço
      </Text>
      <Text>
        Portfólio
      </Text>
      <Text>
        Fale Comigo
      </Text>
    </HStack>
  );
}