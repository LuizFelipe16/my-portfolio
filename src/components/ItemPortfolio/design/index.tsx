import { Image } from '@chakra-ui/react';
import { ItemPortfolioStyle } from './styles';

interface IItemPortfolioProps {
  design: {
    title: string;
    banner: string;
  }

  animation: string;
  dur: string;
}

export function ItemPortfolioDesign({ design, animation, dur }: IItemPortfolioProps) {
  return (
    <ItemPortfolioStyle
    // data-aos={animation}
    // data-aos-duration={dur}
    >
      <Image
        className="img-design"
        src={`/assets/designs/${design.banner}`}
      />
    </ItemPortfolioStyle>
  );
}