import { Button, Image, useDisclosure } from '@chakra-ui/react';
import { ModalViewProject } from '../Modal/ViewProject';
import { ItemPortfolioStyle } from './styles';

interface IItemPortfolioProps {
  project: {
    title: string;
    description: string;
    banner: string;
    link: string;
    github?: string;
  }

  animation: string;
  dur: string;
}

export function ItemPortfolio({ project, animation, dur }: IItemPortfolioProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ItemPortfolioStyle
        data-aos={animation}
        data-aos-duration={dur}
      >
        <Image w="100%" h="10rem" src={`/assets/${project.banner}`} objectFit="cover" borderRadius="lg" />
        <h1>{project.title}</h1>
        <p>{project.description}</p>

        <Button
          onClick={onOpen}
          w="100%"
          borderRadius="full"
          bg="cyan.500"
          size="sm"
          transition="0.2s"

          _hover={{
            bg: 'cyan.600'
          }}
        >
          Ver Completo
        </Button>
        <Button
          as="a"
          href={project.link}
          target="_blank"
          w="100%"
          borderRadius="full"
          bg="cyan.500"
          size="sm"
          transition="0.2s"

          _hover={{
            bg: 'cyan.600'
          }}
        >
          Acessar
        </Button>
      </ItemPortfolioStyle>
      <ModalViewProject isOpen={isOpen} onClose={onClose} project={project} />
    </>
  );
}