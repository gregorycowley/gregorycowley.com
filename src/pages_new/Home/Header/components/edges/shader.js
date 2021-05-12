export default {
  transparent: true,
  depthTest: false,
  depthWrite: false,

  uniforms: {
    opacity: {
      value: 0.05
    },
    width: {
      value: 1.0
    },
    resolution: {
      value: [1920, 1080]
    }
  },

  vertexShader: `
    #define PI 3.1415926535897932384626433832795
    precision highp float;

    uniform vec2 resolution;
    uniform float opacity;
    uniform float width;

    attribute vec3 instanceFrom;
    attribute vec3 instanceTo;

    varying vec3 vColor;
    varying float vOpacity;
    varying float vDistance;

    float atan2(in float y, in float x)
    {
        return x == 0.0 ? sign(y) * PI / 2.0 : atan(y, x);
    }
    
    void main() {
      vec2 r = vec2(resolution.x, 1080);
      float linewidth = width;
      float aspect = r.x / r.y;

      vec4 start = modelViewMatrix * vec4( instanceFrom, 1.0 );
      vec4 end = modelViewMatrix * vec4( instanceTo, 1.0 );

      vec4 clipStart = projectionMatrix * start;
      vec4 clipEnd = projectionMatrix * end;

      vec2 ndcStart = clipStart.xy / clipStart.w;
      vec2 ndcEnd = clipEnd.xy / clipEnd.w;

      // direction
      vec2 dir = ndcEnd - ndcStart;

      // account for clip-space aspect ratio
      dir.x *= aspect;
      dir = normalize( dir );

      // perpendicular to dir
      vec2 offset = vec2( dir.y, - dir.x );

      // undo aspect ratio adjustment
      dir.x /= aspect;
      offset.x /= aspect;

      // sign flip
      if ( position.x < 0.0 ) offset *= - 1.0;

      // endcaps
      if ( position.y < 0.0 ) {
        offset += - dir;
      } else if ( position.y > 1.0 ) {
        offset += dir;
      }

      // adjust for linewidth
      offset *= linewidth;

      // adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
      // offset /= resolution.y;

      // select end
      vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

      // back to clip space
      // offset *= clip.w;

      clip.xy += offset;
      vOpacity = opacity;

      gl_Position = clip;
    }
  `,

  fragmentShader: `
    precision highp float;
    varying float vOpacity;

    void main() {
      gl_FragColor = vec4(1.0, 1.0, 1.0, vOpacity);
    }
  `
}
