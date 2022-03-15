import { Heading, Img, Progress, Stack, Text, VStack } from "@chakra-ui/react";

interface IItemSkillProps {
  mt: string;
}

export function ItemSkill({ mt }: IItemSkillProps) {
  return (
    <Stack
      data-aos="fade-down"
      data-aos-duration="2000"
      className="item-skill"
      w="32rem"
      h="12rem"
      mt={mt}
      p="6"
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
      <Img w="8rem" src="/illustrations/code.svg" objectFit="cover" alt="Code" />

      <VStack align="flex-start">
        <Heading fontFamily="Montserrat" fontWeight="600" fontSize="2xl">Clean Code</Heading>
        <Text fontFamily="JetBrains Mono" fontWeight="300" fontSize="sm">
          Tenho como minha principal diretriz durante o desenvolvimento, à
          qualidade do código  seguindo as melhores práticas do mercado.
        </Text>
      </VStack>
    </Stack>
  );
}