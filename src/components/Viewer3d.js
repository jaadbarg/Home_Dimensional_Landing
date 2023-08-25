import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

function Viewer3D({ modelUrl }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const currentContainer = containerRef.current;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xeeeeee); // Setting a light gray background

    const camera = new THREE.PerspectiveCamera(
      75,
      currentContainer.clientWidth / currentContainer.clientHeight, // Adjusting the aspect ratio to match the container
      0.1,
      1000
    );
    camera.position.z = 15; // Adjusting the camera's position further back

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      currentContainer.clientWidth,
      currentContainer.clientHeight
    ); // Setting the renderer size to match the container
    currentContainer.appendChild(renderer.domElement);

    // Add lighting to the scene
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 1);
    scene.add(directionalLight);

    const loader = new GLTFLoader();
    let mesh;

    loader.load(
      modelUrl,
      (gltf) => {
        mesh = gltf.scene;
        mesh.scale.set(2, 2, 2); // Scaling the model to make it larger
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

  return <div ref={containerRef} style={{ width: "100%", height: "600px" }} />; // Increasing the height of the viewer
}

export default Viewer3D;
