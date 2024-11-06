import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

import { useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import {useEffect} from 'react';

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
            document.getElementById("__next")!.role = "presentation"; 
    }, []);
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {Promise<void>}, []);
  return (
    <Layout>
      <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: {
                  enable: true,
                  zIndex: -1
                },
                background: {
                    color: {
                        value: "#2e3440",
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: "push",
                        },
                        onHover: {
                            enable: false,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 75,
                            duration: 0.5,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#b48ead",
                    },
                    links: {
                        color: "#b48ead",
                        distance: 150,
                        enable: true,
                        opacity: 0.3,
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
                        random: true,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 90,
                    },
                    opacity: {
                        value: 0.3,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 4 },
                    },
                },
                detectRetina: true,
            }}
        />
      <Component {...pageProps} />
    </Layout>
  );
}
