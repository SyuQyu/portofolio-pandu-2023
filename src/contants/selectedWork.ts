// Hand-authored: the shipped, real-world sites that lead the work section.
// These are NOT generated from GitHub — a client system that lives behind a
// login has no public repo, and the repo list alone says nothing about what
// the thing actually is.
//
// ── AWAITING THE OWNER'S COPY ───────────────────────────────────────────────
// `detail`, `stack` and `role` are the owner's to write. Everything currently
// in `summary` is quoted from the live site itself (its own <title> or hero
// line) so nothing on the page is invented while the real copy is pending.
// Fill `detail` and `stack`, then delete this note.
// ────────────────────────────────────────────────────────────────────────────

import type { Project } from './projectCuration';

export const selectedWork: Project[] = [
    {
        id: 'oils-patra-logistik',
        name: 'OILS — Fleet Management',
        language: 'Pertamina Patra Logistik',
        stars: 0,
        year: '',
        description: 'One Integrated Logistic System — fleet monitoring, daily reports, dispatch and document status for a tanker fleet.',
        detail: '', // TODO: owner's description
        topics: [],
        featured: true,
        live: '', // withheld on purpose — client system, no public link
        links: [],
        image: '/image/work/oils-patra-logistik.webp',
        imageAlt: 'OILS fleet dashboard: tanker counts, trip and volume totals, loading-order performance and document status.',
        stack: [], // TODO: owner's stack
        gated: true,
        accessNote: 'Client system — captured from inside. Not linked publicly.',
    },
    {
        id: 'mitra-kawan-bersama',
        name: 'PT Mitra Kawan Bersama',
        language: 'Company site',
        stars: 0,
        year: '',
        description: 'Heavy equipment rental and construction support — bilingual company site with a dark mode.',
        detail: '',
        topics: [],
        featured: true,
        live: 'https://www.mitrakawanbersama.com/',
        links: [],
        image: '/image/work/mitra-kawan-bersama.webp',
        imageAlt: 'PT Mitra Kawan Bersama home page: excavator and truck hero with an ID/EN switch and a consultation call to action.',
        stack: [],
    },
    {
        id: 'crescentrating',
        name: 'CrescentRating',
        language: 'Corporate site',
        stars: 0,
        year: '',
        description: 'The global halal travel authority — ratings, market intelligence and destination accreditation.',
        detail: '',
        topics: [],
        featured: true,
        live: 'https://crescentrating.com/',
        links: [],
        image: '/image/work/crescentrating.webp',
        imageAlt: 'CrescentRating home page: navy hero reading “Winning the World’s Fastest-Growing Travel Market Starts Here”, with market-size figures alongside.',
        stack: [],
    },
    {
        id: 'hr-scheduler',
        name: 'HR Scheduler',
        language: 'Internal tool',
        stars: 0,
        year: '',
        description: 'Meeting scheduling for staff, managers and HR — employee ID sign-in, then book and view meetings.',
        detail: '',
        topics: [],
        featured: true,
        live: '', // withheld on purpose — the tool is internal, so no public link
        links: [],
        image: '/image/work/hr-scheduler.webp',
        imageAlt: 'HR Scheduler sign-in card with a Staff & Managers / HR Access toggle and an employee ID field.',
        stack: [],
        gated: true,
        accessNote: 'Internal tool — not linked publicly.',
    },
    {
        id: 'company-profile-mni',
        name: 'PT Mega Nusa Indonesia',
        language: 'Company site',
        stars: 0,
        year: '',
        description: 'Company profile for a mechanical, electrical, plumbing and VAC contractor.',
        detail: '',
        topics: [],
        featured: true,
        live: 'https://company-profile-mni.vercel.app/',
        links: [{ label: 'View source', href: 'https://github.com/SyuQyu/company-profile-mni' }],
        image: '/image/work/company-profile-mni.webp',
        imageAlt: 'PT Mega Nusa Indonesia home page: headline about mechanical, electrical, plumbing and VAC work above a site photograph.',
        stack: [],
    },
];
