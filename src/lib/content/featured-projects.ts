import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    // {
    //   id: getId(),
    //   name: 'Trade-Ex',
    //   description: 'A second hand book platform.',
    //   tasks:
    //     "As a cutomer reviwer and designer, I understood the client's requirements and executed a plan to develop and design an e-commerce platform, including the frontend UI, backend setup with database, APIs, and integration with payment platforms.",
    //   url: 'https://trade-and-exchange.vercel.app/',
    //   img: '/tradeexlogo.png',
    //   tags: [
    //     'React JS',
    //     'TypeScript',
    //     'TailwindCSS',
    //     'Firebase',
    
    //   ],
    // },
    {
      id: getId(),
      name: 'Internal Chat Application',
      description: 'An Internal Communication Platform',
      tasks:
        'I  planned project for a internal communication of company for a member of comapny which lead to  a cross-functional team',
      url: 'https://www.valuemetrix.io/',
      img: '/sos.png',
      tags: ['Figma', 'NextJs', 'TypeScript', 'ReactJS', 'Tailwind CSS'],
    },
    // {
    //   id: getId(),
    //   name: 'Velvi Matrimony',
    //   description:
    //     'A platform that redefines the way individuals find their life partners.',
    //   tasks:
    //     'As a freelancer, I developed this project by planning, communicating with the client, gathering feedback, implementing UI & pages, and integrating real-time data fetching with filtering functionality.',
    //   url: 'https://velvi.vercel.app/',
    //   img: 'https://i.postimg.cc/tRS4GvzJ/Screenshot-2024-02-27-at-5-48-49-PM.png',
    //   tags: ['NextJs', 'TypeScript', 'TailwindCSS', 'APIs'],
    // },
    //   {
    //   id: getId(),
    //   name: 'Integra',
    //   description: 'An AI-Powered Leads Generation Platform.',
    //   tasks:
    //     'I strategically planned project milestones, led a cross-functional team, established a design system, developed the website, and integrated Stripe payments with secure authentication.',
    //   url: 'https://www.integraleads.xyz/',
    //   img: 'https://user-images.githubusercontent.com/68834718/279476369-2f69466a-71db-4da0-9afd-04f8f0efb621.jpeg',
    //   tags: ['AI/ML', 'NextJs', 'TypeScript', 'TailwindCSS', 'Express'],
    // }, 

    // {
    //   id: getId(),
    //   name: 'Drafton',
    //   description: 'The AI-powered platform that simplifies proposal creation.',
    //   tasks:
    //     'I designed and developed the landing page and implemented the dashboard by creating a user interface and integrating APIs.',
    //   url: 'https://www.drafton.io/',
    //   img: 'https://i.postimg.cc/4N6dsGcm/Screenshot-2024-06-17-at-11-05-22-PM.png',
    //   tags: ['Open AI', 'NextJs', 'TypeScript', 'TailwindCSS', 'Prisma'],
    // },
  ],
};

export default featuredProjectsSection;
