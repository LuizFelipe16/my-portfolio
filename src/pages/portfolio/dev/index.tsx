import { Box, Heading, Icon, Stack, Tooltip, Text } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Footer } from "../../../components/Footer";
import { ItemPortfolio } from "../../../components/ItemPortfolio";
import { MenuButtons } from "../../../components/MenuButtons";
import { ListFolders } from "./styles";

export default function PortfolioDev() {
  return (
    <>
      <Head><title>Portfólio Dev | Luiz Felipe</title></Head>
      <MenuButtons />
      <Stack
        w="100vw"
        minH="100vh"
        bg="gray.900"
        direction="column"
        align="center"
        justify="flex-start"
      >
        <Stack
          w="100%"
          h="30vh"
          bg="cyan.500"

          position="relative"
          align="center"
          justify="center"
        >
          <Tooltip hasArrow label="Voltar" bg="gray.900" color="cyan.500" placement="bottom">
            <Text
              as="div"
              w="auto"
              h="auto"
              p="3"
              position="absolute"
              left="40px"
              top="45%"
              cursor="pointer"
              borderRadius="full"
              transition="0.2s"
              boxShadow="lg"
              display="flex"
              align="center"

              _hover={{
                bg: 'gray.900',
                color: 'cyan.500'
              }}
            >
              <Link href="/" passHref>
                <Icon
                  as={FaLongArrowAltLeft}
                  fontSize="2xl"
                />
              </Link>
            </Text>
          </Tooltip>

          <Box data-aos="fade-down" data-aos-duration="1500">
            <Heading
              fontSize="2xl"
              fontFamily="Montserrat"
              fontWeight="500"
              color="gray.900"
            >
              Projetos Web
            </Heading>
          </Box>
        </Stack>

        <ListFolders>
          <ItemPortfolio
            title="MyMoon"
            text="description"
            animation="fade-right"
            dur="1000"
          />
          <ItemPortfolio
            title="MyMoon"
            text="description"
            animation="fade-right"
            dur="1000"
          />
          <ItemPortfolio
            title="MyMoon"
            text="description"
            animation="fade-right"
            dur="1000"
          />
          <ItemPortfolio
            title="MyMoon"
            text="description"
            animation="fade-right"
            dur="1000"
          />
        </ListFolders>
        <Footer />
      </Stack>
    </>
  );
}