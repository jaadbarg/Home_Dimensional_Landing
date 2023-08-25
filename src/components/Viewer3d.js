import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"; // Import OrbitControls

function Viewer3D({ modelUrl }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const currentContainer = containerRef.current;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xeeeeee);

    const camera = new THREE.PerspectiveCamera(
      75,
      currentContainer.clientWidth / (currentContainer.clientHeight * 0.6),
      0.1,
      1000
    );
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      currentContainer.clientWidth,
      currentContainer.clientHeight
    );
    currentContainer.appendChild(renderer.domElement);

    // Initialize OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Enables smooth damping (inertia) for rotation
    controls.dampingFactor = 0.25;
    controls.enableZoom = true; // Enable zooming
    controls.zoomSpeed = 1.5; // Adjust zoom speed

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 1);
    scene.add(directionalLight);

    const loader = new GLTFLoader();
    let mesh;

    loader.load(
      modelUrl,
      (gltf) => {
        mesh = gltf.scene;
        mesh.scale.set(7, 7, 7); // Scaling the model to make it twice as large
        mesh.position.set(0, 0, 0); // Centering the model
        scene.add(mesh);
      },
      undefined, // onProgress callback not needed
      (error) => {
        console.error("An error occurred while loading the GLTF model:", error);
        console.error("Server response:", error.target.response);
      }
    );

    const animate = () => {
      requestAnimationFrame(animate);

      controls.update(); // Update the controls on each frame

      if (mesh) {
        mesh.rotation.x += 0.005;
        mesh.rotation.y += 0.005;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      currentContainer.removeChild(renderer.domElement);
    };
  }, [modelUrl]);

  return <div ref={containerRef} style={{ width: "100%", height: "500px" }} />;
}

export default Viewer3D;
