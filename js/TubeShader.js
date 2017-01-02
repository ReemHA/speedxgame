THREE.TubeShader = {
	uniforms:{
		color: {value: new THREE.Color().setHex(0x0000ff)}
	},
	vertexShader:[
		"void main() { ",
		"	if (position.z < -20) { "
				"position.x *= 1.1;"
				"position.y *= 1.2;"
				"gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);"
			"}"
		"}"

	].join("\n"),
	fragmentShader:[
		"uniform vec3 color;",
		"void main(){",
			"gl_FragColor = vec4(color, 1);",
		"}"
	].join("\n")

};
