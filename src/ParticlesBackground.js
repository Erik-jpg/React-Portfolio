import React from "react";
import Particles from "react-particles-js";
import particlesConfig from "./components/Config/Particles-config";

export default function ParticlesBackground() {
  return (
    <Particles params={particlesConfig}></Particles>
  );
}