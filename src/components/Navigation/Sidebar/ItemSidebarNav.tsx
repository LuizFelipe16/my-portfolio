import { Text } from "@chakra-ui/react";
import { scrollAnimationToSessionPageById } from "../../../utils/scrollAnimationToSessionPageById";

interface IItemSidebarNavProps {
  text: string;
  href: string;
}

export function ItemSidebarNav({ href, text }: IItemSidebarNavProps) {
  const scroll = () => scrollAnimationToSessionPageById(href);

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