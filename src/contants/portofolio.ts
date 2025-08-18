// Types for better type safety and maintainability
interface ProjectLink {
    github: string;
    hosting: string;
}

interface PortfolioItem {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    projectLink: ProjectLink;
    image: string;
}

interface ThreeDPortfolioItem {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
}

export const codingPortfolio: PortfolioItem[] = [
    {
        id: '1',
        title: 'Peluang.co Job Platform',
        subtitle: 'Full-stack Development · Part-time Project',
        description: 'Comprehensive job platform built with Next.js and React.js, serving thousands of job seekers and employers. Implemented responsive UI/UX designs, integrated RESTful APIs, and optimized application performance resulting in 40% faster page load times. Features include advanced job search, user authentication, and real-time notifications.',
        projectLink: { github: '', hosting: 'https://peluang.co' },
        image: '/image/coding/compro.png'
    },
    {
        id: '2',
        title: 'MAXY Academy Learning Platform',
        subtitle: 'Frontend Development · Internship Project',
        description: 'Educational platform frontend serving 500+ students, built during internship at MAXY Academy. Collaborated with design team to implement pixel-perfect UI components using React.js and modern CSS frameworks. Ensured cross-browser compatibility and reduced development time by 30% through reusable component architecture.',
        projectLink: { github: '', hosting: '' },
        image: '/image/coding/iroiro.jpeg'
    },
    {
        id: '3',
        title: 'KSM Learning Management System',
        subtitle: 'Backend Development · Organization Project',
        description: 'Led development of Learning Management System backend serving 100+ users for KSM Android UPN organization. Implemented RESTful APIs, designed scalable database architecture using MySQL, and managed a team of 3 junior developers. Conducted code reviews and mentored students in backend development.',
        projectLink: { github: '', hosting: '' },
        image: '/image/coding/ankersal.jpeg'
    },
    {
        id: '4',
        title: 'Mudahdigital.id Platform',
        subtitle: 'Full-stack Development & Entrepreneurship · Self-employed',
        description: 'Founded and developed digital services platform serving 50+ clients. End-to-end project management from ideation to deployment using modern web technologies. Generated consistent revenue through digital product development while providing technical consultation and client support services.',
        projectLink: { github: '', hosting: 'https://mudahdigital.id' },
        image: '/image/coding/compro.png'
    },
];

export const threeDPortfolio: ThreeDPortfolioItem[] = [
    {
        id: '1',
        title: 'Architectural Corridor',
        subtitle: 'Environment Design',
        description: 'A detailed 3D architectural corridor showcasing advanced lighting techniques and realistic materials. Created using Blender 3D with focus on atmospheric lighting and perspective composition.',
        image: '/image/3D/corridor.png',
    },
    {
        id: '2',
        title: 'Crystal Cave Environment',
        subtitle: 'Fantasy Scene',
        description: 'Mystical crystal cave environment featuring dynamic lighting effects and procedural crystal formations. Demonstrates expertise in environmental storytelling and fantasy art direction.',
        image: '/image/3D/crystal1.png',
    },
    {
        id: '3',
        title: 'Garden Landscape',
        subtitle: 'Outdoor Environment',
        description: 'Serene garden landscape with detailed vegetation and natural lighting. Showcases skills in organic modeling, texture work, and outdoor scene composition.',
        image: '/image/3D/garden.png',
    },
    {
        id: '4',
        title: 'Modern Kitchen Design',
        subtitle: 'Interior Architecture',
        description: 'Contemporary kitchen interior with realistic materials and professional lighting setup. Demonstrates proficiency in architectural visualization and interior design principles.',
        image: '/image/3D/kitchenset1.png',
    },
    {
        id: '5',
        title: 'Kitchen Variant Design',
        subtitle: 'Interior Architecture',
        description: 'Alternative kitchen layout exploring different design approaches and material combinations. Shows versatility in interior visualization and space planning.',
        image: '/image/3D/kitchenset2.png',
    },
    {
        id: '6',
        title: 'Character Environment',
        subtitle: 'Game Asset',
        description: 'Stylized character environment designed for game development. Features optimized topology and game-ready assets with careful attention to performance and visual appeal.',
        image: '/image/3D/kunoichi.png',
    },
    {
        id: '7',
        title: 'Modern Living Room',
        subtitle: 'Interior Design',
        description: 'Contemporary living room scene with modern furniture and ambient lighting. Demonstrates skills in interior design visualization and atmospheric rendering.',
        image: '/image/3D/livingroom.png',
    },
    {
        id: '8',
        title: 'Royal Chamber',
        subtitle: 'Fantasy Architecture',
        description: 'Luxurious royal chamber with ornate decorations and rich materials. Showcases expertise in period architecture and detailed texture work.',
        image: '/image/3D/royalty.png',
    },
    {
        id: '9',
        title: 'Sci-Fi Environment',
        subtitle: 'Game Design',
        description: 'Futuristic sci-fi environment with advanced lighting and technical details. Created for game development with optimized performance and visual impact.',
        image: '/image/3D/s15.png',
    },
    {
        id: '10',
        title: 'Architectural Gateway',
        subtitle: 'Environmental Design',
        description: 'Detailed architectural door and entrance design with focus on proportions and material authenticity. Demonstrates technical modeling skills.',
        image: '/image/3D/door.png',
    },
    {
        id: '11',
        title: 'Medieval Throne Room',
        subtitle: 'Fantasy Interior',
        description: 'Medieval-inspired throne room with dramatic lighting and atmospheric effects. Shows proficiency in historical architecture and mood creation.',
        image: '/image/3D/thorneroom.png',
    },
    {
        id: '12',
        title: 'Transportation Design',
        subtitle: 'Vehicle Modeling',
        description: 'Detailed train car modeling with realistic materials and environmental context. Demonstrates hard surface modeling and technical accuracy.',
        image: '/image/3D/train.png',
    },
];