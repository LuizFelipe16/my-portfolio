import { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import Head from "next/head";

import { MenuButtons } from "../components/MenuButtons";
import { Loading } from "../components/Loading";
import { Footer } from "../components/Footer";

import { SessionWelcome } from "../components/SessionsPageIndex/Welcome";
import { SessionAbout } from "../components/SessionsPageIndex/About";
import { SessionSkills } from "../components/SessionsPageIndex/Skills";
import { SessionServices } from "../components/SessionsPageIndex/Services";
import { SessionPortfolio } from "../components/SessionsPageIndex/Portfolio";

function IndexPage() {
  const [isLoadingActive, setIsLoadingActive] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingActive(false);
    }, 2000);
  }, []);

  if (!!isLoadingActive) return <Loading />

  return (
    <Flex direction="column">
      <Head><title>Luiz Felipe | Meu Portfólio</title></Head>
      <MenuButtons />

      <SessionWelcome />
      <SessionAbout />
      <SessionSkills />
      <SessionServices />
      <SessionPortfolio />

      <Footer />
    </Flex>
  );
}

export default IndexPage;