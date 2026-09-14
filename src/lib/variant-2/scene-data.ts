export interface ScenePerspective {
  title: string;
  subtitle: string;
  position:
    | "top"
    | "top-left"
    | "left"
    | "right"
    | "center"
    | "top-right"
    | "bottom"
    | "bottom-left"
    | "bottom-right";
  camera: { x: number; y: number; z: number };
  target: { x: number; y: number; z: number };
  rotation?: { x: number; y: number; z: number }; // in radians
  scrollProgress: { start: number; end: number }; // percentage 0-100
  hideText?: boolean; // Added flag to hide text for transition sections
}

export const scenePerspectives: ScenePerspective[] = [
  {
    title: "EXPERIENCE",
    subtitle: "Senior React Developer • Accenture",
    position: "center",
    camera: { x: 0, y: 2, z: 10 },
    target: { x: 0, y: 5, z: 0 },
    scrollProgress: { start: 0, end: 11.9 },
  },
  {
    title: "WORK",
    subtitle: "Building UI systems for digital products",
    position: "left",
    camera: { x: 3, y: 8, z: 10 },
    target: { x: 0, y: 10, z: 0 },
    scrollProgress: { start: 11.9, end: 23.7 },
  },
  {
    title: "SKILLS",
    subtitle: "React • TypeScript • Frontend Architecture",
    position: "right",
    camera: { x: -10, y: 15, z: 0 },
    target: { x: 0, y: 15, z: 0 },
    scrollProgress: { start: 23.7, end: 35.6 },
  },
  {
    title: "IMPACT",
    subtitle: "Shipping better user experiences",
    position: "top-left",
    camera: { x: -10, y: 22, z: 0 },
    target: { x: 0, y: 25, z: 0 },
    scrollProgress: { start: 35.6, end: 45.8 },
  },
  {
    title: "",
    subtitle: "",
    position: "top-right",
    camera: { x: 5, y: 35, z: 5 },
    target: { x: 0, y: 20, z: 0 },
    scrollProgress: { start: 45.8, end: 52.5 },
    hideText: true,
  },
  {
    title: "VISION",
    subtitle: "Designing with clarity and speed",
    position: "center",
    camera: { x: 5, y: 30, z: 10 },
    target: { x: 0, y: 20, z: 0 },
    scrollProgress: { start: 52.5, end: 62.7 },
  },
  {
    title: "DELIVERY",
    subtitle: "Strong engineering and collaboration",
    position: "bottom-right",
    camera: { x: 5, y: 25, z: 10 },
    target: { x: 0, y: 20, z: 0 },
    scrollProgress: { start: 62.7, end: 69.5 },
  },
  {
    title: "GROWTH",
    subtitle: "Continuous product learning",
    position: "bottom-left",
    camera: { x: 15, y: 20, z: 5 },
    target: { x: 0, y: 24, z: 0 },
    scrollProgress: { start: 69.5, end: 77.9 },
  },
  {
    title: "CONTACT",
    subtitle: "Available for frontend opportunities",
    position: "top",
    camera: { x: 25, y: 15, z: 0 },
    target: { x: 0, y: 20, z: 0 },
    scrollProgress: { start: 77.9, end: 84.7 },
  },
  {
    title: "JOTHYRANGAN K",
    subtitle: "Senior React Developer",
    position: "center",
    camera: { x: 20, y: 20, z: -10 },
    target: { x: 0, y: 20, z: 0 },
    scrollProgress: { start: 84.7, end: 100 },
  },
];
