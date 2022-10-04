uniform sampler2D tDiffuse;
uniform vec3 color;

varying vec2 vUv;


void main(void) {
  vec4 dest = texture2D(tDiffuse, vUv);
  dest.rgb = color;

  float kake = 1500.0;
  dest.rgb += sin(vUv.x * kake) * sin(vUv.y * kake) * 0.1;

  gl_FragColor = dest;
}
