// ---------------------
// OCTOPUS IS CONTROLLER
// ---------------------
var OCTOPUS = {
	changeToday: function () {
		MODEL.start = today();
	},

	fillMountColor: function (path, color) {
		path.setAttribute("fill", color);
	},

	getCurrentColor: function (item) {
		return MODEL.currentColor[item];
	},

	setCurrentColor: function (item, color) {
		MODEL.currentColor[item] = color;
	},

	isCurrentColor: function (item, color) {
		return (color.getHexString() === MODEL.currentColor[item].getHexString())? true: false;
	},

	getTime: function () {
		return MODEL.time;
	},

	getStart: function () {
		return MODEL.start;
	},

	getColor: function (color) {
		if (typeof color === 'string')
			return MODEL.color[color];
		else
			return new THREE.Color(color);
	}
};
