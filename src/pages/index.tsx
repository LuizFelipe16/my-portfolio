import { Flex, Text } from "@chakra-ui/react";
import Head from "next/head";

import { MenuButtons } from "../components/MenuButtons";
import { Navigation } from "../components/Navigation";

import { Welcome } from "../styles/sessions/welcome";
import { About } from "../styles/sessions/about";

function Home() {
  return (
    <Flex direction="column">
      <Head><title>Luiz Felipe | MyPortfolio</title></Head>
      <MenuButtons />
      <Welcome>
        <div className="content">
          <Navigation />
          <Text
            className="title-gradient"
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip='text'
            fontSize='7xl'
            fontWeight='extrabold'
            fontFamily="JetBrains Mono"
            textShadow="2xl"
          >
            Luiz Felipe
          </Text>

          <h1 className="text-typing">
            Desenvolvendo soluções inteligentes...
          </h1>
        </div>
      </Welcome>
      <About>

      </About>
    </Flex>
  );
}

export default Home;