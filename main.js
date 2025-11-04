// import * as THREE from 'three';
// import { Reflector } from 'three/addons/objects/Reflector.js';
// import * as TWEEN from 'tween';

// const images = [
//   'socrates.jpg',
//   'stars.jpg',
//   'wave.jpg',
//   'spring.jpg',
//   'mountain.jpg',
//   'sunday.jpg'
// ];

// const titles = [
//   'The Death of Socrates',
//   'Starry Night',
//   'The Great Wave off Kanagawa',
//   'Effect of Spring, Giverny',
//   'Mount Corcoran',
//   'A Sunday on La Grande Jatte'
// ];

// const artists = [
//   'Jacques-Louis David',
//   'Vincent Van Gogh',
//   'Katsushika Hokusai',
//   'Claude Monet',
//   'Albert Bierstadt',
//   'George Seurat'
// ];

// const textureLoader = new THREE.TextureLoader();
// const leftArrowImage = textureLoader.load(`left.png`);
// const rightArrowImage = textureLoader.load(`right.png`);

// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setAnimationLoop(animate);
// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.toneMapping = THREE.NeutralToneMapping;
// renderer.toneMappingExposure = 2;
// document.body.appendChild(renderer.domElement);

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);


// const root = new THREE.Object3D();
// scene.add(root);

// const count = 6;
// for (let i = 0; i < count; i++) {
//   const image = textureLoader.load(images[i]);

//   const baseNode = new THREE.Object3D();
//   baseNode.rotation.y = 2 * Math.PI * (i / count);

//   const border = new THREE.Mesh(
//     new THREE.BoxGeometry(3.2, 2.2, 0.005),
//     new THREE.MeshStandardMaterial({ color: 0x303030 })
//   );
//   border.position.z = -4;
//   baseNode.add(border);

//   const artwork = new THREE.Mesh(
//     new THREE.BoxGeometry(3, 2, 0.01),
//     new THREE.MeshStandardMaterial({ map: image })
//   );
//   artwork.position.z = -4;
//   baseNode.add(artwork);

//   const leftArrow = new THREE.Mesh(
//     new THREE.BoxGeometry(0.3, 0.3, 0.01),
//     new THREE.MeshStandardMaterial({ map: leftArrowImage, transparent: true })
//   );
//   leftArrow.name = 'left';
//   leftArrow.userData = i;
//   leftArrow.position.set(2.9, 0, -4);
//   baseNode.add(leftArrow);

//   const rightArrow = new THREE.Mesh(
//     new THREE.BoxGeometry(0.3, 0.3, 0.01),
//     new THREE.MeshStandardMaterial({ map: rightArrowImage, transparent: true })
//   );
//   rightArrow.name = 'right';
//   rightArrow.userData = i;
//   rightArrow.position.set(-2.9, 0, -4);
//   baseNode.add(rightArrow);

//   root.add(baseNode);
// }

// const spotlight = new THREE.SpotLight(0xffffff, 100.0, 10, 0.65, 1);
// spotlight.position.set(0, 5, 0);
// spotlight.target.position.set(0, 1, -5);
// scene.add(spotlight);
// scene.add(spotlight.target);

// const mirror = new Reflector(
//   new THREE.CircleGeometry(40, 64),
//   {
//     color: 0x505050,
//     textureWidth: window.innerWidth * window.devicePixelRatio,
//     textureHeight: window.innerHeight * window.devicePixelRatio,

//   }
// );

// mirror.position.set(0, -1.1, 0);
// mirror.rotateX(-Math.PI / 2);
// scene.add(mirror);

// function animate() {
//   TWEEN.update();
//   renderer.render(scene, camera);
// }

// function rotateGallery(index, direction) {
//   const newRotationY = root.rotation.y + (direction * 2 * Math.PI) / count;

//   const titleElement = document.getElementById('title');
//   const artistElement = document.getElementById('artist')

//   new TWEEN.Tween(root.rotation)
//     .to({ y: newRotationY }, 1500)
//     .easing(TWEEN.Easing.Quadratic.InOut)
//     .start()
//     .onStart(() => {
//       titleElement.style.opacity = 0;
//       artistElement.style.opacity = 0;
//     })
//     .onComplete(() => {
//       titleElement.innerText = titles[index];
//       artistElement.innerText = artists[index];
//       titleElement.style.opacity = 1;
//       artistElement.style.opacity = 1;
//     });
// }

// window.addEventListener('wheel', (ev) => {
//   root.rotation.y += ev.wheelDelta * 0.0001;
// });

// window.addEventListener('resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();

//   renderer.setSize(window.innerWidth, window.innerHeight);

//   mirror.getRenderTarget().setSize(
//     window.innerWidth * window.devicePixelRatio,
//     window.innerHeight * window.devicePixelRatio
//   );
// });

// window.addEventListener('click', (ev) => {
//   const mouse = new THREE.Vector2();
//   mouse.x = (ev.clientX / window.innerWidth) * 2 - 1;
//   mouse.y = -(ev.clientY / window.innerHeight) * 2 + 1;

//   const raycaster = new THREE.Raycaster();
//   raycaster.setFromCamera(mouse, camera);
//   const intersects = raycaster.intersectObjects(root.children, true);

//   if (intersects.length > 0) {
//     const clickedObject = intersects[0].object;
//     const index = clickedObject.userData;

//     if (clickedObject.name === 'left' || clickedObject.name === 'right') {
//       const direction = clickedObject.name === 'left' ? -1 : 1;
//       rotateGallery(index, direction);
//     }
//   }
// });

