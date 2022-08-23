import NLink from "next/link";
import { Text, Button, Spinner, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";

import { Navigation } from "../../../components/Navigation";
import { Interactive3DElement, View } from "../../../_app";

import { Entry } from "./styles";
import { MyParticles } from "../../MyParticles";

export function SessionEntry() {
  const [isLoadingElements, setIsLoadingElements] = useState(true);

  const isMobileVersion = useBreakpointValue({
    base: true,
    lg: false,
  });

  return (
    <Entry>
      <Navigation />

      {!isLoadingElements && <MyParticles id='bgParticlesPageApp' />}

      {!!isLoadingElements && !isMobileVersion && <div className="loading-element-3d"><Spinner color='cyan.500' size="xl" /></div>}
      <Interactive3DElement
        style="element-3d"
        scene="https://prod.spline.design/CvPbd63Q829YZyZk/scene.splinecode"
        onLoad={(SplineApplication) => {SplineApplication.setZoom(0.8); setIsLoadingElements(false)}}
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
          {isMobileVersion 
            ? ( <>Criando soluções para o <strong>futuro...</strong></> )
            : ( <>Desenvolvendo soluções para o <strong>futuro...</strong></> )
          }
        </h1>

        <div data-aos='fade-right' data-aos-duration='1000'>
          <NLink href='/posts/programacao' passHref>
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
