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
  Link,
  Icon,
  VStack,
  Flex,
  HStack
} from '@chakra-ui/react';
import { FaGithub, FaEye, FaDesktop } from 'react-icons/fa';
import { Project } from '../../services';

interface IModalViewProjectProps {
  isOpen: boolean;
  onClose: () => void;

  project: Project;
}

export function ModalViewProject({ isOpen, onClose, project }: IModalViewProjectProps) {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} size="6xl">
      <ModalOverlay />
      <ModalContent bg="gray.900" color="gray.100">
        <ModalHeader>
          <HStack spacing={2}>
            <Icon as={FaDesktop} ml="2" fontSize="lg" color={'cyan.500'} />
            <Text>{project.title}</Text>
          </HStack>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack>
            <Text fontFamily="Montserrat" lineHeight="7" fontWeight="200" fontSize="1rem">
              {project.description}
            </Text>
          </VStack>
        </ModalBody>

        <ModalFooter fontFamily="Montserrat">
          {!!project?.github && (
            <Flex
              align="center"
              justify="center"
              mr="4"
              p="2"
              px="4"
              borderRadius="full"
              bg="cyan.500"
              color="gray.900"
              fontWeight="600"
              fontSize="sm"
              textAlign="center"

              transition="0.2s"
              _hover={{
                textDecoration: 'none',
                bg: 'cyan.600'
              }}
            >
              <Link href={project?.github} target="_blank">
                Acessar Código/Documentação
              </Link>
              <Icon as={FaGithub} ml="2" fontSize="lg" />
            </Flex>
          )}
          {!!project?.link && (
            <Flex
              align="center"
              justify="center"
              mr="4"
              p="2"
              px="4"
              borderRadius="full"
              bg="cyan.500"
              color="gray.900"
              fontWeight="600"
              fontSize="sm"
              textAlign="center"

              transition="0.2s"
              _hover={{
                textDecoration: 'none',
                bg: 'cyan.600'
              }}
            >
              <Link href={project?.github} target="_blank">
                Acessar Site/Plataforma Web
              </Link>
              <Icon as={FaEye} ml="2" fontSize="lg" />
            </Flex>
          )}
          <Button
            color="gray.900"
            onClick={onClose}
            borderRadius="full"
            fontFamily="Montserrat"
            fontWeight="600"
            fontSize="sm"
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