import { Icon } from "@chakra-ui/react";
import { ReactChildren } from "react";

import { ItemServiceStyle } from './styles';

interface IItemServiceProps {
  mt?: string;

  icon: any;
  text: string;
  title: string;
}

export function ItemService({ mt, title, text, icon }: IItemServiceProps) {
  return (
    <ItemServiceStyle
      data-aos="flip-down"
      data-aos-duration="2000"
    >
      <Icon as={icon} color="cyan.500" fontSize="4rem" />
      <br />
      <h1>{title}</h1>
      <p>{text}</p>
    </ItemServiceStyle>
  );
}