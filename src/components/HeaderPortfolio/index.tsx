import { Box, Heading, Icon, Stack, Text, Tooltip, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";

interface IHeaderPortfolioProps {
  title: string;
}

export function HeaderPortfolio({ title }: IHeaderPortfolioProps) {
  return (
    <Stack
      w="100%"
      h="30vh"
      bg="cyan.500"

      position="relative"
      align="center"
      justify="center"
    >
      <Tooltip hasArrow label="Voltar" bg="gray.900" color="cyan.500" placement="bottom">
        <Text
          as="div"
          w="auto"
          h="auto"
          p="3"
          position="absolute"
          left={["20px", "20px", "40px"]}
          top={["20%", "20%", "45%"]}
          cursor="pointer"
          borderRadius="full"
          transition="0.2s"
          boxShadow="lg"
          display="flex"
          align="center"

          _hover={{
            bg: 'gray.900',
            color: 'cyan.500'
          }}
        >
          <Link href="/" passHref>
            <Icon
              as={FaLongArrowAltLeft}
              fontSize="2xl"
            />
          </Link>
        </Text>
      </Tooltip>

      <VStack fontFamily="Montserrat" data-aos="fade-down" data-aos-duration="1500">
        <Heading
          fontSize="2xl"
          fontWeight="500"
          color="gray.900"
        >
          {title}
        </Heading>
        <Text fontSize="sm">
          Continue rolando para baixo para ver mais
        </Text>
      </VStack>
    </Stack>
  );
}