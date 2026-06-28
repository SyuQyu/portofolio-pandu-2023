// Hand-curated layer over the auto-generated githubProjects.
// Lives separately so re-generating the raw GitHub data never wipes these rules.

import { githubProjects } from './githubProjects';

export interface ProjectLink {
    label: string;
    href: string;
}

export interface Project {
    id: string;
    name: string;
    language: string;
    stars: number;
    year: string;
    description: string;
    detail: string;
    topics: string[];
    featured: boolean;
    live: string;
    links: ProjectLink[];
}

// Repos hidden from the site entirely.
const EXCLUDE = new Set([
    'project-ganteng',
    'CR-BARENG',
    'backend-skripsi-2025',
    'frontend-skripsi-2025',
    'FY24_Front-End-Developer_Type-B',
    'basic-form-nextjs',
    'final-project-sc-backend-2023',
    'mini-project-tsc-backend-2023',
    'inventory-app-fe',
    'workfrom-be',
    'workfrom-api-init',
    'maxy-academy-2023',
    'movie-api-fetch-api.tvmaze',
    'ProjectAkhirPemrogramanWeb',
    'basic-api',
]);

// Front-end / back-end repos presented as a single combined project.
const GROUPS: { id: string; name: string; members: string[]; detail: string }[] = [
    {
        id: 'linnaapp',
        name: 'Linnaapp',
        members: ['linnaapp', 'linnaappbackend'],
        detail: 'A full-stack TypeScript application with a front-end client and its own back-end API.',
    },
    {
        id: 'e-canteen',
        name: 'E-Canteen',
        members: ['frontend-e-canteen', 'backend-e-canteen'],
        detail: 'A full-stack e-canteen ordering system with a TypeScript front-end and a dedicated back-end service.',
    },
];

const byId = new Map(githubProjects.map((p) => [p.id, p]));
const memberIds = new Set(GROUPS.flatMap((g) => g.members));
const linkLabel = (id: string) => (/back(?:end)?/i.test(id) ? 'Back-end' : 'Front-end');

const groupedProjects: Project[] = GROUPS.map((g) => {
    const members = g.members.map((id) => byId.get(id)).filter((m): m is NonNullable<typeof m> => Boolean(m));
    const live = members.map((m) => m.live).find(Boolean) || '';
    return {
        id: g.id,
        name: g.name,
        language: members[0]?.language || 'TypeScript',
        stars: members.reduce((s, m) => s + m.stars, 0),
        year: members.map((m) => m.year).sort().reverse()[0] || '',
        description: '',
        detail: g.detail,
        topics: [],
        featured: false,
        live,
        links: members.map((m) => ({ label: linkLabel(m.id), href: m.repo })),
    };
});

const singleProjects: Project[] = githubProjects
    .filter((p) => !EXCLUDE.has(p.id) && !memberIds.has(p.id))
    .map((p) => ({
        id: p.id,
        name: p.name,
        language: p.language,
        stars: p.stars,
        year: p.year,
        description: p.description,
        detail: p.detail,
        topics: p.topics,
        featured: p.featured,
        live: p.live,
        links: [{ label: 'View source', href: p.repo }],
    }));

const all = [...singleProjects, ...groupedProjects];

export const featuredProjects: Project[] = all.filter((p) => p.featured);

export const catalogueProjects: Project[] = all
    .filter((p) => !p.featured)
    .sort((a, b) => (b.year || '').localeCompare(a.year || '') || a.name.localeCompare(b.name));
