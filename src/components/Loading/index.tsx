import { Progress, Text, VStack } from "@chakra-ui/react";
import { TitlePage } from "../../_app";

import { LoadingStyle } from './styles';

interface ILoadingProps {
  text?: string;
}

export function Loading({ text }: ILoadingProps) {
  return (
    <LoadingStyle>
      <TitlePage t='Carregando...' />
      <VStack w="100vw" h="100vh" spacing="4" align="center" justify="center" bg="gray.900">
        <Text
          className="text-loading"
          color="#48CDD0"
          fontSize="lg"
          fontFamily="Montserrat"
          fontWeight="300"
        >
          {text}
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