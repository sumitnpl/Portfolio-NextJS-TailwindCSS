'use client';

import { FeaturedProjectType } from '@/lib/types';
import { blurImageURL } from '@/lib/utils/config';
import { cn } from '@/lib/utils/helper';

import { Icon } from '@iconify/react';
import { motion, MotionProps } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Props extends FeaturedProjectType, MotionProps {
  align?: 'left' | 'right';
}

const FeaturedProject = ({
  img,
  name,
  url,
  repo,
  description,
  tasks = '',
  tags,
  align = 'left',
  ...rest
}: Props) => {
  const taskList = tasks.split(',').map((task) => task.trim());

  return (
    <motion.div
      {...rest}
      className={cn(
        'group relative w-full max-w-[80%] lg:max-w-[1200px] lg:w-[800px] mx-auto my-10 overflow-hidden rounded-2xl border border-gray-200 shadow-xl dark:shadow-2xl dark:border-neutral-700 transition-all duration-300 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md flex flex-col lg:flex-row',
        align === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'
      )}
    >
      {/* Image */}
      <div className="relative w-full lg:w-1/2 h-64 sm:h-80 lg:h-[400px] overflow-hidden">
        <Image
          src={img}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          placeholder="blur"
          blurDataURL={blurImageURL}
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors z-10" />
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-20"
        />
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2 px-6 sm:px-8 py-8 space-y-5 sm:space-y-6 text-gray-800 dark:text-gray-200 z-30">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold group-hover:text-accent transition-colors">
          <Link href={url} target="_blank" rel="noopener noreferrer">
            {name}
          </Link>
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-primary/90">
          {description}
        </p>

        {/* Features */}
        {taskList.length > 0 && (
          <div className="space-y-1 sm:space-y-2">
            <p className="font-mono text-sm sm:text-base text-accent">Key Features:</p>
            <ul className="list-disc pl-5 text-sm lg:text-base text-primary/70 space-y-1">
              {taskList.map((task, index) => (
                <li
                  key={index}
                  className="hover:text-primary transition-colors duration-200"
                >
                  {task}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-accent/10 px-4 py-1 text-xs lg:text-sm font-medium text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="flex items-center gap-5 pt-4">
          {repo && (
            <Link
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
            >
              <Icon icon="tabler:brand-github" width={24} />
            </Link>
          )}
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
          >
            <Icon icon="ci:external-link" width={24} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProject;
