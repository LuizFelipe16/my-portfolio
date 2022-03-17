import { Stack, Text, Heading, VStack, Button, Flex, Image } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { scrollAnimationToSessionPageById } from "../../utils/scrollAnimationToSessionPageById";
import { Textarea } from "../Form/AreaText";
import { Input } from "../Form/Input";

import { Link } from './styles';

export function Footer() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');

  function sendMessage(e: FormEvent): void {
    e.preventDefault();

    const body = `Meu Nome é ${name}, meu email para contato é ${email}. ${subject}`;

    const message = body.split(" ").join("%20");

    const link =
      `https://api.whatsapp.com/send?phone=5519989522121&text=${message}`;

    window.location.href = link;
  }

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
        pb="14"
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

        <VStack as="form" onSubmit={sendMessage} w="80%" spacing="9">
          <Stack w="100%" direction="row" spacing="4">
            <Input
              value={name}
              onChange={e => setName(e.target.value)}
              name="name"
              text="Seu Nome"
              w="50%"
            />
            <Input
              value={email}
              onChange={e => setEmail(e.target.value)}
              name="email"
              text="Seu Melhor E-mail"
              w="50%"
            />
            {/* <Input name="phone" text="Telefone de Contato" w="25%" /> */}
          </Stack>
          {/* <Stack w="100%" direction="row" spacing="6">
            <Input name="title" text="Qual é o Assunto?" w="100%" />
          </Stack> */}
          <Textarea
            value={subject}
            onChange={e => setSubject(e.target.value)}
            name="subject"
            text="Escreva sua mensagem..."
            w="100%"
          />
          <Button
            w="100%"
            type="submit"
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
          <Link onClick={() => scrollAnimationToSessionPageById('about')}>Quem sou</Link>
          <Link onClick={() => scrollAnimationToSessionPageById('services')}>O que faço</Link>
          <Link onClick={() => scrollAnimationToSessionPageById('portfolio')}>Portfólio</Link>
          <Link onClick={() => scrollAnimationToSessionPageById('contact')}>Fale comigo</Link>
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
          <Text as="a" href="https://linkedin.com/in/luiz-felipe-siqueira-felizatti-00783a1ab/" target="_blank">
            Linkedin
          </Text>
          <Text as="a" href="https://github.com/LuizFelipe16" target="_blank">Github</Text>
          <Text as="a" href="https://www.instagram.com/luiz_2fs/" target="_blank">Instagram</Text>
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
      <Flex
        w="100vw"
        h="8vh"
        bg="cyan.500"
        align="center"
        justify="center"
      >
        <Text fontFamily="JetBrains Mono" fontWeight="700" color="gray.900" fontSize="sm">created by @LuizFelipe | 2022</Text>
      </Flex>
    </>
  );
}