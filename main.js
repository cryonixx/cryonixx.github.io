import './style.css'
import imageSrc from './cirball.png';

import * as THREE from 'three';


const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); 

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#background'),
}); 

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(30);
renderer.render(scene, camera);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

const nineballTexture = new THREE.TextureLoader().load(imageSrc);

const nineball = new THREE.Mesh(
    new THREE.SphereGeometry(10, 32, 32),
    new THREE.MeshStandardMaterial({
        map: nineballTexture
    })
);

scene.add(nineball);

function animate() {
    requestAnimationFrame(animate);
    nineball.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();


