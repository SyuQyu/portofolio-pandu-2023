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
    {
        id: 'gh-1089341331',
        title: 'app-fe-freelance',
        subtitle: 'TypeScript · GitHub Repository',
        description: 'A project developed on GitHub.',
        projectLink: { github: 'https://github.com/SyuQyu/app-fe-freelance', hosting: 'https://app-fe-freelance.vercel.app' },
        image: '/image/coding/compro.png'
    },
    {
        id: 'gh-994171489',
        title: 'Backend-AI',
        subtitle: 'Python · GitHub Repository',
        description: 'A project developed on GitHub.',
        projectLink: { github: 'https://github.com/SyuQyu/Backend-AI', hosting: 'https://backend-ai-eight.vercel.app' },
        image: '/image/coding/compro.png'
    },
    {
        id: 'gh-772122027',
        title: 'backend-e-canteen',
        subtitle: 'TypeScript · GitHub Repository',
        description: 'A project developed on GitHub.',
        projectLink: { github: 'https://github.com/SyuQyu/backend-e-canteen', hosting: '' },
        image: '/image/coding/compro.png'
    },
    {
        id: 'gh-921167774',
        title: 'backend-skripsi-2025',
        subtitle: 'TypeScript · GitHub Repository',
        description: 'A project developed on GitHub.',
        projectLink: { github: 'https://github.com/SyuQyu/backend-skripsi-2025', hosting: '' },
        image: '/image/coding/compro.png'
    },
    {
        id: 'gh-579844975',
        title: 'basic-api',
        subtitle: 'TypeScript · GitHub Repository',
        description: 'A project developed on GitHub.',
        projectLink: { github: 'https://github.com/SyuQyu/basic-api', hosting: '' },
        image: '/image/coding/compro.png'
    },
    {
        id: 'gh-837755780',
        title: 'basic-form-nextjs',
        subtitle: 'TypeScript · GitHub Repository',
        description: 'A project developed on GitHub.',
        projectLink: { github: 'https://github.com/SyuQyu/basic-form-nextjs', hosting: '' },
        image: '/image/coding/compro.png'
    },
    {
        id: 'gh-795807430',
        title: 'bot-character-ai',
        subtitle: 'JavaScript · GitHub Repository',
        description: 'A project developed on GitHub.',
        projectLink: { github: 'https://github.com/SyuQyu/bot-character-ai', hosting: '' },
        image: '/image/coding/compro.png'
    },
    {
        id: 'gh-1040167948',
        title: 'company-profile-mni',
        subtitle: 'TypeScript · GitHub Repository',
        description: 'A project developed on GitHub.',
        projectLink: { github: 'https://github.com/SyuQyu/company-profile-mni', hosting: 'https://company-profile-mni.vercel.app' },
        image: '/image/coding/compro.png'
    },
    {
        id: 'gh-1017456023',
        title: 'CR-BARENG',
        subtitle: 'TypeScript · GitHub Repository',
        description: 'A project developed on GitHub.',
        projectLink: { github: 'https://github.com/SyuQyu/CR-BARENG', hosting: '' },
        image: '/image/coding/compro.png'
    },
    {
        id: 'gh-719356087',
        title: 'final-project-sc-backend-2023',
        subtitle: 'JavaScript · GitHub Repository',
        description: 'Tugas final project untuk kelas Backend Basic 2023',
        projectLink: { github: 'https://github.com/SyuQyu/final-project-sc-backend-2023', hosting: '' },
        image: '/image/coding/compro.png'
    },
    {
        id: 'gh-772122242',
        title: 'frontend-e-canteen',
        subtitle: 'GitHub Repository',
        description: 'A project developed on GitHub.',
        projectLink: { github: 'https://github.com/SyuQyu/frontend-e-canteen', hosting: '' },
        image: '/image/coding/compro.png'
    },
    {
        id: 'gh-941527402',
        title: 'frontend-skripsi-2025',
        subtitle: 'TypeScript · GitHub Repository',
        description: 'A project developed on GitHub.',
        projectLink: { github: 'https://github.com/SyuQyu/frontend-skripsi-2025', hosting: '' },
        image: '/image/coding/compro.png'
    },
    {
        id: 'gh-837763377',
        title: 'FY24_Front-End-Developer_Type-B',
        subtitle: 'JavaScript · GitHub Repository',
        description: 'A project developed on GitHub.',
        projectLink: { github: 'https://github.com/SyuQyu/FY24_Front-End-Developer_Type-B', hosting: '' },
        image: '/image/coding/compro.png'
    },
    {
        id: 'gh-706246534',
        title: 'gorest-fetch-api',
        subtitle: 'TypeScript · GitHub Repository',
        description: 'A project developed on GitHub.',
        projectLink: { github: 'https://github.com/SyuQyu/gorest-fetch-api', hosting: 'https://gorest-fetch-api.vercel.app' },
        image: '/image/coding/compro.png'
    },
    {
        id: 'gh-815682005',
        title: 'linnaapp',
        subtitle: 'TypeScript · GitHub Repository',
        description: 'A project developed on GitHub.',
        projectLink: { github: 'https://github.com/SyuQyu/linnaapp', hosting: '' },
        image: '/image/coding/compro.png'
    },
    {
        id: 'gh-815636636',
        title: 'linnaappbackend',
        subtitle: 'TypeScript · GitHub Repository',
        description: 'A project developed on GitHub.',
        projectLink: { github: 'https://github.com/SyuQyu/linnaappbackend', hosting: '' },
        image: '/image/coding/compro.png'
    },
    {
        id: 'gh-711732104',
        title: 'MadinaInventoryApp',
        subtitle: 'TypeScript · GitHub Repository',
        description: 'Projek Inventory Management untuk Madina Baja',
        projectLink: { github: 'https://github.com/SyuQyu/MadinaInventoryApp', hosting: '' },
        image: '/image/coding/compro.png'
    },
    {
        id: 'gh-692670006',
        title: 'maxy-academy-2023',
        subtitle: 'JavaScript · GitHub Repository',
        description: 'bootcamp maxy academy 2023',
        projectLink: { github: 'https://github.com/SyuQyu/maxy-academy-2023', hosting: '' },
        image: '/image/coding/compro.png'
    },
    {
        id: 'gh-687423206',
        title: 'mini-project-tsc-backend-2023',
        subtitle: 'JavaScript · GitHub Repository',
        description: 'A project developed on GitHub.',
        projectLink: { github: 'https://github.com/SyuQyu/mini-project-tsc-backend-2023', hosting: '' },
        image: '/image/coding/compro.png'
    },
    {
        id: 'gh-655575373',
        title: 'movie-api-fetch-api.tvmaze',
        subtitle: 'TypeScript · GitHub Repository',
        description: 'nextjs for movie api fetch from api.tvmaze',
        projectLink: { github: 'https://github.com/SyuQyu/movie-api-fetch-api.tvmaze', hosting: '' },
        image: '/image/coding/compro.png'
    },
    {
        id: 'gh-611993352',
        title: 'netherbound',
        subtitle: 'ShaderLab · GitHub Repository',
        description: 'git for project netherbound',
        projectLink: { github: 'https://github.com/SyuQyu/netherbound', hosting: '' },
        image: '/image/coding/compro.png'
    },
    {
        id: 'gh-514761727',
        title: 'portofolio-3d-website',
        subtitle: 'JavaScript · GitHub Repository',
        description: 'A project developed on GitHub.',
        projectLink: { github: 'https://github.com/SyuQyu/portofolio-3d-website', hosting: '' },
        image: '/image/coding/compro.png'
    },
    {
        id: 'gh-657908668',
        title: 'portofolio-pandu-2023',
        subtitle: 'TypeScript · GitHub Repository',
        description: 'A project developed on GitHub.',
        projectLink: { github: 'https://github.com/SyuQyu/portofolio-pandu-2023', hosting: 'https://portofolio-pandu-2023.vercel.app' },
        image: '/image/coding/compro.png'
    },
    {
        id: 'gh-639908590',
        title: 'ProjectAkhirPemrogramanWeb',
        subtitle: 'PHP · GitHub Repository',
        description: 'Pemrograman Web',
        projectLink: { github: 'https://github.com/SyuQyu/ProjectAkhirPemrogramanWeb', hosting: '' },
        image: '/image/coding/compro.png'
    },
    {
        id: 'gh-504501066',
        title: 'Simple-Web',
        subtitle: 'JavaScript · GitHub Repository',
        description: 'A project developed on GitHub.',
        projectLink: { github: 'https://github.com/SyuQyu/Simple-Web', hosting: '' },
        image: '/image/coding/compro.png'
    },
    {
        id: 'gh-515078609',
        title: 'SyuQyu',
        subtitle: 'GitHub Repository',
        description: 'A project developed on GitHub.',
        projectLink: { github: 'https://github.com/SyuQyu/SyuQyu', hosting: '' },
        image: '/image/coding/compro.png'
    },
    {
        id: 'gh-1053554781',
        title: 'template-web',
        subtitle: 'TypeScript · GitHub Repository',
        description: 'A project developed on GitHub.',
        projectLink: { github: 'https://github.com/SyuQyu/template-web', hosting: '' },
        image: '/image/coding/compro.png'
    },
    {
        id: 'gh-556499049',
        title: 'twitter-clone',
        subtitle: 'Vue · GitHub Repository',
        description: 'First Project Using Nuxtjs',
        projectLink: { github: 'https://github.com/SyuQyu/twitter-clone', hosting: '' },
        image: '/image/coding/compro.png'
    },
    {
        id: 'gh-926028801',
        title: 'web-mama',
        subtitle: 'TypeScript · GitHub Repository',
        description: 'A project developed on GitHub.',
        projectLink: { github: 'https://github.com/SyuQyu/web-mama', hosting: 'https://erni-products.vercel.app' },
        image: '/image/coding/compro.png'
    },
    {
        id: 'gh-535170604',
        title: 'WeCare',
        subtitle: 'JavaScript · GitHub Repository',
        description: 'A project developed on GitHub.',
        projectLink: { github: 'https://github.com/SyuQyu/WeCare', hosting: '' },
        image: '/image/coding/compro.png'
    },
    {
        id: 'gh-705445417',
        title: 'workfrom-api-init',
        subtitle: 'GitHub Repository',
        description: 'A project developed on GitHub.',
        projectLink: { github: 'https://github.com/SyuQyu/workfrom-api-init', hosting: '' },
        image: '/image/coding/compro.png'
    },
    {
        id: 'gh-705469484',
        title: 'workfrom-be',
        subtitle: 'JavaScript · GitHub Repository',
        description: 'A project developed on GitHub.',
        projectLink: { github: 'https://github.com/SyuQyu/workfrom-be', hosting: '' },
        image: '/image/coding/compro.png'
    },
    {
        id: 'gh-702789433',
        title: 'workfrom-fe',
        subtitle: 'TypeScript · GitHub Repository',
        description: 'A project developed on GitHub.',
        projectLink: { github: 'https://github.com/SyuQyu/workfrom-fe', hosting: 'https://workfrom-fe.vercel.app' },
        image: '/image/coding/compro.png'
    }
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