import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import './Rollercoaster.css';

const points = [
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(4, 2, -5),
    new THREE.Vector3(8, 0, -10),
    new THREE.Vector3(12, -2, -15),
    new THREE.Vector3(16, 0, -20)
];

const curve = new THREE.CatmullRomCurve3(points, false, 'catmullrom', 0.5);

const CameraController = ({ progress }) => {
    const { camera } = useThree();
    const target = useRef(new THREE.Vector3());
    const previous = useRef(progress.current);

    useFrame(() => {
        const t = THREE.MathUtils.lerp(previous.current, progress.current, 0.05);
        previous.current = t;
        const position = curve.getPointAt(t);
        const lookAt = curve.getPointAt(Math.min(t + 0.01, 1));
        camera.position.copy(position);
        camera.lookAt(lookAt);
    });

    return null;
};

const Modal = ({ show, onClose, title, content }) => {
    if (!show) return null;
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>{title}</h2>
                <p>{content}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

const Milestone = ({ position, label, year, onClick }) => (
    <group position={position}>
        <mesh onClick={onClick} scale={[1.2, 1.2, 1.2]}>
            <boxGeometry args={[2, 1, 0.5]} />
            <meshStandardMaterial color={'#3b82f6'} emissive={'#1e40af'} emissiveIntensity={0.4} />
        </mesh>
        <Html distanceFactor={10} position={[0, 1.4, 0]}>
            <div className="milestone-tooltip">
                <strong>{label}</strong>
                <div className="milestone-year">{year}</div>
            </div>
        </Html>
    </group>
);

const Rollercoaster = () => {
    const [modalData, setModalData] = useState({ show: false, title: '', content: '' });
    const progress = useRef(0);
    const sectionCount = points.length;

    const openModal = (title, content) => setModalData({ show: true, title, content });
    const closeModal = () => setModalData({ ...modalData, show: false });

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') progress.current = Math.min(progress.current + 1 / (sectionCount - 1), 1);
            if (e.key === 'ArrowLeft') progress.current = Math.max(progress.current - 1 / (sectionCount - 1), 0);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className="roller-container dark-mode">
            <h2 className="roller-title">Experience Timeline</h2>
            <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
                <color attach="background" args={["#0f172a"]} />
                <fog attach="fog" args={["#0f172a", 10, 40]} />
                <CameraController progress={progress} />
                <mesh>
                    <tubeGeometry args={[curve, 300, 0.1, 8, false]} />
                    <meshStandardMaterial color={'#94a3b8'} />
                </mesh>

                {/* Milestones */}
                <Milestone position={points[0]} label="Teaching Assistant" year="2024" onClick={() => openModal("Teaching Assistant", "Intro to Comp Eng – Grading & mentoring 25+ students.")} />
                <Milestone position={points[1]} label="Sun Marketing Intern" year="2023" onClick={() => openModal("Sun Marketing Intern", "Migrated to Entra ID, Azure Blob for 10+ clients.")} />
                <Milestone position={points[2]} label="Googol Calendar" year="2022" onClick={() => openModal("Googol Calendar", "Built a secure PHP+MySQL calendar app.")} />
                <Milestone position={points[3]} label="The Moosani Times" year="2022" onClick={() => openModal("The Moosani Times", "Created a news website with full-stack security.")} />
                <Milestone position={points[4]} label="Capital One Summit" year="2023" onClick={() => openModal("Capital One Summit", "Selected for exclusive hackathon experience.")} />

                <ambientLight intensity={0.7} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
            </Canvas>
            <Modal {...modalData} onClose={closeModal} />
        </div>
    );
};

export default Rollercoaster;