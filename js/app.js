var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0x000000, 1 );
document.body.appendChild( renderer.domElement );

var materialSun = new THREE.MeshBasicMaterial( { color: 0x000000 } );
var sun = new THREE.Mesh( new THREE.CircleGeometry( 12, 512 ), materialSun );
scene.add(sun);

camera.position.z = 100;

sun.geometry.dynamic =
sun.geometry.verticesNeedUpdate =
sun.geometry.normalsNeedUpdate = true;

// -------------
//   MOVEMENTS
// -------------
// Grid: {x: 80, y: 60}
// y-displaced: -30

// (function move() {
// 	var elapsed = Date.now() - OCTOPUS.getStart();
// 	if(elapsed <= OCTOPUS.getTime()) {
// 		requestAnimationFrame(move);
// 		var fraction = elapsed / OCTOPUS.getTime();
// 		var angle = (elapsed * 2 * Math.PI) / OCTOPUS.getTime();
//
// 		angleSun = angle + (Math.PI / 2);
// 		sun.position.x = 80 * Math.cos(angleSun);
// 		sun.position.y = -30/*displaced*/ + (-60 * Math.sin(angleSun)); // Anti-Clockwise
//
// 		angleMoon = angleSun + Math.PI;
// 		moon.position.x = 80 * Math.cos(angleMoon);
// 		moon.position.y = -30/*displaced*/ + (-60 * Math.sin(angleMoon)); // Anti-Clockwise
//
// 		renderer.render( scene, camera );
// 	}
// })();


// -------------
// COLOUR CHANGE
// -------------

(function color() {
    var elapsed = Date.now() - OCTOPUS.getStart();
    if (elapsed <= OCTOPUS.getTime()) {
		// console.log(elapsed);
        requestAnimationFrame(color);
        var fraction = elapsed / OCTOPUS.getTime();
		// console.log(fraction);
		for (var i = 0; i < MODEL.objects.length; i++) {
			var object = MODEL.objects[i];
			newColor = OCTOPUS.findCurrentColor(object, fraction);
			if (!OCTOPUS.isCurrentColor(object, newColor)) {
				OCTOPUS.setCurrentColor(object, newColor);
			}
		}
		materialSun.color = OCTOPUS.getCurrentColor("sun");
		renderer.setClearColor(OCTOPUS.getCurrentColor("sky").getHex());
		for (var j = 1; j <= 3; j++) {
			var mountColor = OCTOPUS.getCurrentColor("mount"+j).getHexString();
			OCTOPUS.fillMountColor(document.getElementById("path"+j), "#"+mountColor);
		}
		renderer.render( scene, camera );
	}
})();

renderer.render( scene, camera );

window.addEventListener( "resize", function () {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.render( scene, camera );
}, false );

// -------------
//     CLOCK
// -------------
var changeclock = function() {
	requestAnimationFrame(changeclock);
	var now = new Date();
	var s = now.getSeconds();
	var m = now.getMinutes();
	var h = now.getHours();

	// Changing seconds
	if (s == second.innerText) return;
	else second.innerText = UTIL.getTimeString(s);
	// Changing minutes
	if (m == minute.innerText) return;
	else minute.innerText = UTIL.getTimeString(m);
	// Changing hours
	if (h == hour.innerText) return;
	else {
		hour.innerText = UTIL.getTimeString(h);
		// Changing day
		if (h === 0) {
			OCTOPUS.changeToday();
		}
	}
};

(function clock(){
	var now = new Date();
	second.innerText = UTIL.getTimeString(now.getSeconds());
	minute.innerText = UTIL.getTimeString(now.getMinutes());
	hour.innerText = UTIL.getTimeString(now.getHours());
	requestAnimationFrame(changeclock);
}());
