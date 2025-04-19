'use client';
import useWindowWidth from '@/lib/hooks/use-window-width';
import { ExperienceType, TaskType } from '@/lib/types';
import { getBreakpointsWidth, getId } from '@/lib/utils/helper';

import { Link, ListItem } from '@/components';

import { useState } from 'react';

type Props = {
  experiences: ExperienceType[];
};

const TabList = ({ experiences }: Props) => {
  const [activeExperience, setActiveExperience] = useState(0);
  const windowWidth = useWindowWidth();

  const { role, company, companyUrl, started, upto, tasks } =
    experiences[activeExperience];

  const sliderStyle =
    windowWidth >= getBreakpointsWidth('sm')
      ? {
          transform: `translateY(${activeExperience * 56}px)`,
        }
      : {
          left: `${activeExperience * 50}%`,
        };

  return (
    <div className="flex flex-col sm:flex-row text-sm md:text-base gap-4 sm:gap-6 lg:gap-10 min-h-[300px] sm:min-h-[350px]">
      {/* Company Tabs */}
      <div className="top-0 z-10 -mx-3 sm:mx-0 bg-background/80 backdrop-blur-sm sm:bg-transparent sm:backdrop-blur-none font-mono text-xs md:text-sm">
        <div className="grid grid-cols-2 sm:grid-cols-1 w-full">
          {experiences.map(({ company, role }, i) => (
            <button
              key={getId()}
              className={`group relative h-16 sm:h-14 w-full px-3 sm:px-5 md:px-6 text-left capitalize hover:bg-accent/10 focus:outline-none transition-colors duration-200 ${i === activeExperience ? 'text-accent bg-accent/10' : 'text-primary/70 hover:text-accent'}`}
              onClick={() => setActiveExperience(i)}
            >
              <span className="block font-medium text-sm">{company}</span>
              <span className="block text-[10px] mt-0.5 opacity-60 lowercase">{role}</span>
            </button>
          ))}
        </div>
        {/* Active Indicator */}
        <div className="absolute h-0.5 w-full sm:w-0.5 sm:h-full rounded-full bottom-0 sm:inset-0 left-0 bg-accent/10"></div>
        <div
          style={sliderStyle}
          className="absolute h-0.5 w-[50%] sm:w-0.5 sm:h-14 rounded-full bg-accent bottom-0 sm:inset-0 transition-all duration-300 ease-in-out"
        ></div>
      </div>

      {/* Experience Details */}
      <div key={getId()} className="px-3 py-4 sm:p-3 space-y-5 sm:space-y-6 flex-1">
        <div className="space-y-2 sm:space-y-2">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <h3 className="text-base sm:text-lg font-medium capitalize">{role}</h3>
            <span className="text-accent">@</span>
            <Link href={companyUrl} target="_blank" className="text-accent hover:underline">
              {company}
            </Link>
          </div>
          <p className="font-mono text-[11px] sm:text-xs text-primary/70">
            {String(started)} - {String(upto)}
          </p>
        </div>

        <div className="space-y-7 sm:space-y-8">
          {Array.isArray(tasks) && typeof tasks[0] === 'object' ? (
            // For vTech with multiple positions
            (tasks as TaskType[]).map(({ position, duration, points }) => (
              <div key={position} className="space-y-3 bg-accent/5 -mx-3 px-3 py-4 rounded-lg sm:mx-0 sm:px-4 sm:py-5">
                <div className="space-y-1">
                  <h4 className="font-medium text-sm sm:text-base">{position}</h4>
                  <p className="font-mono text-[11px] text-primary/60">{duration}</p>
                </div>
                <ul className="space-y-2.5 sm:space-y-3">
                  {points.map((point) => (
                    <ListItem 
                      key={getId()} 
                      className="text-[13px] sm:text-sm text-primary/80 hover:text-primary transition-colors duration-200 flex items-start gap-2.5 sm:gap-3 before:content-['▹'] before:text-accent before:text-sm before:mt-0.5"
                    >
                      {point}
                    </ListItem>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            // For Sciever with single position
            <div className="bg-accent/5 -mx-3 px-3 py-4 rounded-lg sm:mx-0 sm:px-4 sm:py-5">
              <ul className="space-y-2.5 sm:space-y-3">
                {(tasks as string[]).map((task) => (
                  <ListItem 
                    key={getId()} 
                    className="text-[13px] sm:text-sm text-primary/80 hover:text-primary transition-colors duration-200 flex items-start gap-2.5 sm:gap-3 before:content-['▹'] before:text-accent before:text-sm before:mt-0.5"
                  >
                    {task}
                  </ListItem>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabList;
