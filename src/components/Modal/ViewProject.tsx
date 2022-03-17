import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from '@chakra-ui/react';

interface IModalViewProjectProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalViewProject({ isOpen, onClose }: IModalViewProjectProps) {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} size="3xl">
      <ModalOverlay />
      <ModalContent bg="gray.900" color="gray.100">
        <ModalHeader>MyMoon</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontFamily="Montserrat" lineHeight="7">
            Projeto mais complexo e completo, lidei com o máximo de bibliotecas que
            aprendi durante o programa Ignite da Rocketseat, me importando muito com o
            código e a organização do projeto. Implementei o controle de dados com
            ReactHookForm, cache de dados com ReactQuery, autenticação de login com
            NextAuth, validação dos formulários com Yup, estilização com Styled
            Components, design system ChakraUI e RadixUI, banco de dados FaunaDB,
            mini blog com PrismicCMS, testes unitários com Jest e Testing Library e
            estratégias para melhorar a performance da aplicação.
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button
            color="gray.900"
            onClick={onClose}
            borderRadius="full"
            bg="cyan.500"
            size="md"
            transition="0.2s"

            _hover={{
              bg: 'cyan.600'
            }}
          >
            Fechar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}