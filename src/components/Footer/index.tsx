import { Stack, Text, Heading, VStack, Button, Flex, Image } from "@chakra-ui/react";
import { Textarea } from "../Form/AreaText";
import { Input } from "../Form/Input";

export function Footer() {
  return (
    <>
      <Stack
        id="contact"
        w="100vw"
        minH="100vh"
        bg="gray.900"
        bgImage="/images/footer-bg.png"
        objectFit="cover"
        p="8"
        direction="column"
        align="center"
        justify="center"
        spacing="12"
      >
        <VStack data-aos="fade-down" data-aos-duration="1500">
          <Heading
            color="cyan.500"
            fontWeight="400"
            fontFamily="JetBrains Mono"
          >
            Fale Comigo
          </Heading>
          <Text
            color="gray.100"
            fontWeight="100"
            fontFamily="Nunito"
          >
            se você ficou com alguma dúvida, preencha os campos abaixo e
            clique em enviar que entrarei em contato o mais rápido possível.
          </Text>
        </VStack>

        <VStack as="form" w="80%" spacing="9">
          <Stack w="100%" direction="row" spacing="4">
            <Input text="Seu Nome" w="35%" />
            <Input text="Seu Melhor E-mail" w="40%" />
            <Input text="Telefone de Contato" w="25%" />
          </Stack>
          <Stack w="100%" direction="row" spacing="6">
            <Input text="Qual é o Assunto?" w="100%" />
          </Stack>
          <Textarea text="Escreva sua mensagem..." w="100%" />
          <Button
            w="100%"
            borderRadius="full"
            bg="cyan.500"
            size="lg"
            transition="0.2s"

            _hover={{
              bg: 'cyan.600'
            }}

          >
            Enviar
          </Button>
        </VStack>
      </Stack>
      <Flex
        w="100vw"
        minH="70vh"
        bg="gray.900"
        px="20"

        direction="row"
        align="center"
      >

        <VStack
          w="33%"
          h="80%"
          p="10"
          spacing="6"
          color="gray.100"
          fontFamily="Montserrat"
          align="flex-start"
          justify="flex-start"
          borderColor="gray.800"
          borderLeftWidth={2}
        >
          <Heading
            color="cyan.500"
            fontFamily="Montserrat"
            fontSize="2xl"
          >
            Menu
          </Heading>
          <Text>Quem sou</Text>
          <Text>O que faço</Text>
          <Text>Portfólio</Text>
          <Text>Fale comigo</Text>
        </VStack>
        <VStack
          w="33%"
          h="80%"
          p="10"
          spacing="6"
          color="gray.100"
          fontFamily="Montserrat"
          align="flex-start"
          justify="flex-start"
          borderColor="gray.800"
          borderLeftWidth={2}
        >
          <Heading
            color="cyan.500"
            fontFamily="Montserrat"
            fontSize="2xl"
          >
            Redes Sociais
          </Heading>
          <Text>Linkedin</Text>
          <Text>Github</Text>
          <Text>Instagram</Text>
        </VStack>
        <VStack
          w="33%"
          h="80%"
          p="10"
          spacing="6"
          color="gray.100"
          fontFamily="Montserrat"
          align="flex-start"
          justify="flex-start"
          borderColor="gray.800"
          borderLeftWidth={2}
        >
          <Heading
            color="cyan.500"
            fontFamily="Montserrat"
            fontSize="2xl"
          >
            Entre em Contato
          </Heading>
          <Text>(19) 98952 2121</Text>
          <Text>felipefelizatti215@gmail.com</Text>
        </VStack>

        <Image src="/robot-happy.gif" h="20rem" />
      </Flex>
    </>
  );
}