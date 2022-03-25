import { Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useEffect, useState } from "react";

import { Footer } from "../../../components/Footer";
import { HeaderPortfolio } from "../../../components/HeaderPortfolio";
import { ItemPortfolioDesign } from "../../../components/ItemPortfolio/design";
import { ItemPortfolioProfile } from "../../../components/ItemPortfolio/profile";
import { Loading } from "../../../components/Loading";
import { MenuButtons } from "../../../components/MenuButtons";
import { designs } from "../../../services/designs";

import { ListFolders } from "../../../styles/sessions/portfolios";

export default function PortfolioDesign() {
  const [isLoadingActive, setIsLoadingActive] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingActive(false);
    }, 1000);
  }, []);

  if (!!isLoadingActive) return <Loading text="Carregando Portfólio" />;

  return (
    <>
      <Head><title>Meu Portfólio Design | Luiz Felipe</title></Head>
      <MenuButtons isMenuOpen={false} />
      <Stack
        w="100vw"
        minH="100vh"
        bg="gray.900"
        direction="column"
        align="center"
        justify="flex-start"
      >
        <HeaderPortfolio title="Designs" />

        <ListFolders>
          <ItemPortfolioProfile
            img="cn-logo.png"
            text="Perfil totalmente criado e planejado por mim: Branding, Identidade Visual,
            Artes, Postagens únicas, Carrosseis, Stories, Site e etc."
            link="https://www.instagram.com/cybernegocioscn/"
          />

          {designs.map(design => (
            <ItemPortfolioDesign
              key={design.id}
              design={design}
              animation="fade-right"
              dur="1000"
            />
          ))}
        </ListFolders>

        <Text fontFamily="Montserrat" color="gray.200">Mais artes e designs estão sendo adicionados...</Text>
        <Footer />
      </Stack>
    </>
  );
}