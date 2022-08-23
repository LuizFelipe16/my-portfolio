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
        // data-aos={animation}
        // data-aos-duration={dur}
      >
        <Image w="100%" h="10rem" src={`/assets/${project.banner}`} objectFit="cover" borderRadius="lg" />
        <h1>{project.title}</h1>
        <p className='previewContent'>{project.description}</p>

        <Button
          onClick={onOpen}
          w="100%"
          borderRadius="full"
          bg="#2D3748"
          color='cyan.500'
          fontWeight='medium'
          size="sm"
          transition="0.2s"

          _hover={{
            color: '#2D3748',
            bg: 'cyan.500'
          }}
        >
          Ver Completo
        </Button>
      </ItemPortfolioStyle>
      <ModalViewProject isOpen={isOpen} onClose={onClose} project={project} />
    </>
  );
}