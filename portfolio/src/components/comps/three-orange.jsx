import * as THREE from 'three';
import { useEffect, useRef } from "react";

function MyThreeO() {
  const refContainer = useRef(null);

  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0c0a09);

    // Sizes
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    window.addEventListener('resize', () =>
    {
        // Update sizes
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight

        // Update camera
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()

        // Update renderer
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    // Camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
    camera.position.x = 0
    camera.position.y = 0
    camera.position.z = 2
    scene.add(camera);

    // Canvas
    const canvas = refContainer.current;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;

    const positionArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
        const radius = 1; // Adjust the radius of the spherical distribution
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;

        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.cos(phi);
        const z = radius * Math.sin(phi) * Math.sin(theta);

        positionArray[i] = x;
        positionArray[i + 1] = y;
        positionArray[i + 2] = z;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));

    // Materials
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.004, // Decrease the size of particles
        color: new THREE.Color(0xDD7D31) // Adjust the color of particles
    });

    // Particle system
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Lights
    const pointLight = new THREE.PointLight(0xffffff, 0.1);
    pointLight.position.x = 2;
    pointLight.position.y = 3;
    pointLight.position.z = 4;
    scene.add(pointLight);

    // Animate
    const clock = new THREE.Clock();

    const tick = () =>
    {
        const elapsedTime = clock.getElapsedTime();

        // Update particles
        particles.rotation.y = 0.4 * elapsedTime;

        // Render
        renderer.render(scene, camera);

        // Call tick again on the next frame
        window.requestAnimationFrame(tick);
    }

    tick();

    // Clean up
    return () => {
      // Remove event listeners here if needed
    };
  }, []);

  return (
    <canvas ref={refContainer}></canvas>
  );
}

export default MyThreeO;
