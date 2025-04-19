'use client';

import featuredProjectsSection from '@/lib/content/featured-projects';

import { Wrapper } from '@/components';
import FeaturedProject from '@/components/ui/FeaturedProject';

import { getSectionAnimation } from '@/styles/animations';

const FeaturedProjects = () => {
  return (
    <Wrapper id="projects" {...getSectionAnimation}>
      <div className="mb-8 sm:mb-10 md:mb-12 space-y-3 text-center">
        <h2 className="heading-secondary !mb-0 capitalize">
          {featuredProjectsSection.title}
        </h2>

        <p className="font-mono text-accent capitalize text-xs">
          some things I&apos;ve built
        </p>
      </div>

      <div className="space-y-6 sm:space-y-8 md:space-y-12">
        {featuredProjectsSection.projects.map((project, i) => (
          <FeaturedProject
            key={project.id}
            align={i % 2 === 0 ? 'right' : 'left'}
            {...project}
            {...getSectionAnimation}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default FeaturedProjects;
