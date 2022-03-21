import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Button,
  Image,
  Flex,
} from '@chakra-ui/react';

interface IModalViewProjectProps {
  isOpen: boolean;
  onClose: () => void;

  design: {
    banner: string;
    title: string;
    size: 'normal' | 'large';
  }
}

export function ModalViewDesign({ isOpen, onClose, design }: IModalViewProjectProps) {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent bg="gray.900" color="gray.100">
        <ModalBody>
          <Flex w="100%" align="center" justify="center">
            <Image
              w="25rem"
              borderRadius="lg"
              h={design.size === 'large' ? "32rem" : "25rem"}
              objectFit="cover"
              className="img-design"
              src={`/assets/designs/${design.banner}`}
            />
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button
            w="100%"
            color="gray.900"
            onClick={onClose}
            fontFamily="Montserrat"
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