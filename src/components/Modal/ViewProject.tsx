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

  project: {
    title: string;
    description: string;
  }
}

export function ModalViewProject({ isOpen, onClose, project }: IModalViewProjectProps) {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} size="6xl">
      <ModalOverlay />
      <ModalContent bg="gray.900" color="gray.100">
        <ModalHeader>{project.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontFamily="Montserrat" lineHeight="6" fontWeight="200" fontSize="1rem">
            {project.description}
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