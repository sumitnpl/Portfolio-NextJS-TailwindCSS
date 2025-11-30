import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Sumit Nepal',
  tagline: 'Student',
  description:
    "Passionate in Computer Science is extremely interested in animation, UI/UX design and graphics, and is dedicated to creating engaging visuals and seamless user experiences.",
  specialText: 'Currently available for freelance',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
