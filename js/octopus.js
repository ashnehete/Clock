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

	getCurrentColor: function (item, fraction) {
		var gradients = MODEL.gradients[item];
		for (var i = 0; i < gradients.length - 1; i++) {
			var gradient1 = gradients[i];
			var gradient2 = gradients[i+1];
			if (gradient1.position <= fraction && fraction < gradient2.position) {
				return UTIL.getColorDifference(gradient1.color,
					gradient2.color, (fraction - gradient1.position) / gradient2.position);
			}
		}
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
