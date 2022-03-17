import { useState, useEffect } from "react";
import { Flex, Icon, Text } from "@chakra-ui/react";
import Head from "next/head";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import { MenuButtons } from "../components/MenuButtons";
import { Navigation } from "../components/Navigation";
import { Loading } from "../components/Loading";
import { TecSkills } from "../components/TecSkills";
import { ItemSkill } from "../components/ItemSkill";
import { Footer } from "../components/Footer";
import { ItemService } from "../components/ItemService";
import { ItemPortfolioFolder } from "../components/ItemPortfolioFolder";

import { Welcome } from "../styles/sessions/welcome";
import { About } from "../styles/sessions/about";
import { Skills } from "../styles/sessions/skills";
import { Services } from "../styles/sessions/services";
import { Portfolio } from "../styles/sessions/portfolio";

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
            <h2>Meu Objetivo</h2>
            <br />
            <p className="text-italic text-info">
              <Icon className="quote" color="#48CDD0" mr="2" as={FaQuoteLeft} />
              A maior habilidade de quem desenvolve códigos, é saber resolver problemas
              através deles. Em frente a um computador, devemos encontrar soluções e se adaptar de acordo
              com os erros e falhas.
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
            me chamo luiz, desenvolvedor fullStack,
            especializado em Frontend Web focado em UX e design gráfico de qualidade.

            Meu começo foi com JS há três anos, no ensino técnico e fui me aprofundar sozinho.

            Criei diversos e variados projetos, sempre me aprimorando nas tecnologios que uso para
            explorar possibilidades ilimitadas que o código é capaz de oferecer,
            buscando soluções para os problemas que encontro.
          </p>
        </div>
      </About>

      <Skills id="skills">
        <h1>Meus Diferenciais</h1>
        <Flex direction="column">
          <ItemSkill
            mt="5rem"
            img="/illustrations/code.svg"
            title="Clean Code"
            text={`
              Tenho como minha principal diretriz durante o desenvolvimento, à
              qualidade do código  seguindo as melhores práticas do mercado.
            `}
          />
          <ItemSkill
            mt="10rem"
            img="/illustrations/design.svg"
            title="Design de Alta Qualidade"
            text={`
              Trabalho com foco em designs de imagens e interfaces claras e objetivos de alta fidelidade, 
              para a melhor experiência do usuário, assim como superar as expectativas do projeto.
            `}
          />
        </Flex>
        <div className="line">
          <div />
          <div />
          <div />
          <div />
        </div>
        <Flex direction="column">
          <ItemSkill
            mt="15rem"
            img="/illustrations/modern.svg"
            title="Desenvolvimento Moderno"
            text={`
              Desenvolvo projetos usando as melhores e mais modernas ferramentas do 
              mercado, com interfaces que transmitem modernidade e intuitividade, 
              chamando a atenção dos usuários.
            `}
          />
          <ItemSkill
            mt="13rem"
            img="/illustrations/problens.svg"
            title="Resolução de Problemas"
            text={`
              Meu principal objetivo é solucionar o problema principal que é exposto, 
              da melhor forma possível,
              usando tudo que estiver ao meu alcance.
            `}
          />
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

      <Portfolio id="portfolio">
        <div>
          <h1>
            Meu Portfólio
          </h1>
          <h2>
            minha experiência de anos fazendo o que mais gosto
          </h2>
        </div>
        <div className="portfolios">
          <ItemPortfolioFolder
            animation="fade-right"
            title="Mais de 35 Projetos desenvolvidos"
            text="Sites, Lading Pages, Plataformas, Sites Institucionais e mais"
          />
          <ItemPortfolioFolder
            animation="fade-left"
            title="Mais de 70 Artes publicadas"
            text="Brandings, Carrosseis, Posts Únicos, Artes de Anúncios para Redes Sociais e mais"
          />
        </div>
      </Portfolio>

      <Footer />
    </Flex>
  );
}

export default Home;