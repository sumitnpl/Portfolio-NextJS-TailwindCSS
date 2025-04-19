'use client';
import { skillsSection } from '@/lib/content/skills';
import { useTheme } from '@/lib/hooks/use-theme';

import { Skill, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

const Skills = () => {
  const { title, skills } = skillsSection;
  const { isDarkMode } = useTheme();

  return (
    <Wrapper id="skills" className="mt-16 sm:mt-20 lg:mt-24" {...getSectionAnimation}>
      <h2 className="text-center heading-secondary">{title}</h2>

      <div className="mt-8 sm:mt-12 space-y-16 sm:space-y-24">
        {skills.map(({ id, lottie, softwareSkills, points, title }) => (
          <Skill
            key={id}
            className="odd:lg:flex-row-reverse"
            lottie={lottie[isDarkMode ? 'dark' : 'light']}
            skills={softwareSkills}
            points={points}
            title={title}
            {...getSectionAnimation}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Skills;
