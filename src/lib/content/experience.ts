import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: 'Sciever Inc Pvt. ltd',
      companyUrl: 'https://www.scieverinc.com/',
      role: 'UI/UX Design and Frontend Development',
      started: 'April 2024',
      upto: 'June 2024',
      tasks: [
        'Implemented UI components with React, TypeScript & Tailwind CSS.',
        'Developed and maintained design systems that separates design logic.',
        'Understanding client needs and proposing effective solutions, which also involves strategising and planning.',
        'Lead a cross-functional team of developers and designers in the creation of a SaaS product.',
      ],
    },
    {
      company: 'Vtech Software Solutions',
      companyUrl: 'https://vtechsoftwaresolutions.com/',
      role: 'frontend developer intern',
      started: 'april 2023',
      upto: 'july 2023',
      tasks: [
        'Built trading platform using TradingView library.',
        'Designed SHMTH Capital website with Next.js, TypeScript & TailwindCSS.',
        'Collaborated with diverse nationwide team of developers.',
      ],
    },
    // {
    //   company: 'webnetics',
    //   companyUrl: 'https://webnetic.vercel.app/',
    //   role: 'frontend developer',
    //   started: 'june 2022',
    //   upto: 'january 2023',
    //   tasks: [
    //     'Built static frontend UI from the ground up using Next.js and Figma handover designs.',
    //     'Architected the folder structure and initial setup of the app.',
    //     'Reviewed and approved multiple Pull requests.',
    //     'Worked remotely with a distributed team from around the globe, collaborating closely using screen-sharing.',
    //   ],
    // },
  ],
};
