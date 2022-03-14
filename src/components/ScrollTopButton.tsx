import { Button, Icon } from "@chakra-ui/react";
import { FaArrowUp } from 'react-icons/fa';
import { animateScroll } from 'react-scroll';

export function ScrollTopButton() {
  return (
    <Button
      bgColor="#48CDD0"
      color="#171923"
      position="fixed"
      bottom="10"
      right="10"
      boxShadow="dark-lg"
      zIndex="1000"
      borderRadius="full"
      onClick={() => animateScroll.scrollToTop({ duration: 1000 })}

      _hover={{
        bgColor: '#43bcbe'
      }}
    >
      <Icon as={FaArrowUp} />
    </Button>
  );
}