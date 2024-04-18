let camera, scene, renderer, cube;

function init() {
    // Initialize scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xefe7db); // Beige
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    // Initialize renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    // Initialize moveable object (cube)
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Green
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    cube.position.x = 1
    cube.position.y = 1

    camera.position.z = 5;

    document.addEventListener('keydown', onDocumentKeyDown, false);
    animate();
}

function onDocumentKeyDown(event) {
    var keyCode = event.which;
    if (keyCode == 87) { // W key
        cube.position.y += 0.1;
    } else if (keyCode == 83) { // S key
        cube.position.y -= 0.1;
    } else if (keyCode == 65) { // A key
        cube.position.x -= 0.1;
    } else if (keyCode == 68) { // D key
        cube.position.x += 0.1;
    }
}

function animate() {
    requestAnimationFrame(animate);
// Example condition to move the camera
 if (cube.position.x > 2) { // Threshold value
    camera.position.x += (cube.position.x - 2) * 0.05; // Smooth transition
}
else if (cube.position.x < -2) { // Threshold value
    camera.position.x -= (cube.position.x + 2) * 0.05; // Smooth transition
}

if (cube.position.y > 2) { // Threshold value
    camera.position.y += (cube.position.y - 2) * 0.05; // Smooth transition
}
else if (cube.position.y < -2) { // Threshold value
    camera.position.y -= (cube.position.y + 2) * 0.05; // Smooth transition
}

// Update the camera looking at the cube
 camera.lookAt(cube.position);
renderer.render(scene, camera);
}

init();