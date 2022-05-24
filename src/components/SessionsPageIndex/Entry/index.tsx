import NLink from "next/link";
import { Text, Button, Spinner, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { HiArrowNarrowRight } from 'react-icons/hi'

import { Navigation } from "../../../components/Navigation";
import { Interactive3DElement, View } from "../../../_app";

import { Entry } from "./styles";

export function SessionEntry() {
  const [isLoadingElement3d, setLoadingIsElement3d] = useState(true);

  return (
    <Entry>
      <Navigation />

      {!!isLoadingElement3d && <div className="loading-element-3d"><Spinner color='cyan.500' size="xl" /></div>}
      <Interactive3DElement
        style="element-3d"
        scene="https://draft.spline.design/fXF3-Xm0PBYNFdNN/scene.splinecode"
        onLoad={(SplineApplication) => {SplineApplication.setZoom(0.8); setLoadingIsElement3d(false)}}
      />

      <View style="content">
        <Text
          className="title-gradient"
          bgGradient='linear(to-l, #D1D2DC, #48CDD0)'
          bgClip='text'
          fontSize={['4xl', '5xl', '6xl']}
          fontWeight='extrabold'
          fontFamily="JetBrains Mono"
          textShadow="2xl"
        >
          Dev Louiz
        </Text>

        <h1 className="text-typing">
          Desenvolvendo soluções para o <strong>futuro...</strong>
        </h1>

        <div data-aos='fade-right' data-aos-duration='1000'>
          <NLink href='/spaces'>
            <Button 
              className='access-button'
              boxShadow='dark-lg'
            >
              Blog
            </Button>
          </NLink>
        </div>
      </View>
    </Entry>
  );
}
