import { Heading, Img, Progress, Stack, Text, VStack } from "@chakra-ui/react";

interface IItemSkillProps {
  title: string;
  text: string;
  img: string;
  mt: string;
}

export function ItemSkill({ mt, title, text, img }: IItemSkillProps) {
  return (
    <Stack
      data-aos="fade-down"
      data-aos-duration="2000"
      className="item-skill"
      w="33rem"
      h="12rem"
      mt={mt}
      p="6"
      py="9"
      direction="row"
      boxShadow="2xl"
      bgColor="gray.900"
      borderRadius="2xl"
      align="center"
      justify="space-between"
      spacing="6"
      color="cyan.500"

      _hover={{
        bg: 'gray.800',
      }}
    >
      <Img w="8rem" src={img} objectFit="cover" alt="Code" />

      <VStack align="flex-start">
        <Heading fontFamily="Montserrat" fontWeight="500" fontSize="xl">{title}</Heading>
        <Text fontFamily="Nunito" fontWeight="300" fontSize="md">
          {text}
        </Text>
      </VStack>
    </Stack>
  );
}