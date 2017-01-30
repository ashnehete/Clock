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

    findCurrentColor: function (object, fraction) {
        var gradients = MODEL.gradients[object];
        for (var i = 0; i < gradients.length - 1; i++) {
            var gradient1 = gradients[i];
            var gradient2 = gradients[i + 1];
            if (gradient1.position <= fraction && fraction < gradient2.position) {
                return UTIL.getColorDifference(gradient1.color, gradient2.color,
                    (fraction - gradient1.position) / (gradient2.position - gradient1.position));
            }
        }
    },

    getCurrentColor: function (object) {
        return MODEL.currentColor[object];
    },

    setCurrentColor: function (object, color) {
        MODEL.currentColor[object] = color;
    },

    isCurrentColor: function (object, color) {
        return (color.getHexString() === MODEL.currentColor[object].getHexString());
    },

    getTime: function () {
        return MODEL.time;
    },

    getStart: function () {
        return MODEL.start;
    }
};
