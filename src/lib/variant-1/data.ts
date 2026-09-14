import type { Perspective } from "./types";

export const images = [
  "./img/image1.jpg",
  "./img/image2.jpeg",
  "./img/image10.jpeg",
  "./img/image9.jpeg",
  "./img/image3.jpeg",
  "./img/image4.jpeg",
  "./img/image5.jpeg",
  "./img/image6.jpeg",
  "./img/image7.jpeg",
  "./img/image8.jpeg",
  "./img/image9.jpeg",
  "./img/image10.jpeg",
  // "./img/img3.webp",
  // "./img/img4.webp",
  // "./img/img5.webp",
  // "./img/img6.webp",
  // "./img/img7.webp",
  // "./img/img8.webp",
  // "./img/img9.webp",
  // "./img/img10.webp",
  // "./img/img11.webp",
  // "./img/img12.webp",
];

export const perspectives: Perspective[] = [
  {
    title: "Senior React Developer",
    description: "Building enterprise UI journeys",
    position: "top",
  },
  {
    title: "Accenture",
    description: "Digital product delivery and transformation",
    position: "center",
  },
  {
    title: "Modern Frontend",
    description: "React, scalability, and polished UX",
    position: "center",
  },
  {
    title: "Engineering for Impact",
    position: "bottom",
  },
];

export const cylinderConfig = {
  radius: window.innerWidth > 768 ? 2.5 : 2.2,
  height: window.innerWidth > 768 ? 2 : 1.2,
  radialSegments: 64,
  heightSegments: 1,
};

export const particleConfig = {
  numParticles: 12,
  particleRadius: 3.3, // cylinderRadius + 0.8
  segments: 20,
  angleSpan: 0.3,
};

export const imageConfig = {
  width: 1024,
  height: 1024,
};
