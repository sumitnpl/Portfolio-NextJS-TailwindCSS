import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: 'Vtech Software Solutions',
      companyUrl: 'https://vtechsoftwaresolutions.com/',
      role: 'Frontend Developer',
      started: 'April 2023',
      upto: 'Present',
      tasks: [
        {
          position: 'Frontend Developer',
          duration: 'July 2023 - Present',
          points: [
            'Lead development of trading platform using TradingView library and React',
            'Enhanced and maintained SHMTH Capital website with new features',
            'Collaborated with cross-functional teams on multiple client projects',
            'Implemented best practices and improved development workflows'
          ]
        },
        {
          position: 'Frontend Developer Intern',
          duration: 'April 2023 - July 2023',
          points: [
            // 'Built initial version of trading platform using TradingView library',
            // 'Developed SHMTH Capital website using Next.js, TypeScript & TailwindCSS',
            // 'Worked closely with senior developers to learn best practices',
            // 'Demonstrated strong performance leading to full-time position'
          ]
        }
      ],
    },
    {
      company: 'Sciever Inc',
      companyUrl: 'https://www.scieverinc.com/',
      role: 'UI/UX Design and Frontend Development',
      started: 'April 2024',
      upto: 'June 2024',
      tasks: [
        'Implemented UI components with React, TypeScript & Tailwind CSS.',
        'Developed and maintained design systems that separates design logic.',
        'Understanding client needs and proposing effective solutions.',
        'Lead a cross-functional team of developers and designers.',
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