// document.getElementById('title').innerText = titles[0];
// document.getElementById('artist').innerText = artists[0];


















import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';

const images = [
  'socrates.jpg',
  'stars.jpg',
  'wave.jpg',
  'spring.jpg',
  'mountain.jpg',
  'sunday.jpg'
];

const textureLoader = new THREE.TextureLoader();

document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.overflow = 'hidden';

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// === Renderer ===
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.xr.enabled = true;
document.body.appendChild(renderer.domElement);
document.body.appendChild(VRButton.createButton(renderer));

// === Scene and Camera ===
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.01, 1000);
camera.position.set(0, 0, 0);

// === Controls (desktop only) ===
let controls;
if (!isMobile) {
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.minDistance = 0.1;
  controls.maxDistance = 1.5;
  controls.enablePan = false;
  controls.maxPolarAngle = Math.PI;
  controls.minPolarAngle = 0;
}

// === Create spherical panels ===
const sphereGroup = new THREE.Group();
scene.add(sphereGroup);

const radius = 2.5;
const planeSize = 5;
const planeGeometry = new THREE.PlaneGeometry(planeSize, planeSize);

const materials = images.map(img => {
  const tex = textureLoader.load(img);
  tex.colorSpace = THREE.SRGBColorSpace;
  return new THREE.MeshLambertMaterial({
    map: tex,
    side: THREE.FrontSide
  });
});

const faceConfigs = [
  { position: [0, 0, radius], materialIndex: 0 },
  { position: [0, 0, -radius], materialIndex: 1 },
  { position: [0, radius, 0], materialIndex: 2 },
  { position: [0, -radius, 0], materialIndex: 3 },
  { position: [radius, 0, 0], materialIndex: 4 },
  { position: [-radius, 0, 0], materialIndex: 5 }
];

faceConfigs.forEach(cfg => {
  const plane = new THREE.Mesh(planeGeometry, materials[cfg.materialIndex]);
  plane.position.set(...cfg.position);
  plane.lookAt(0, 0, 0);
  sphereGroup.add(plane);
});

// === Lighting ===
scene.add(new THREE.AmbientLight(0xffffff, 0.7));
const dirLight = new THREE.DirectionalLight(0xffffff, 0.4);
scene.add(dirLight);

// === Mobile handling ===
let alpha = 0, beta = 0, gamma = 0;
let permissionGranted = false;
let tiltSupported = false;

// Request fullscreen in landscape
function requestLandscapeFullscreen() {
  if (isMobile) {
    const elem = renderer.domElement;
    if (elem.requestFullscreen) elem.requestFullscreen();
    else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
    if (screen.orientation && screen.orientation.lock) {
      screen.orientation.lock('landscape-primary').catch(() => {});
    }
  }
}

// Orientation event
function onDeviceOrientation(event) {
  if (event.alpha || event.beta || event.gamma) {
    tiltSupported = true;
    alpha = (event.alpha || 0) * Math.PI / 180;
    beta = (event.beta || 0) * Math.PI / 180;
    gamma = (event.gamma || 0) * Math.PI / 180;
  }
}

// Fallback touch rotation
let touchStartX = 0, touchStartY = 0;
let lon = 0, lat = 0;
let phi = 0, theta = 0;

function onTouchStart(e) {
  touchStartX = e.touches[0].pageX;
  touchStartY = e.touches[0].pageY;
}

function onTouchMove(e) {
  const deltaX = e.touches[0].pageX - touchStartX;
  const deltaY = e.touches[0].pageY - touchStartY;
  touchStartX = e.touches[0].pageX;
  touchStartY = e.touches[0].pageY;

  lon -= deltaX * 0.1;
  lat += deltaY * 0.1;
  lat = Math.max(-85, Math.min(85, lat));
}

// Update camera rotation for tilt or touch
function updateMobileCamera() {
  if (tiltSupported && permissionGranted) {
    camera.rotation.order = 'YXZ';
    camera.rotation.y = -alpha;
    camera.rotation.x = beta;
  } else {
    // Fallback to touch
    phi = THREE.MathUtils.degToRad(90 - lat);
    theta = THREE.MathUtils.degToRad(lon);
    camera.target = new THREE.Vector3(
      Math.sin(phi) * Math.cos(theta),
      Math.cos(phi),
      Math.sin(phi) * Math.sin(theta)
    );
    camera.lookAt(camera.target);
  }
}

// Request permission (iOS)
function requestPermission() {
  if (typeof DeviceOrientationEvent !== 'undefined' &&
      typeof DeviceOrientationEvent.requestPermission === 'function') {
    DeviceOrientationEvent.requestPermission()
      .then(state => {
        if (state === 'granted') {
          permissionGranted = true;
          window.addEventListener('deviceorientation', onDeviceOrientation);
        }
      })
      .catch(console.warn);
  } else {
    permissionGranted = true;
    window.addEventListener('deviceorientation', onDeviceOrientation);
  }
}

// Setup for mobile
if (isMobile) {
  renderer.domElement.addEventListener('click', () => {
    requestPermission();
    requestLandscapeFullscreen();
  }, { once: true });

  renderer.domElement.addEventListener('touchstart', onTouchStart);
  renderer.domElement.addEventListener('touchmove', onTouchMove);
}

// === Animation loop ===
function animate() {
  if (isMobile) {
    updateMobileCamera();
  } else if (controls) {
    controls.update();
  }
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

// === Resize ===
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
