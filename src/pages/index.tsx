import { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import Head from "next/head";

import { MenuButtons } from "../components/MenuButtons";
import { Loading } from "../components/Loading";
import { Footer } from "../components/Footer";

import {
  SessionWelcome,
  SessionAbout,
  SessionSkills,
  SessionServices,
  SessionPortfolio,
  SessionEntry
} from "../components/SessionsPageIndex";

function IndexPage() {
  const [isLoadingActive, setIsLoadingActive] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingActive(false);
    }, 1000);
  }, []);

  if (!!isLoadingActive) return <Loading text='Olá, eu sou...' />;

  return (
    <Flex direction="column">
      <Head><title>Luiz Felipe | Meu Portfólio</title></Head>
      <MenuButtons />

      <SessionEntry />
      {/* <SessionWelcome /> */}
      <SessionAbout />
      <SessionSkills />
      <SessionServices />
      <SessionPortfolio />

      <Footer />
    </Flex>
  );
}

export default IndexPage;