import React from 'react';
import { type Sketch, type P5CanvasInstance } from '@p5-wrapper/react';
import { NextReactP5Wrapper } from '@p5-wrapper/next';
import {
  Settings,
  calculateDimensions,
  createPoints,
  draw,
  setup,
} from '@/lib/logo/main';
import { Particle } from '@/lib/logo/particle';
import Image from 'next/image';

const sketch: Sketch = (p5: P5CanvasInstance) => {
  const settings: Settings = {
    backgroundColour: '#2e1065',
    fadeRate: 8,
    hueInc: 0.025,
    minMaxSpeed: 1.5,
    maxMaxSpeed: 2.25,
    minStrokeWeight: 0.75,
    maxStrokeWeight: 1.5,
    particleCount: 1000,
    perlinScale: 0.0375,
    polarityThreshold: 0.5,
    scl: 15,
  };
  const dimensions = calculateDimensions(settings, 570, 280);
  const points = createPoints(p5, settings, dimensions);
  const particles: Particle[] = [];
  let counter = 0;
  let zoff = 0;

  p5.setup = () => setup(p5, settings, particles, dimensions);
  p5.draw = () =>
  ([counter, zoff] = draw(
    p5,
    settings,
    points,
    particles,
    dimensions,
    counter,
    zoff
  ));
};

export const AnimatedLogo = () => {
  return (
    <div className="w-full">
      {/* Mobile logo */}
      <div className="md:hidden text-center">
        <Image src="/selium.svg" alt="Selium Logo" />
      </div>

      {/* Desktop animated logo */}
      <div className="hidden md:block relative my-0 mx-auto text-white dark:text-zinc-950 w-full max-w-xl">
        <LogoMaskSvg />
        <NextReactP5Wrapper sketch={sketch} />
      </div>
    </div>
  );
};

const LogoMaskSvg = () => (
  <div className="absolute top-0 left-0 fill-current w-full max-w-xl">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 370 185">
      <path d="M-15-107.5v400h400v-400H-15zm82.7 230.2c-1.4 3.4-3.5 6.4-6.3 8.9s-6.1 4.4-10.1 5.7c-4 1.4-8.5 2-13.6 2-10.5 0-20.2-3.1-29.1-9.4l9.2-17.4c3.2 2.9 6.4 5 9.6 6.4 3.2 1.4 6.3 2.1 9.4 2.1 3.5 0 6.1-.8 7.9-2.4 1.7-1.6 2.6-3.4 2.6-5.5 0-1.2-.2-2.3-.7-3.2-.4-.9-1.2-1.8-2.2-2.5-1-.8-2.4-1.5-4-2.1s-3.6-1.4-6-2.2c-2.8-.9-5.5-1.9-8.2-2.9-2.7-1.1-5.1-2.5-7.1-4.2-2.1-1.8-3.8-4-5.1-6.7-1.3-2.8-2-6.2-2-10.3s.7-7.8 2-11.2c1.4-3.3 3.3-6.2 5.7-8.6 2.5-2.4 5.5-4.2 9-5.6 3.6-1.3 7.5-2 11.9-2 4.1 0 8.4.6 12.9 1.7s8.8 2.8 12.9 5l-8.6 16.8c-2.3-1.9-4.7-3.3-7-4.2-2.3-.9-4.6-1.4-6.8-1.4-2.8 0-5.1.7-6.8 2-1.8 1.3-2.6 3-2.6 5.2 0 1.5.4 2.7 1.3 3.6.9 1 2 1.8 3.5 2.5 1.4.7 3 1.3 4.8 1.8s3.6 1.1 5.3 1.6c7 2.3 12.2 5.5 15.5 9.4s4.9 9 4.9 15.3c0 4.5-.7 8.3-2.2 11.8zm68.2-10.6H94c0 8.6 4 12.9 12.1 12.9 4.3 0 7.6-1.8 9.8-5.3h19.2c-3.9 12.9-13.6 19.4-29.1 19.4-4.8 0-9.1-.7-13.1-2.1s-7.4-3.5-10.2-6.1c-2.8-2.6-5-5.8-6.5-9.5s-2.3-7.8-2.3-12.3c0-4.7.7-8.9 2.2-12.7 1.5-3.8 3.6-7 6.3-9.6 2.7-2.6 6-4.7 9.8-6.1s8.2-2.1 13-2.1 9.1.7 12.9 2.1c3.8 1.4 7 3.5 9.7 6.2 2.6 2.7 4.7 6 6 10 1.4 3.9 2.1 8.3 2.1 13.3v1.9zm25.7 24.9h-19.9V45.7h19.9V137zm28.1 0h-19.9V80.6h19.9V137zm.3-73.8c-.6 1.4-1.4 2.5-2.4 3.6-1 1-2.2 1.8-3.6 2.4-1.4.6-2.8.9-4.3.9s-3-.3-4.3-.9c-1.4-.6-2.5-1.4-3.6-2.4-1-1-1.8-2.2-2.4-3.6-.6-1.4-.9-2.8-.9-4.3s.3-3 .9-4.3c.6-1.4 1.4-2.5 2.4-3.6 1-1 2.2-1.8 3.6-2.4 1.4-.6 2.8-.9 4.3-.9s3 .3 4.3.9c1.4.6 2.5 1.4 3.6 2.4 1 1 1.8 2.2 2.4 3.6.6 1.4.9 2.8.9 4.3s-.3 3-.9 4.3zm67.9 53c0 7.6-2.5 13.3-7.5 17.2-5 3.8-12.5 5.7-22.5 5.7s-17.5-1.9-22.5-5.7-7.5-9.5-7.5-17.2V80.6h19.9v31.8c0 7 3.4 10.5 10.1 10.5 6.7 0 10.1-3.5 10.1-10.5V80.6h19.9v35.6zM361.4 137h-19.9v-27.8c0-2.9-.2-5.2-.6-7s-1-3.3-1.8-4.3-1.7-1.7-2.7-2.1-2.1-.5-3.3-.5c-6.4 0-9.6 4.7-9.6 14v27.8h-19.9v-27.8c0-2.9-.2-5.2-.5-7.1-.4-1.9-.9-3.4-1.6-4.5s-1.6-1.9-2.7-2.3-2.4-.6-3.8-.6c-1.2 0-2.4.2-3.5.6s-2.1 1.1-2.9 2.1c-.8 1.1-1.5 2.5-2 4.4s-.7 4.3-.7 7.3V137H266V80.6h19.9v6.9c5.4-5.2 11.5-7.8 18.3-7.8 8.4 0 14.7 3.5 19.1 10.6 4.5-7.1 10.9-10.7 19.1-10.7 2.6 0 5.1.4 7.5 1.2 2.3.8 4.4 2 6 3.6 1.7 1.6 3 3.8 4 6.4s1.5 5.8 1.5 9.6V137z" />
      <path d="M113.2 93.9c-2.1-1.7-4.5-2.5-7.5-2.5-3.1 0-5.6.8-7.5 2.4s-3.2 3.9-3.7 6.8h22.8c-.7-2.8-2-5-4.1-6.7z" />
    </svg>
  </div>
);
