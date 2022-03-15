import { Icon } from "@chakra-ui/react";
import { FaFileCode } from "react-icons/fa";

import { ItemServiceStyle } from './styles';

interface IItemServiceProps {
  mt?: string;
}

export function ItemService({ mt }: IItemServiceProps) {
  return (
    <ItemServiceStyle
      data-aos="flip-down"
      data-aos-duration="2000"
    >
      <Icon as={FaFileCode} color="cyan.500" fontSize="4rem" />
      <br />
      <h1>Sites</h1>
      <p>Desenvolvo de sites profissionais, blogs, portfólios, landing pages e e-commerce.</p>
    </ItemServiceStyle>
  );
}