import { Icon } from '@chakra-ui/react';
import { FaArrowLeft, FaLongArrowAltRight } from 'react-icons/fa';
import { Link, Text, View } from '../../../../_app';

import { ItemSpace as ItemSpaceStyled } from './styles';

interface ItemSpaceProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  onClick?: () => void;
};

export const ItemSpace = ({ title, description, icon, href, onClick }: ItemSpaceProps) => (
  <ItemSpaceStyled>
    <img src={icon} alt='Ícone de programação' />
    <View style='content'>
      <Text type='h1' text={title} />
      <Text text={description} />
    </View>
    <Link href={href} style='go'>
      <button onClick={onClick}>
        <Icon as={FaLongArrowAltRight} />
      </button>
    </Link>
  </ItemSpaceStyled>
);
