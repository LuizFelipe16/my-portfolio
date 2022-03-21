import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import { ItemPortfolioFolderStyle } from './styles';

interface IItemPortfolioFolderProps {
  title: string;
  text: string;
  href: string;

  animation: string;
}

export function ItemPortfolioFolder({ text, title, animation, href }: IItemPortfolioFolderProps) {
  return (
    <ItemPortfolioFolderStyle
      data-aos={animation}
      data-aos-duration="3000"
    >
      <h1>{title}</h1>
      <p>{text}</p>

      <Link href={href} passHref>
        <Button
          as="a"
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
      </Link>
    </ItemPortfolioFolderStyle>
  );
}