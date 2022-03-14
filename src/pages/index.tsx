import { useState, useEffect } from "react";
import { Flex, Icon, Text } from "@chakra-ui/react";
import Head from "next/head";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import { MenuButtons } from "../components/MenuButtons";
import { Navigation } from "../components/Navigation";
import { Loading } from "../components/Loading";

import { Welcome } from "../styles/sessions/welcome";
import { About } from "../styles/sessions/about";
import { Skills } from "../styles/sessions/skills";

function Home() {
  const [isLoadingActive, setIsLoadingActive] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingActive(false);
    }, 3000);
  }, []);

  if (!!isLoadingActive) return <Loading />

  return (
    <Flex direction="column">
      <Head><title>Luiz Felipe | MyPortfolio</title></Head>
      <MenuButtons />
      <Welcome>
        {/* <video className="back-video" autoPlay loop muted playsInline>
          <source src="assets/video.mp4" type="video/mp4"></source>
        </video> */}

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
            Desenvolvendo soluções <strong>inteligentes...</strong>
          </h1>

          {/* <HStack
            h="3rem"
            mt="16"
            align="center"
            justify="center"
          >
            <div className="arrow-down">
              <Icon as={IoIosArrowDown} />
            </div>
            <Text
              color="#48CDD0"
              fontFamily="Montserrat"
              fontWeight="400"
            >
              continue lendo...
            </Text>
          </HStack> */}
        </div>
      </Welcome>

      <About id="about-mi">
        <div className="infos">
          <div className="flex-dir-column" data-aos="fade-down-right" data-aos-duration="1000">
            <h2>Citação</h2>
            <p className="text-italic">
              <Icon className="quote" color="#48CDD0" mr="2" as={FaQuoteLeft} />
              Existem duas maneiras de construir um projeto de software.
              Uma é fazê-lo tão simples que obviamente não há falhas. A outra é fazê-lo tão
              complicado que não existem falhas óbvias.
              <Icon color="#48CDD0" ml="2" as={FaQuoteRight} />
            </p>
          </div>

          <h2>Ocupações Atuais</h2>
          <p>
            FullStack Dev & Designer Freelancer
          </p>

          <h2>Minhas Skills</h2>
          <div className="tec-skills">
            <div>
              <img src="/skills/typescript.svg" alt="TypeScript" />
            </div>
            <div>
              <img src="/skills/javascript.png" alt="JavaScript" />
            </div>
            <div>
              <img src="/skills/react.png" alt="React" />
            </div>
            <div>
              <img src="/skills/next.png" alt="Next" />
            </div>
            <div>
              <img src="/skills/nodejs.png" alt="Next" />
            </div>
            <div>
              <img src="/skills/chakra.png" alt="Next" />
            </div>
            <div>
              <img src="/skills/sass.png" alt="Next" />
            </div>
          </div>
        </div>
        <img src="/images/eu.jpeg" alt="Luiz Felipe" />
        <div data-aos="zoom-in-left" data-aos-duration="2000" className="about">
          <h1>Olá,</h1>
          <p>
            sou bullas, desenvolvedora de software entusiasta em UX. Especialista em
            Aplicativos e Games com mais de 10 anos de experiência em mídias interativas.
            Possuo experiência com equipes multinacionais, além de certificações compatível
            e 4 prêmios de reconhecimento nacional junto à Funbites. Adoro desafios e acredit
            na transformações do mundo com o poder de informações.
          </p>
        </div>
      </About>

      <Skills>

      </Skills>
    </Flex>
  );
}

export default Home;