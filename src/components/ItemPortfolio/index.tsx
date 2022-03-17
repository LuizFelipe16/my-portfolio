import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import { ItemPortfolioStyle } from './styles';

interface IItemPortfolioProps {
  title: string;
  text: string;

  animation: string;
  dur: string;
}

export function ItemPortfolio({ text, title, animation, dur }: IItemPortfolioProps) {
  return (
    <ItemPortfolioStyle
      data-aos={animation}
      data-aos-duration={dur}
    >
      <h1>{title}</h1>
      <p>{text}</p>

      <Link href="/portfolio/dev" passHref>
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
    </ItemPortfolioStyle>
  );
}