import './style.css'
import * as THREE from 'three'
import { planet1,planet2,planet3 } from './addMeshes'
import { addLight } from './addLights'

const renderer = new THREE.WebGLRenderer()
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100
)
const scene = new THREE.Scene()
const meshes = {}
const lights = {}
const clock = new THREE.Clock() //clock
// scene.background = new THREE.Color(0xaaccd8);

// 创建背景图
const textureLoader = new THREE.TextureLoader();
textureLoader.load('/textures/cute.webp', function (texture) {
    // 将加载的纹理应用到场景的背景中
    scene.background = texture;
});
init()
function init() {
    // 设置渲染器的默认设置，并将场景/画布添加到网页中
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)
    meshes.planet1 = planet1()
	meshes.planet2 = planet2()
	meshes.planet3 = planet3()

    lights.default = addLight()

    scene.add(lights.default)
    scene.add(meshes.planet1)
	scene.add(meshes.planet2)
	scene.add(meshes.planet3)


    camera.position.set(0, 0, 5)
    resize()
    animate()
}

function resize() {
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight)
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
    })
}

function animate() {
    requestAnimationFrame(animate);

    const tick = clock.getElapsedTime();
    const radius = 3; // 同心圆的半径
    const angleIncrement = (Math.PI * 2) / 3; // 每个星球之间的角度间隔

    // 计算每个星球的位置
    meshes.planet1.position.x = radius * Math.cos(tick);
    meshes.planet1.position.y = radius * Math.sin(tick);

    meshes.planet2.position.x = radius * Math.cos(tick + angleIncrement);
    meshes.planet2.position.y = radius * Math.sin(tick + angleIncrement);

    meshes.planet3.position.x = radius * Math.cos(tick + angleIncrement * 2);
    meshes.planet3.position.y = radius * Math.sin(tick + angleIncrement * 2);

    renderer.render(scene, camera);
}
