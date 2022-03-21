import { Avatar, Button, Image, Text } from "@chakra-ui/react";
import { ItemPortfolioStyle } from "./styles";

interface IItemPortfolioProfileProps {
  img: string;
  text: string;
  link: string;
}

export function ItemPortfolioProfile({ img, text, link }: IItemPortfolioProfileProps) {
  return (
    <ItemPortfolioStyle>
      <Avatar
        className="img-design-profile"
        src={`/assets/designs/${img}`}
      />
      <Text textAlign="center" color="gray.50" fontSize="md">
        {text}
      </Text>
      <Button
        as="a"
        href={link}
        target="_blank"
        w="100%"
        color="gray.900"
        borderRadius="full"
        bg="cyan.500"
        size="md"
        transition="0.2s"

        _hover={{
          bg: 'cyan.600'
        }}
      >
        Acessar e Ver
      </Button>
    </ItemPortfolioStyle>
  );
}