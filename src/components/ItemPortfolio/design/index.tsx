import { Image, useDisclosure } from '@chakra-ui/react';
import { ModalViewDesign } from '../../Modal/ViewDesign';
import { ItemPortfolioStyle } from './styles';

interface IItemPortfolioProps {
  design: {
    title: string;
    banner: string;
    size: 'normal' | 'large';
  }

  animation: string;
  dur: string;
}

export function ItemPortfolioDesign({ design, animation, dur }: IItemPortfolioProps) {
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <>
      <ItemPortfolioStyle
        data-aos={animation}
        data-aos-duration={dur}
      >
        <Image
          className="img-design"
          src={`/assets/designs/${design.banner}`}
          onClick={onOpen}
        />
      </ItemPortfolioStyle>

      <ModalViewDesign
        design={design}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}