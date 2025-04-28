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

      {/* Wrapping projects in flex container */}
      <div className="space-y-6 sm:space-y-8 md:space-y-12">
        {/* Group the projects in pairs */}
        {featuredProjectsSection.projects.map((project, i) => {
          if (i % 2 === 0) {
            return (
              <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-12" key={project.id}>
                {/* Displaying two cards in a row */}
                <FeaturedProject
                  align="right"
                  {...project}
                  {...getSectionAnimation}
                />
                {featuredProjectsSection.projects[i + 1] && (
                  <FeaturedProject
                    align="left"
                    {...featuredProjectsSection.projects[i + 1]}
                    {...getSectionAnimation}
                  />
                )}
              </div>
            );
          }
          return null; // Only return when i is even to group in pairs
        })}
      </div>
    </Wrapper>
  );
};

export default FeaturedProjects;
