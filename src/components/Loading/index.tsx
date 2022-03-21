import { Flex, Progress, Text, VStack } from "@chakra-ui/react";

import { LoadingStyle } from './styles';

export function Loading() {
  return (
    <LoadingStyle>
      <VStack w="100vw" h="100vh" spacing="4" align="center" justify="center" bg="gray.900">
        <Text
          className="text-loading"
          color="#48CDD0"
          fontSize="lg"
          fontFamily="Montserrat"
          fontWeight="300"
        >
          Olá, eu sou...
        </Text>
        <Progress
          mt="1.2rem"
          w={["95%", "95%", "40rem"]}
          size="sm"
          colorScheme="gray"
          bg="gray.800"
          borderRadius="lg"
          isIndeterminate
        />
      </VStack>
    </LoadingStyle>
  );
}