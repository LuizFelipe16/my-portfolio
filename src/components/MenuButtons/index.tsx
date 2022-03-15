import { useState } from "react";
import { Button, Icon } from "@chakra-ui/react";
import { animateScroll } from 'react-scroll';

import { BsFillGearFill, BsArrowUpShort } from 'react-icons/bs';
import { IoMdClose, IoIosArrowUp } from 'react-icons/io';
import { AiFillLinkedin, AiOutlineInstagram, AiFillGithub } from 'react-icons/ai';

import { MenuTools } from "./styles";

export function MenuButtons() {
  const [isMenu, setIsMenu] = useState(false);
  const handleOnOpenOrCloseMenu = () => setIsMenu(!isMenu);

  return (
    <MenuTools>
      {
        !!isMenu && (
          <>
            <Button className="button-tool" boxShadow="lg">
              <Icon fontSize={21} as={AiFillGithub} />
            </Button>

            <Button className="button-tool" boxShadow="lg">
              <Icon fontSize={21} as={AiOutlineInstagram} />
            </Button>

            <Button className="button-tool" boxShadow="lg">
              <Icon fontSize={21} as={AiFillLinkedin} />
            </Button>

            <Button
              className="button-tool"
              boxShadow="lg"
              onClick={() => animateScroll.scrollToTop({ duration: 1000 })}
            >
              <Icon fontSize={23} as={BsArrowUpShort} />
            </Button>
          </>
        )
      }

      <Button
        className="button-tool"
        bgColor="#48CDD0"
        color="#171923"

        boxShadow="lg"

        onClick={handleOnOpenOrCloseMenu}
      >
        {!!isMenu ? (
          <Icon fontSize={21} as={IoMdClose} />
        ) : (
          <Icon as={BsFillGearFill} />
        )}
      </Button>
    </MenuTools>
  );
}