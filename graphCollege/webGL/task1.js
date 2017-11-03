function init() {
    var renderer = new THREE.WebGLRenderer(({
        canvas: document.getElementById('canvas_box'),
        antialias: true,

    }));

    renderer.setClearColor(0x666666);

/*    var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 2.5),
        new THREE.MeshBasicMaterial({
            color: 0xD2D2D2
        })
    );*/

    var Torus = new THREE.Mesh(new THREE.TorusGeometry(3, 1, 4, 8),
        new THREE.MeshBasicMaterial({
            colr:0xff00ff
        })
        );

    var cameraPos = {
        x:5,
        y:4,
        z:3
    };
    var camera = new THREE.PerspectiveCamera(60,4/3,1,1000);
    camera.position.set(cameraPos.x,cameraPos.y,cameraPos.z);
    // camera.lookAt(new THREE.Vector3(0,0,0));

    var scene = new THREE.Scene();
    scene.add(camera);
    scene.add(cube);
    scene.add(Torus);

    renderer.render(scene,camera);
}

window.onload = function () {
    init();
};