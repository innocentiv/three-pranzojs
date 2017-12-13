precision highp float;
varying vec3 vPosition;

void main () {


  float dProd = 0.8 + vPosition.z / 500.;

  gl_FragColor = vec4(dProd, // R
                      dProd, // G
                      dProd, // B
                      1.0);  // A

}