import { Flex } from "@chakra-ui/react";

import { ItemSkill } from "../../../components/ItemSkill";

import { Skills } from "../../../styles/sessions/skills";

export function SessionSkills() {
  return (
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
  );
}