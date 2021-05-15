export default {
  transparent: true,
  depthTest: true,
  depthWrite: true,

  uniforms: {
    paillette: {
      value: 0
    }
  },

  vertexShader: `
    precision highp float; 
    uniform float paillette;

    attribute vec3 instancePosition;
    attribute vec3 instanceColor;
    attribute float instanceScale;
    attribute float instanceOpacity;

    varying vec3 vColor;
    varying float vOpacity;

    void main() {
      // world matrix * instance position = world position 
      vec4 mvPosition = modelViewMatrix * vec4(instancePosition, 1.0);

      // add scale
      mvPosition.xyz += position * instanceScale;

      // compute instance position from camera
      gl_Position = projectionMatrix * mvPosition;

      vColor = instanceColor + (vec3(1.0, 1.0 ,1.0) * (cos(instanceOpacity + paillette) * 0.1));
      if (instanceOpacity == 1.0) {
        vOpacity = 0.8 + cos(instanceOpacity + paillette) * 0.2;
      } else {
        vOpacity = instanceOpacity;
      }
    }
  `,

  fragmentShader: `
    precision highp float;

    varying vec3 vColor;
    varying float vOpacity;

    void main() {
      gl_FragColor = vec4(vColor, vOpacity);
      // gl_FragColor.a *= ((1.0 - pow( gl_FragCoord.z, 10000.0 )));
    }
  `
}
