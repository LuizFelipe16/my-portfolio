import { Text } from "@chakra-ui/react";
import Link from 'next/link';
import { scrollAnimationToSessionPageById } from "../../../utils/scrollAnimationToSessionPageById";

interface IItemSidebarNavProps {
  text: string;
  href: string;
  isPage?: boolean;
}

export function ItemSidebarNav({ href, text, isPage = false }: IItemSidebarNavProps) {
  const scroll = () => scrollAnimationToSessionPageById(href);

  if (isPage === true) {
    return (
      <Link href={`/${href}`} passHref>  
        <Text
          w="100%"
          bg="gray.900"
          p="3"
          borderRadius="lg"
          fontWeight="600"
          transition="0.2s"
          _hover={{
            bg: 'cyan.500',
            color: 'gray.900',
          }}
        >
          {text}
        </Text>
      </Link>
    );
  } else {
    return (
      <Text
        w="100%"
        bg="gray.900"
        p="3"
        borderRadius="lg"
        fontWeight="600"
        onClick={scroll}
        transition="0.2s"
        _hover={{
          bg: 'cyan.500',
          color: 'gray.900'
        }}
      >
        {text}
      </Text>
    );
  }
}