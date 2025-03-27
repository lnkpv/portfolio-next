"use client";

import { Mesh, Program, Renderer, Triangle } from "ogl";
import React, { useEffect, useRef } from "react";

interface LiquidChromeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Base color as an RGB array. Default is [0.1, 0.1, 0.1]. */
  baseColor?: [number, number, number];
  midColor?: [number, number, number];
  thirdColor?: [number, number, number];
  secondaryColor?: [number, number, number];
  /** Animation speed multiplier. Default is 1.0. */
  speed?: number;
  /** Amplitude of the distortion. Default is 0.6. */
  amplitude?: number;
  /** Frequency modifier for the x distortion. Default is 2.5. */
  frequencyX?: number;
  /** Frequency modifier for the y distortion. Default is 1.5. */
  frequencyY?: number;
  /** Enable mouse/touch interaction. Default is true. */
  interactive?: boolean;
}

export const LiquidChrome: React.FC<LiquidChromeProps> = ({
  baseColor = [0.1, 0.1, 0.1],
  secondaryColor = [0.98, 0.83, 0.17],
  thirdColor = [0.69, 0.41, 0.45],
  midColor = [0.41, 0.0, 0.73],
  speed = 0.2,
  amplitude = 0.5,
  frequencyX = 3.3,
  frequencyY = 2.2,
  interactive = true,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    // Enable built-in antialiasing.
    const renderer = new Renderer({ antialias: true });
    const gl = renderer.gl;
    gl.clearColor(1, 1, 1, 1);

    // Vertex shader: passes along position and uv.
    const vertexShader = `
      attribute vec2 position;
      attribute vec2 uv;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // Fragment shader with the original vibrant color calculation.
    const fragmentShader = `
      precision highp float;
      uniform float uTime;
      uniform vec3 uResolution;
      uniform vec3 uBaseColor;
      uniform vec3 uMidColor;
      uniform vec3 uThirdColor;
      uniform vec3 uSecondaryColor;
      uniform float uAmplitude;
      uniform float uFrequencyX;
      uniform float uFrequencyY;
      uniform vec2 uMouse;
      varying vec2 vUv;

      // Render function for a given uv coordinate.
      vec4 renderImage(vec2 uvCoord) {
          // Convert uvCoord (in [0,1]) to a fragment coordinate.
          vec2 fragCoord = 2.1 * uvCoord * uResolution.xy;
          // Map fragCoord to a normalized space.
          vec2 uv = 3.9 + (0.34 * fragCoord - uResolution.xy) / min(uResolution.x, uResolution.y);
          uv.x -= 1.0;
          uv.y += 0.3;
          // Iterative cosine-based distortions.
          for (float i = 1.0; i < 10.0; i++){
              uv.x += uAmplitude / i * cos(i * uFrequencyX * uv.y + uTime + uMouse.x * 3.14159 * 0.3);
              uv.y += uAmplitude / i * cos(i * uFrequencyY * uv.x + uTime + uMouse.y * 3.14159 * 0.1);
          }

          // Add a liquid ripple effect based on the mouse position.
          vec2 diff = (uvCoord - uMouse);
          float dist = length(diff);
          float falloff = exp(-dist * 20.0);
          float ripple = sin(10.0 * dist - uTime * 2.0) * 0.03;
          uv += (diff / (dist + 0.0001)) * ripple * falloff;

          // Original vibrant color computation.
          // vec3 color = uBaseColor / abs(sin(uTime - uv.y - uv.x));
          // Вычисляем яркость шума (от 0 до 1) и мягко растягиваем её
          float brightness = pow(abs(sin(uTime - uv.y - uv.x)), 3.0)*0.99;

          // Два плавных перехода: от базового цвета к промежуточному, затем к вторичному
          vec3 color;
          // if (brightness < 0.6) {
          //     float factor = smoothstep(0.0, 0.6, brightness); // Плавный переход от Base к Mid
          //     color = mix(uBaseColor, uMidColor, factor);
          // } else if (brightness < 0.7) {
          //     float factor = smoothstep(0.6, 0.7, brightness); // Плавный переход от Mid к Secondary
          //     color = mix(uMidColor, uThirdColor, factor);
          // } else {
          //     float factor = smoothstep(0.7, 1.0, brightness); // Плавный переход от Mid к Secondary
          //     color = mix(uThirdColor, uSecondaryColor, factor);
          // }

          if (brightness < 0.6) {
              float factor = smoothstep(0.0, 0.6, brightness); // Плавный переход от Base к Mid
              color = mix(uBaseColor, uMidColor, factor);
          } else if (brightness < 0.9) {
              float factor = smoothstep(0.6, 0.9, brightness); // Плавный переход от Mid к Secondary
              color = mix(uMidColor, uThirdColor, factor);
          }
              else {
              float factor = smoothstep(0.9, 1.0, brightness); // Плавный переход от Mid к Secondary
              color = mix(uThirdColor, uSecondaryColor, factor);
          }
          return vec4(color, 1.0);
      }

      void main() {
          // 3x3 supersampling for anti-aliasing.
          vec4 col = vec4(0.0);
          int samples = 0;
          for (int i = -1; i <= 1; i++){
              for (int j = -1; j <= 1; j++){
                  vec2 offset = vec2(float(i), float(j)) * (1.0 / min(uResolution.x, uResolution.y));
                  col += renderImage(vUv + offset);
                  samples++;
              }
          }
          gl_FragColor = col / float(samples);
      }
    `;

    // Create geometry and program with uniforms.
    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: {
          value: new Float32Array([
            gl.canvas.width,
            gl.canvas.height,
            gl.canvas.width / gl.canvas.height,
          ]),
        },
        uBaseColor: { value: new Float32Array(baseColor) },
        uMidColor: { value: new Float32Array(midColor) },
        uThirdColor: { value: new Float32Array(thirdColor) },
        uSecondaryColor: { value: new Float32Array(secondaryColor) },
        uAmplitude: { value: amplitude },
        uFrequencyX: { value: frequencyX },
        uFrequencyY: { value: frequencyY },
        uMouse: { value: new Float32Array([0, 0]) },
      },
    });
    const mesh = new Mesh(gl, { geometry, program });

    // Resize handler.
    function resize() {
      const scale = 1;
      renderer.setSize(
        container.offsetWidth * scale,
        container.offsetHeight * scale
      );
      const resUniform = program.uniforms.uResolution.value as Float32Array;
      resUniform[0] = gl.canvas.width;
      resUniform[1] = gl.canvas.height;
      resUniform[2] = gl.canvas.width / gl.canvas.height;
    }
    window.addEventListener("resize", resize);
    resize();

    // Mouse and touch move handlers for interactivity.
    function handleMouseMove(event: MouseEvent) {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = 1 - (event.clientY - rect.top) / rect.height;
      const mouseUniform = program.uniforms.uMouse.value as Float32Array;
      mouseUniform[0] = x;
      mouseUniform[1] = y;
    }

    function handleTouchMove(event: TouchEvent) {
      if (event.touches.length > 0) {
        const touch = event.touches[0];
        const rect = container.getBoundingClientRect();
        const x = (touch.clientX - rect.left) / rect.width;
        const y = 1 - (touch.clientY - rect.top) / rect.height;
        const mouseUniform = program.uniforms.uMouse.value as Float32Array;
        mouseUniform[0] = x;
        mouseUniform[1] = y;
      }
    }

    if (interactive) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("touchmove", handleTouchMove);
    }

    // Animation loop.
    let animationId: number;
    function update(t: number) {
      animationId = requestAnimationFrame(update);
      // Multiply time by speed to adjust the animation rate.
      program.uniforms.uTime.value = t * 0.001 * speed;
      renderer.render({ scene: mesh });
    }
    animationId = requestAnimationFrame(update);

    container.appendChild(gl.canvas);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      if (interactive) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("touchmove", handleTouchMove);
      }
      if (gl.canvas.parentElement) {
        gl.canvas.parentElement.removeChild(gl.canvas);
      }
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [baseColor, speed, amplitude, frequencyX, frequencyY, interactive]);

  return <div ref={containerRef} className="w-full h-full" {...props} />;
};

export default LiquidChrome;
