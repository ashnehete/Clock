// -----------------
// UTILITY FUNCTIONS
// -----------------
var UTIL = {
    getTimeString: function (time) {
        return ((time + "").length === 1) ? "0" + time : "" + time;
    },

    getColorDifference: function (from, to, fraction) {
        return new THREE.Color(
            (from.r + (to.r - from.r) * fraction),  // Red
            (from.g + (to.g - from.g) * fraction),  // Green
            (from.b + (to.b - from.b) * fraction)); // Blue
    },

    // Milliseconds till today 00:00:00
    today: function () {
        var day = new Date();
        day.setHours(0);
        day.setMinutes(0);
        day.setSeconds(0);
        day.setMilliseconds(0);
        return day.getTime();
    },

    getColor: function (color) {
        if (typeof color === 'string')
            return MODEL.color[color];
        else
            return new THREE.Color(color);
    }
};
