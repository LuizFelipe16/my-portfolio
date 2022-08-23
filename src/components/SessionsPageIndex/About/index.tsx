import { Icon, useBreakpointValue } from "@chakra-ui/react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import { TecSkills } from "../../../components/TecSkills";

import { About } from "./styles";

export function SessionAbout() {
  const isMobileVersion = useBreakpointValue({
    base: true,
    lg: false,
  });

  return (
    <About id="about">
      <div className="infos">
        <div className="flex-dir-column" data-aos="fade-down-right" data-aos-duration="1000">
          <h2>Meu Objetivo</h2>
          <br />
          <p className="text-italic text-info">
            <Icon className="quote" color="#48CDD0" mr="2" as={FaQuoteLeft} />
            A maior habilidade de quem desenvolve códigos, é saber resolver problemas
            através deles. Em frente a um computador devemos encontrar soluções e se adaptar de acordo
            com os erros e falhas.
            <Icon color="#48CDD0" ml="2" as={FaQuoteRight} />
          </p>
        </div>

        <h2>Ocupação Atual</h2>
        <p className="text-info">Frontend Developer at CodeLeap</p>

        <h2>Hard Skills que mais utilizo</h2>
        <TecSkills />
      </div>

      <img src="/images/eu3.png" alt="Luiz Felipe" />

      <div data-aos={!!isMobileVersion ? "zoom-in-right" : "zoom-in-left"} data-aos-duration="1000" className="about">
        <h1>Olá,</h1>
        <p>
          me chamo luiz, desenvolvedor fullStack,
          especializado em Frontend Web focado em UX e design gráfico de qualidade.

          Meu começo foi com JS há três anos, no ensino técnico e fui me aprofundar sozinho.

          Criei diversos e variados projetos, sempre me aprimorando nas tecnologias que uso para
          explorar possibilidades ilimitadas que o código é capaz de oferecer,
          buscando soluções para os problemas que encontro.
        </p>
      </div>
    </About>
  );
}