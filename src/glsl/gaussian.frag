
uniform sampler2D tDiffuse;
uniform float weight[10];
uniform float ratio;
uniform bool horizontal;
uniform vec2 resolution;

void main(void) {

  vec2 tFrag = 1.0 / resolution;
  vec2 fc;
  vec3 destColor = vec3(0.0);

  if(horizontal){
    fc = vec2(gl_FragCoord.s, gl_FragCoord.t);
    // destColor += texture2D(tDiffuse, (fc + vec2(-15.0, 0.0)) * tFrag).rgb * weight[15];
    // destColor += texture2D(tDiffuse, (fc + vec2(-14.0, 0.0)) * tFrag).rgb * weight[14];
    // destColor += texture2D(tDiffuse, (fc + vec2(-13.0, 0.0)) * tFrag).rgb * weight[13];
    // destColor += texture2D(tDiffuse, (fc + vec2(-12.0, 0.0)) * tFrag).rgb * weight[12];
    // destColor += texture2D(tDiffuse, (fc + vec2(-11.0, 0.0)) * tFrag).rgb * weight[11];
    // destColor += texture2D(tDiffuse, (fc + vec2(-10.0, 0.0)) * tFrag).rgb * weight[10];

    destColor += texture2D(tDiffuse, (fc + vec2(-9.0, 0.0)) * tFrag).rgb * weight[9];
    destColor += texture2D(tDiffuse, (fc + vec2(-8.0, 0.0)) * tFrag).rgb * weight[8];
    destColor += texture2D(tDiffuse, (fc + vec2(-7.0, 0.0)) * tFrag).rgb * weight[7];
    destColor += texture2D(tDiffuse, (fc + vec2(-6.0, 0.0)) * tFrag).rgb * weight[6];
    destColor += texture2D(tDiffuse, (fc + vec2(-5.0, 0.0)) * tFrag).rgb * weight[5];
    destColor += texture2D(tDiffuse, (fc + vec2(-4.0, 0.0)) * tFrag).rgb * weight[4];
    destColor += texture2D(tDiffuse, (fc + vec2(-3.0, 0.0)) * tFrag).rgb * weight[3];
    destColor += texture2D(tDiffuse, (fc + vec2(-2.0, 0.0)) * tFrag).rgb * weight[2];
    destColor += texture2D(tDiffuse, (fc + vec2(-1.0, 0.0)) * tFrag).rgb * weight[1];
    destColor += texture2D(tDiffuse, (fc + vec2( 0.0, 0.0)) * tFrag).rgb * weight[0];
    destColor += texture2D(tDiffuse, (fc + vec2( 1.0, 0.0)) * tFrag).rgb * weight[1];
    destColor += texture2D(tDiffuse, (fc + vec2( 2.0, 0.0)) * tFrag).rgb * weight[2];
    destColor += texture2D(tDiffuse, (fc + vec2( 3.0, 0.0)) * tFrag).rgb * weight[3];
    destColor += texture2D(tDiffuse, (fc + vec2( 4.0, 0.0)) * tFrag).rgb * weight[4];
    destColor += texture2D(tDiffuse, (fc + vec2( 5.0, 0.0)) * tFrag).rgb * weight[5];
    destColor += texture2D(tDiffuse, (fc + vec2( 6.0, 0.0)) * tFrag).rgb * weight[6];
    destColor += texture2D(tDiffuse, (fc + vec2( 7.0, 0.0)) * tFrag).rgb * weight[7];
    destColor += texture2D(tDiffuse, (fc + vec2( 8.0, 0.0)) * tFrag).rgb * weight[8];
    destColor += texture2D(tDiffuse, (fc + vec2( 9.0, 0.0)) * tFrag).rgb * weight[9];

    // destColor += texture2D(tDiffuse, (fc + vec2( 10.0, 0.0)) * tFrag).rgb * weight[10];
    // destColor += texture2D(tDiffuse, (fc + vec2( 11.0, 0.0)) * tFrag).rgb * weight[11];
    // destColor += texture2D(tDiffuse, (fc + vec2( 12.0, 0.0)) * tFrag).rgb * weight[12];
    // destColor += texture2D(tDiffuse, (fc + vec2( 13.0, 0.0)) * tFrag).rgb * weight[13];
    // destColor += texture2D(tDiffuse, (fc + vec2( 14.0, 0.0)) * tFrag).rgb * weight[14];
    // destColor += texture2D(tDiffuse, (fc + vec2( 15.0, 0.0)) * tFrag).rgb * weight[15];
  }else{
    fc = gl_FragCoord.st;

    // destColor += texture2D(tDiffuse, (fc + vec2(0.0, -15.0)) * tFrag).rgb * weight[15];
    // destColor += texture2D(tDiffuse, (fc + vec2(0.0, -14.0)) * tFrag).rgb * weight[14];
    // destColor += texture2D(tDiffuse, (fc + vec2(0.0, -13.0)) * tFrag).rgb * weight[13];
    // destColor += texture2D(tDiffuse, (fc + vec2(0.0, -12.0)) * tFrag).rgb * weight[12];
    // destColor += texture2D(tDiffuse, (fc + vec2(0.0, -11.0)) * tFrag).rgb * weight[11];
    // destColor += texture2D(tDiffuse, (fc + vec2(0.0, -10.0)) * tFrag).rgb * weight[10];

    destColor += texture2D(tDiffuse, (fc + vec2(0.0, -9.0)) * tFrag).rgb * weight[9];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0, -8.0)) * tFrag).rgb * weight[8];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0, -7.0)) * tFrag).rgb * weight[7];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0, -6.0)) * tFrag).rgb * weight[6];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0, -5.0)) * tFrag).rgb * weight[5];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0, -4.0)) * tFrag).rgb * weight[4];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0, -3.0)) * tFrag).rgb * weight[3];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0, -2.0)) * tFrag).rgb * weight[2];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0, -1.0)) * tFrag).rgb * weight[1];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0,  0.0)) * tFrag).rgb * weight[0];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0,  1.0)) * tFrag).rgb * weight[1];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0,  2.0)) * tFrag).rgb * weight[2];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0,  3.0)) * tFrag).rgb * weight[3];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0,  4.0)) * tFrag).rgb * weight[4];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0,  5.0)) * tFrag).rgb * weight[5];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0,  6.0)) * tFrag).rgb * weight[6];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0,  7.0)) * tFrag).rgb * weight[7];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0,  8.0)) * tFrag).rgb * weight[8];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0,  9.0)) * tFrag).rgb * weight[9];

    // destColor += texture2D(tDiffuse, (fc + vec2(0.0,  10.0)) * tFrag).rgb * weight[10];
    // destColor += texture2D(tDiffuse, (fc + vec2(0.0,  11.0)) * tFrag).rgb * weight[11];
    // destColor += texture2D(tDiffuse, (fc + vec2(0.0,  12.0)) * tFrag).rgb * weight[12];
    // destColor += texture2D(tDiffuse, (fc + vec2(0.0,  13.0)) * tFrag).rgb * weight[13];
    // destColor += texture2D(tDiffuse, (fc + vec2(0.0,  14.0)) * tFrag).rgb * weight[14];
    // destColor += texture2D(tDiffuse, (fc + vec2(0.0,  15.0)) * tFrag).rgb * weight[15];
  }

  gl_FragColor = vec4(destColor, 1.0);

}
