import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { Container, Engine } from "tsparticles-engine";
import { particlesOptions, getParticlesOptions } from "../../data/particlesOptions";

type MyParticlesProps = {
  id: string;
  opacity?: number;
};

export function MyParticles({ id, opacity }: MyParticlesProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);

  const options = !opacity ? particlesOptions : getParticlesOptions({ opacity })

  return (
    <Particles
      id={id}
      width="100vw"
      height="100vh"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
    />
  );
};
