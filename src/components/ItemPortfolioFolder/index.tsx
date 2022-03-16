import { Button } from '@chakra-ui/react';
import { ItemPortfolioFolderStyle } from './styles';

interface IItemPortfolioFolderProps {
  title: string;
  text: string;

  animation: string;
}

export function ItemPortfolioFolder({ text, title, animation }: IItemPortfolioFolderProps) {
  return (
    <ItemPortfolioFolderStyle
      data-aos={animation}
      data-aos-duration="1000"
    >
      <h1>{title}</h1>
      <p>{text}</p>

      <Button
        w="100%"
        borderRadius="full"
        bg="cyan.500"
        mt="6"
        size="lg"
        transition="0.2s"

        _hover={{
          bg: 'cyan.600'
        }}
      >
        Ver Portfólio
      </Button>
    </ItemPortfolioFolderStyle>
  );
}