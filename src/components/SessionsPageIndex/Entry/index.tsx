import { Text } from "@chakra-ui/react";
import { Navigation } from "../../../components/Navigation";
import { Interactive3DElement, View } from "../../../_app";

import { Entry } from "./styles";

export function SessionEntry() {
  return (
    <Entry>
      <Navigation />
      <Interactive3DElement
        style="element-3d"
        scene="https://draft.spline.design/fXF3-Xm0PBYNFdNN/scene.splinecode"
        onLoad={(SplineApplication) => SplineApplication.setZoom(0.8)}
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
          Luiz Felipe
        </Text>

        <h1 className="text-typing">
          Desenvolvendo soluções para o <strong>futuro...</strong>
        </h1>
      </View>
    </Entry>
  );
}
