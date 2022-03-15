import { Text } from "@chakra-ui/react";

import { TecSkillsStyles } from './styles';

export function TecSkills() {
  return (
    <TecSkillsStyles>
      <div>
        <div className="icon"><img src="/skills/typescript.svg" alt="TypeScript" /></div>
        <Text fontSize="sm" color="gray.900">TypeScript</Text>
      </div>
      <div>
        <div className="icon"><img src="/skills/javascript.png" alt="JavaScript" /></div>
        <Text fontSize="sm" color="gray.900">JavaScript</Text>
      </div>
      <div>
        <div className="icon"><img src="/skills/react.png" alt="React" /></div>
        <Text fontSize="sm" color="gray.900">ReactJS</Text>
      </div>
      <div>
        <div className="icon"><img src="/skills/next.png" alt="Next" /></div>
        <Text fontSize="sm" color="gray.900">NextJS</Text>
      </div>
      <div>
        <div className="icon"><img src="/skills/nodejs.png" alt="NodeJS" /></div>
        <Text fontSize="sm" color="gray.900">NodeJS</Text>
      </div>
      <div>
        <div className="icon"><img src="/skills/chakra.png" alt="ChakraUI" /></div>
        <Text fontSize="sm" color="gray.900">ChakraUI</Text>
      </div>
      <div>
        <div className="icon"><img src="/skills/sass.png" alt="Sass" /></div>
        <Text fontSize="sm" color="gray.900">Sass</Text>
      </div>
    </TecSkillsStyles>
  );
}