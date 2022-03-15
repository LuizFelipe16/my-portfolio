import { Input as ChakraInput, InputProps } from '@chakra-ui/react';

interface IInputProps extends InputProps {
  text: string;
};

export function Input({ text, ...rest }: IInputProps) {
  return (
    <ChakraInput
      p="7"
      bg="gray.800"
      color="cyan.500"
      fontFamily="Montserrat"
      placeholder={text}
      borderWidth={1.9}
      borderColor="gray.600"
      borderRadius="full"
      boxShadow="md"

      _hover={{
        borderColor: 'gray.600',
      }}

      _focus={{
        borderColor: 'cyan.500',
      }}

      {...rest}
    />
  );
}