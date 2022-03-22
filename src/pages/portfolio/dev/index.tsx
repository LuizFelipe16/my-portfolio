import { Stack, Text } from "@chakra-ui/react";
import Head from "next/head";

import { Footer } from "../../../components/Footer";
import { HeaderPortfolio } from "../../../components/HeaderPortfolio";
import { ItemPortfolio } from "../../../components/ItemPortfolio";
import { MenuButtons } from "../../../components/MenuButtons";

import { projects } from "../../../services/projects";

import { ListFolders } from "../../../styles/sessions/portfolios";

export default function PortfolioDev() {
  return (
    <>
      <Head><title>Meu Portfólio Dev | Luiz Felipe</title></Head>
      <MenuButtons isMenuOpen={false} />
      <Stack
        w="100vw"
        minH="100vh"
        bg="gray.900"
        direction="column"
        align="center"
        justify="flex-start"
      >
        <HeaderPortfolio title="Projetos Web" />

        <ListFolders>
          {projects.map(project => (
            <ItemPortfolio
              key={project.id}
              project={project}
              animation="fade-right"
              dur="1000"
            />
          ))}
        </ListFolders>
        <Text fontFamily="Montserrat" color="gray.200">Mais projetos estão sendo adicionados...</Text>
        <Footer />
      </Stack>
    </>
  );
}