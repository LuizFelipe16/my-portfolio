import { Text } from "@chakra-ui/react";
import { Navigation } from "../../../components/Navigation";
import { Interactive3DElement, View } from "../../../_app";

import { Entry } from "./styles";

export function SessionEntry() {
  return (
    <Entry>
      <Navigation />
      <Interactive3DElement
        style="el-3d"
        scene="https://prod.spline.design/CvPbd63Q829YZyZk/scene.splinecode"
      />

      {/* <View style="content">
        <Text
          className="title-gradient"
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          bgClip='text'
          fontSize={['5xl', '6xl', '7xl']}
          fontWeight='extrabold'
          fontFamily="JetBrains Mono"
          textShadow="2xl"
        >
          Luiz Felipe
        </Text>

        <h1 className="text-typing">
          Desenvolvendo soluções para o <strong>futuro...</strong>
        </h1>
      </View> */}
    </Entry>
  );
}
