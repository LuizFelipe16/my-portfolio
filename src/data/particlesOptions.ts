
// Links
// https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
// https://github.com/matteobruni/tsparticles/tree/main/components/react

import { IOptions, RecursivePartial } from "tsparticles-engine";

type PropsGet = {
  opacity?: number;
};

const defaultConfig = {
  background: {
    color: {
      value: "#17192300",
    },
  },
  fullScreen: true,
  fpsLimit: 120,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 100,
        duration: 0.4,
      },
    },
  },
}

export const particlesOptions: RecursivePartial<IOptions> = {
  ...defaultConfig,
  particles: {
    color: {
      value: "#48CDD0",
    },
    links: {
      color: "#2D3748",
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 1.2,
      straight: true,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.4,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
}

export const getParticlesOptions = ({ opacity }: PropsGet): RecursivePartial<IOptions> => {
  const options: RecursivePartial<IOptions> = {
    ...defaultConfig,
    particles: {
      color: {
        value: "#48CDD0",
      },
      links: {
        color: "#2D3748",
        distance: 150,
        enable: true,
        opacity: opacity,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1.2,
        straight: true,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: opacity,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  }

  return options
}