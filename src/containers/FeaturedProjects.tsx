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

      {/* One card per row with consistent sizing */}
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
        {featuredProjectsSection.projects.map((project) => (
          <FeaturedProject
            key={project.id}
            {...project}
            {...getSectionAnimation}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default FeaturedProjects;
