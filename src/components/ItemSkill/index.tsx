import { Heading, Img, Progress, Stack, Text, useBreakpointValue, VStack } from "@chakra-ui/react";

interface IItemSkillProps {
  title: string;
  text: string;
  img: string;
  mt: string;
}

export function ItemSkill({ mt, title, text, img }: IItemSkillProps) {
  const isMobileVersion = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (!!isMobileVersion) {
    return (
      <Stack
        data-aos="fade-down"
        data-aos-duration="3000"
        className="item-skill"
        w="100%"
        h="auto"
        mt="6"
        p="6"
        py="9"
        direction="column"
        boxShadow="2xl"
        bgColor="gray.900"
        borderRadius="2xl"
        align="center"
        justify="center"
        spacing="6"
        color="cyan.500"

        _hover={{
          bg: 'gray.800',
        }}
      >
        <Img w="8rem" src={img} objectFit="cover" alt="Code" />

        <VStack align="center" textAlign="center">
          <Heading fontFamily="Montserrat" fontWeight="500" fontSize="xl">{title}</Heading>
          <Text fontFamily="Nunito" fontWeight="300" fontSize="md">
            {text}
          </Text>
        </VStack>
      </Stack>
    );
  }

  return (
    <Stack
      data-aos="fade-down"
      data-aos-duration="1000"
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

      <VStack align="flex-start" textAlign="justify">
        <Heading fontFamily="Montserrat" fontWeight="500" fontSize="xl">{title}</Heading>
        <Text fontFamily="Nunito" fontWeight="300" fontSize="md">
          {text}
        </Text>
      </VStack>
    </Stack>
  );
}