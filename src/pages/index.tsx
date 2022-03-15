import { useState, useEffect } from "react";
import { Flex, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import { MenuButtons } from "../components/MenuButtons";
import { Navigation } from "../components/Navigation";
import { Loading } from "../components/Loading";
import { TecSkills } from "../components/TecSkills";
import { ItemSkill } from "../components/ItemSkill";

import { Welcome } from "../styles/sessions/welcome";
import { About } from "../styles/sessions/about";
import { Skills } from "../styles/sessions/skills";
import { Services } from "../styles/sessions/services";
import { ItemService } from "../components/ItemService";
import { Footer } from "../components/Footer";

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

        <div className="d-element" data-aos="zoom-in-left">
          <img src="/robot.gif" alt="3D Element Tec" />
        </div>

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
            Desenvolvendo soluções para o <strong>futuro...</strong>
          </h1>
        </div>
      </Welcome>

      <About id="about">
        <div className="infos">
          <div className="flex-dir-column" data-aos="fade-down-right" data-aos-duration="1000">
            <h2>Citação</h2>
            <p className="text-italic text-info">
              <Icon className="quote" color="#48CDD0" mr="2" as={FaQuoteLeft} />
              Existem duas maneiras de construir um projeto de software.
              Uma é fazê-lo tão simples que obviamente não há falhas. A outra é fazê-lo tão
              complicado que não existem falhas óbvias.
              <Icon color="#48CDD0" ml="2" as={FaQuoteRight} />
            </p>
          </div>

          <h2>Ocupações Atuais</h2>
          <p className="text-info">FullStack Dev & Designer Freelancer</p>

          <h2>Minhas Hard Skills</h2>
          <TecSkills />
        </div>

        <img src="/images/eu.jpeg" alt="Luiz Felipe" />

        <div data-aos="zoom-in-left" data-aos-duration="1000" className="about">
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

      <Skills id="skills">
        <h1>Meus Diferenciais</h1>
        <Flex direction="column">
          <ItemSkill mt="5rem" />
          <ItemSkill mt="10rem" />
        </Flex>
        <div className="line">
          <div />
          <div />
          <div />
          <div />
        </div>
        <Flex direction="column">
          <ItemSkill mt="15rem" />
          <ItemSkill mt="13rem" />
        </Flex>
      </Skills>

      <Services id="services">
        <div>
          <h1>
            O que eu Faço
          </h1>
          <h2>
            serviços e soluções
          </h2>
        </div>
        <div className="services">
          <ItemService />
          <ItemService />
          <ItemService />
        </div>
      </Services>

      <Footer />
    </Flex>
  );
}

export default Home;