import { Flex, Progress, Text } from "@chakra-ui/react";

import { LoadingStyle } from './styles';

export function Loading() {
  return (
    <LoadingStyle>
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
    </LoadingStyle>
  );
}