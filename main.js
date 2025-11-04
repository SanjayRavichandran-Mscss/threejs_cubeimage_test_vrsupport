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

// Prevent horizontal scroll and fit to page
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.overflow = 'hidden';

// Detect mobile
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// Function to request fullscreen and lock landscape
function requestLandscapeFullscreen() {
  if (isMobile) {
    // Request fullscreen
    if (renderer.domElement.requestFullscreen) {
      renderer.domElement.requestFullscreen();
    } else if (renderer.domElement.webkitRequestFullscreen) {
      renderer.domElement.webkitRequestFullscreen();
    } else if (renderer.domElement.mozRequestFullScreen) {
      renderer.domElement.mozRequestFullScreen();
    } else if (renderer.domElement.msRequestFullscreen) {
      renderer.domElement.msRequestFullscreen();
    }

    // Lock to landscape if supported
    if (screen.orientation && screen.orientation.lock) {
      screen.orientation.lock('landscape-primary').catch(err => {
        console.log('Orientation lock failed:', err);
      });
    }

    // Listen for orientation change and prompt if portrait
    screen.orientation.addEventListener('change', () => {
      if (screen.orientation.type.startsWith('portrait')) {
        alert('Please rotate your device to landscape for the best experience.');
      }
    });
  }
}

// Renderer setup with XR enabled
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.toneMapping = THREE.NeutralToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.xr.enabled = true; // Enable VR/AR support
document.body.appendChild(renderer.domElement);

// Add VR button
document.body.appendChild(VRButton.createButton(renderer));

// Scene and camera
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff); // White background
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.01, 1000);
camera.position.set(0, 0, 0); // Centered inside the sphere

// Controls
let controls;
if (isMobile) {
  // Custom device orientation for mobile
  controls = null; // We'll handle orientation manually
  let alpha = 0, beta = 0, gamma = 0;
  let permissionGranted = false;

  // Request permission for iOS (requires user gesture)
  const requestPermission = () => {
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
      DeviceOrientationEvent.requestPermission()
        .then(permissionState => {
          if (permissionState === 'granted') {
            permissionGranted = true;
            window.addEventListener('deviceorientation', onDeviceOrientation);
          }
        })
        .catch(console.error);
    } else {
      // Non-iOS
      permissionGranted = true;
      window.addEventListener('deviceorientation', onDeviceOrientation);
    }
  };

  // Handle device orientation event
  function onDeviceOrientation(event) {
    alpha = event.alpha ? Math.PI / 180 * event.alpha : 0; // Z-axis rotation
    beta = event.beta ? Math.PI / 180 * event.beta : 0; // X-axis rotation
    gamma = event.gamma ? Math.PI / 180 * event.gamma : 0; // Y-axis rotation
  }

  // Apply orientation to camera
  function updateCameraFromOrientation() {
    if (permissionGranted) {
      camera.rotation.order = 'YXZ';
      camera.rotation.y = -alpha; // Yaw
      camera.rotation.x = beta; // Pitch
      camera.rotation.z = gamma; // Roll (optional, can set to 0 for stability)
    }
  }

  // Add click listener for permission on mobile (triggers landscape fullscreen)
  renderer.domElement.addEventListener('click', () => {
    requestPermission();
    requestLandscapeFullscreen();
  }, { once: true });

  // Also trigger on load if possible, but user gesture needed
  window.addEventListener('load', () => {
    setTimeout(() => {
      if (!permissionGranted) {
        requestLandscapeFullscreen(); // Request fullscreen without permission
      }
    }, 1000);
  });
} else {
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.minDistance = 0.1;
  controls.maxDistance = 1.5; // Restrict zoom to stay inside
  controls.enablePan = false; // Disable panning to keep centered
  controls.maxPolarAngle = Math.PI; // Allow full rotation but stay inside
  controls.minPolarAngle = 0;
}

// Sphere group (no auto-rotation)
const sphereGroup = new THREE.Group();
scene.add(sphereGroup);

// Parameters for spherical arrangement
const radius = 2.5;
const planeSize = 5; // Larger planes to minimize gaps when viewed from inside
const planeGeometry = new THREE.PlaneGeometry(planeSize, planeSize);

// Load textures and create materials for each "face" (FrontSide since facing inward)
const materials = [];
for (let i = 0; i < 6; i++) {
  const imageTexture = textureLoader.load(images[i]);
  imageTexture.colorSpace = THREE.SRGBColorSpace; // Proper color space

  const material = new THREE.MeshLambertMaterial({ // Lambert for even lighting, no glare
    map: imageTexture,
    side: THREE.FrontSide // Front side faces inward
  });
  materials.push(material);
}

// Define positions for 6 inward-facing panels (octahedral directions)
const faceConfigs = [
  { position: [0, 0, radius], materialIndex: 0 },   // +Z
  { position: [0, 0, -radius], materialIndex: 1 },  // -Z
  { position: [0, radius, 0], materialIndex: 2 },   // +Y
  { position: [0, -radius, 0], materialIndex: 3 },  // -Y
  { position: [radius, 0, 0], materialIndex: 4 },   // +X
  { position: [-radius, 0, 0], materialIndex: 5 }   // -X
];

// Create and position each plane
faceConfigs.forEach(config => {
  const plane = new THREE.Mesh(planeGeometry, materials[config.materialIndex]);
  plane.position.set(...config.position);
  plane.lookAt(0, 0, 0); // Orient to face the center (inward)
  sphereGroup.add(plane);
});

// Lighting (placed inside for even illumination)
const ambientLight = new THREE.AmbientLight(0xffffff, 0.7); // Soft ambient
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.4); // Soft directional inside
directionalLight.position.set(0, 0, 0); // At center, but will illuminate uniformly with ambient
scene.add(directionalLight);

// Animation loop (no auto-rotation)
function animate() {
  if (isMobile) {
    updateCameraFromOrientation();
  } else if (controls) {
    controls.update();
  }
  renderer.render(scene, camera);
}

// Use setAnimationLoop for XR support
renderer.setAnimationLoop(animate);

// Resize handler (maintain aspect and fit)
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});