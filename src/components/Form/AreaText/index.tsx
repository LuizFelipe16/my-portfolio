import { Textarea as ChakraTextarea, TextareaProps } from '@chakra-ui/react';

interface ITextareaProps extends TextareaProps {
  text: string;
};

export function Textarea({ text, ...rest }: ITextareaProps) {
  return (
    <ChakraTextarea
      h="13rem"
      p="7"
      bg="gray.800"
      color="cyan.500"
      fontFamily="Montserrat"
      placeholder={text}
      borderWidth={1.9}
      borderColor="gray.600"
      borderRadius="md"
      boxShadow="md"
      resize="none"

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