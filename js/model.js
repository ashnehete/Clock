// -----
// MODEL
// -----

/**
 * ColorStop for gradient
 * @constructor
 * @param {number} color    - Color at this gradient stop
 * @param {number} position - Position of stop from 0 to 1
 */
function ColorStop(color, position) {
	this.color = new THREE.Color(color);
	this.position = position;
}

var MODEL = {
	// time: 1000*60*60*24, // Milliseconds in a day
	// start: UTIL.today(),
	time: 10000,
	start: Date.now(),
	color: {
		red: new THREE.Color(0xff0000),
		green: new THREE.Color(0x00ff00),
		blue: new THREE.Color(0x0000ff),
		white: new THREE.Color(0xffffff),
		black: new THREE.Color(0x000000)
	},

	objects: [
		"sun", "sky", "mount1", "mount2", "mount3"
	],

	gradients: {
		sun: [
			new ColorStop(0x000000, 0),
			new ColorStop(0xFFFFFF, 0.5),
			new ColorStop(0x00FFFF, 1)
		],
		sky: [
			new ColorStop(0x000000, 0),
			new ColorStop(0xFFFFFF, 0.5),
			new ColorStop(0x00FFFF, 1)
		],
		mount1: [
			new ColorStop(0x000000, 0),
			new ColorStop(0xFFFFFF, 0.5),
			new ColorStop(0x00FFFF, 1)
		],
		mount2: [
			new ColorStop(0x000000, 0),
			new ColorStop(0xFFFFFF, 0.5),
			new ColorStop(0x00FFFF, 1)
		],
		mount3: [
			new ColorStop(0x000000, 0),
			new ColorStop(0xFFFFFF, 0.5),
			new ColorStop(0x00FFFF, 1)
		],
	},

	currentColor: {
		sun:  new THREE.Color(0x000000),
		sky:  new THREE.Color(0x000000),
		mount1:  new THREE.Color(0x000000),
		mount2:  new THREE.Color(0x000000),
		mount3:  new THREE.Color(0x000000)
	}
};
