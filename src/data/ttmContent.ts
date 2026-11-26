export interface TTMTemplate {
  id: string;
  title: string;
  category: '3d' | 'carousels' | 'flythrough' | 'grids' | 'stacks' | 'typography' | 'webgl' | 'mockups';
  categoryLabel: string;
  aspectRatio: '9:16' | '3:4' | '4:5' | '1:1' | '4:3' | '16:9';
  description: string;
  accentColor: string;
  defaultText: {
    headline: string;
    subhead: string;
    tag: string;
  };
  objectType: 'torus' | 'sphere' | 'icosahedron' | 'cube' | 'grid' | 'carousel' | 'text-fly';
  duration: number; // in seconds
}

export const TTM_TEMPLATES: TTMTemplate[] = [
  {
    id: 'kinetic-torus',
    title: 'Kinetic Torus 01',
    category: '3d',
    categoryLabel: '3D Objects',
    aspectRatio: '9:16',
    description: 'Metallic reflective torus knot with dynamic specular lighting and smooth camera drift.',
    accentColor: '#dcd0ff',
    defaultText: {
      headline: 'FUTURE OF MOTION',
      subhead: 'Endless generative 3D loops for modern brands.',
      tag: 'NEW DROP #042'
    },
    objectType: 'torus',
    duration: 5.0
  },
  {
    id: 'cascade-carousel',
    title: 'Cascade Carousel 02',
    category: 'carousels',
    categoryLabel: 'Carousels',
    aspectRatio: '4:5',
    description: 'Layered staggered cards with 3D z-depth and momentum-based kinetic entrance.',
    accentColor: '#ecaf30',
    defaultText: {
      headline: 'CAPTURE THE MOMENT',
      subhead: 'Staggered parallax layers crafted for feed conversion.',
      tag: 'CAROUSEL PACK'
    },
    objectType: 'carousel',
    duration: 6.0
  },
  {
    id: 'fly-through-type',
    title: 'Fly-Through Typography',
    category: 'flythrough',
    categoryLabel: 'Fly-through',
    aspectRatio: '16:9',
    description: 'Kinetic 3D typography flying directly toward the camera with chromatic aberration.',
    accentColor: '#9cd696',
    defaultText: {
      headline: 'MOVE FAST & SCALE',
      subhead: 'Zero After Effects needed. Export in your browser.',
      tag: 'TYPE SPECIMEN'
    },
    objectType: 'text-fly',
    duration: 4.5
  },
  {
    id: 'cybernetic-grid',
    title: 'Wireframe Mesh Grid',
    category: 'grids',
    categoryLabel: 'Grids',
    aspectRatio: '1:1',
    description: 'Undulating 3D wireframe terrain with procedural sine-wave deformation and glowing vertices.',
    accentColor: '#ff8a7a',
    defaultText: {
      headline: 'PROCEDURAL WAVES',
      subhead: 'Math-driven geometry tuned for high-impact social posts.',
      tag: 'WEBGL SYSTEM'
    },
    objectType: 'grid',
    duration: 5.0
  },
  {
    id: 'elastic-stacks',
    title: 'Elastic Stacks 04',
    category: 'stacks',
    categoryLabel: 'Stacks',
    aspectRatio: '9:16',
    description: 'Physics-driven elastic cards springing into place with natural mass and dampening.',
    accentColor: '#dcd0ff',
    defaultText: {
      headline: 'CURATED DROPS',
      subhead: 'Stack your products or portfolio items with satisfying bounce.',
      tag: 'PHYSICS PACK'
    },
    objectType: 'cube',
    duration: 5.5
  },
  {
    id: 'icosa-geometric',
    title: 'Icosahedron Prism',
    category: '3d',
    categoryLabel: '3D Objects',
    aspectRatio: '1:1',
    description: 'Multifaceted prism refracting dynamic pastel light sources across floating facets.',
    accentColor: '#ecaf30',
    defaultText: {
      headline: 'CRYSTALLINE FORM',
      subhead: 'Studio grade reflections running at 60 FPS WebGL.',
      tag: 'PRISM SHADER'
    },
    objectType: 'icosahedron',
    duration: 5.0
  },
  {
    id: 'monumental-type',
    title: 'Kinetic Marquee',
    category: 'typography',
    categoryLabel: 'Typography',
    aspectRatio: '9:16',
    description: 'Monumental geometric typography scrolling infinitely with speed ramp transitions.',
    accentColor: '#9cd696',
    defaultText: {
      headline: 'TEMPLATES THAT MOVE',
      subhead: 'Designed by designers, engineered for instant exports.',
      tag: 'KINETIC TYPE'
    },
    objectType: 'text-fly',
    duration: 4.0
  },
  {
    id: 'glassmorphism-deck',
    title: 'Frosted Glass Deck',
    category: 'mockups',
    categoryLabel: 'Mockups',
    aspectRatio: '4:3',
    description: 'Floating glass cards with realistic backdrop blur, Fresnel edge glow, and light leak flares.',
    accentColor: '#ff8a7a',
    defaultText: {
      headline: 'PREMIUM MOCKUP',
      subhead: 'Highlight your app or digital products in sleek 3D perspective.',
      tag: 'MOCKUP LAB'
    },
    objectType: 'sphere',
    duration: 6.0
  }
];

export const TTM_FOUNDERS = [
  {
    name: 'Mees Verberne',
    role: 'Co-Founder & Creative Director',
    avatar: '/ttm/mees-verberne.jpg',
    bio: 'Art director & motion designer with over a decade designing visual systems for global agencies.',
    links: { twitter: 'https://twitter.com/meesverberne', linkedin: 'https://linkedin.com' }
  },
  {
    name: 'Ronald de Groot',
    role: 'Co-Founder & Tech Lead',
    avatar: '/ttm/ronald-de-groot.jpg',
    bio: 'Creative technologist specializing in WebGL, shaders, real-time graphics and browser performance.',
    links: { twitter: 'https://twitter.com/ronalddegroot', github: 'https://github.com' }
  }
];

export const TTM_CREATORS = [
  { name: 'Salma El Idrissi', role: 'Art Director', avatar: '/ttm/salma-el-idrissi.jpg' },
  { name: 'Tavita Faleolo', role: 'Motion Designer', avatar: '/ttm/tavita-faleolo.jpg' },
  { name: 'André Thompson', role: 'Brand Strategist', avatar: '/ttm/andre-thompson.jpg' },
  { name: 'Dennis', role: 'Creative Developer', avatar: '/ttm/creator-3.jpg' }
];

export const ASPECT_RATIOS = [
  { label: '9:16', name: 'Stories & Reels', width: 1080, height: 1920, aspectClass: 'aspect-[9/16]' },
  { label: '3:4', name: 'Feed Portrait', width: 1080, height: 1440, aspectClass: 'aspect-[3/4]' },
  { label: '4:5', name: 'Instagram Feed', width: 1080, height: 1350, aspectClass: 'aspect-[4/5]' },
  { label: '1:1', name: 'Square Post', width: 1080, height: 1080, aspectClass: 'aspect-square' },
  { label: '4:3', name: 'Classic Landscape', width: 1440, height: 1080, aspectClass: 'aspect-[4/3]' },
  { label: '16:9', name: 'YouTube / Widescreen', width: 1920, height: 1080, aspectClass: 'aspect-video' }
] as const;
