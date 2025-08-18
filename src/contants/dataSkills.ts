// Types for better type safety
interface Skill {
    name: string;
    image: string;
    profiency: 'entry' | 'intermediate' | 'advance';
}

interface SocialMedia {
    name: string;
    image: string;
    link: string;
}

export const Coding: Skill[] = [
    { name: 'HTML', image: '/image/skill/html.png', profiency: 'advance' },
    { name: 'CSS', image: '/image/skill/css.png', profiency: 'advance' },
    { name: 'JavaScript', image: '/image/skill/js.png', profiency: 'advance' },
    { name: 'ReactJS', image: '/image/skill/react.png', profiency: 'advance' },
    { name: 'NextJS', image: '/image/skill/next-js.svg', profiency: 'advance' },
    { name: 'TailwindCSS', image: '/image/skill/tailwind.svg', profiency: 'advance' },
    { name: 'Material UI', image: '/image/skill/material-ui.svg', profiency: 'advance' },
    { name: 'Ant Design', image: '/image/skill/ant-design.svg', profiency: 'advance' },
    { name: 'VueJs', image: '/image/skill/vuejs-original.svg', profiency: 'intermediate' },
    { name: 'ExpressJS', image: '/image/skill/icons8-express-js.svg', profiency: 'intermediate' },
    { name: 'Sequelize ORM', image: '/image/skill/sequelize.svg', profiency: 'intermediate' },
    { name: 'Prisma ORM', image: '/image/skill/file-type-light-prisma.svg', profiency: 'intermediate' },
    { name: 'Mysql', image: '/image/skill/mysql-original-wordmark.svg', profiency: 'advance' },
    { name: 'MongoDB', image: '/image/skill/mongodb-original-wordmark.svg', profiency: 'intermediate' },
    { name: 'Git', image: '/image/skill/git.svg', profiency: 'advance' },
    { name: 'NodeJS', image: '/image/skill/nodejs.svg', profiency: 'intermediate' },
    { name: 'Bootstrap', image: '/image/skill/bootstrap.svg', profiency: 'intermediate' },
];

export const Design: Skill[] = [
    { name: 'Blender 3D', image: '/image/skill/blender.svg', profiency: 'intermediate' },
    { name: 'Photoshop', image: '/image/skill/adobe-photoshop.svg', profiency: 'intermediate' },
    { name: 'Lightroom', image: '/image/skill/adobe-lightroom.svg', profiency: 'intermediate' },
    { name: 'Canva', image: '/image/skill/canva.svg', profiency: 'advance' },
    { name: 'Illustrator', image: '/image/skill/adobe-illustrator.svg', profiency: 'entry' },
    { name: 'Premiere Pro', image: '/image/skill/adobe-premiere.svg', profiency: 'intermediate' },
    { name: 'Figma', image: '/image/skill/figma.svg', profiency: 'intermediate' },
];

export const Sosmed: SocialMedia[] = [
    { name: 'LinkedIn', image: '/image/sosmed/linkedin-original.svg', link: 'https://www.linkedin.com/in/pandu-utomo/' },
    { name: 'Github', image: '/image/sosmed/github (1).svg', link: 'https://github.com/SyuQyu' },
    { name: 'Email', image: '/image/sosmed/gmail.svg', link: 'mailto:pandu.utomo.2002@gmail.com' },
    { name: 'ArtStation', image: '/image/sosmed/artstation.svg', link: 'https://www.artstation.com/panxzzlyn' },
    { name: 'Instagram', image: '/image/sosmed/instagram.svg', link: 'https://www.instagram.com/panduut_/' },
    { name: 'Whatsapp', image: '/image/sosmed/whatsapp.svg', link: 'https://wa.me/6282137138687' },
    { name: 'Tiktok', image: '/image/sosmed/tiktok.svg', link: 'https://www.tiktok.com/@syuqyu' },
];