'use client';

import { FeaturedProjectType } from '@/lib/types';
import { blurImageURL } from '@/lib/utils/config';
import { cn } from '@/lib/utils/helper';

import { Icon } from '@iconify/react';
import { motion, MotionProps } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Props extends FeaturedProjectType, MotionProps {}

const FeaturedProject = ({
  img,
  name,
  url,
  repo,
  description,
  tasks = '',
  tags,
  ...rest
}: Props) => {
  const taskList = tasks.split(',').map((task) => task.trim());

  return (
    <div className="px-4 sm:px-1 mb-8">
      <motion.div
        {...rest}
        className={cn(
          'flex flex-col lg:flex-row w-full h-full min-h-[320px]',
          'bg-slate-200 dark:bg-slate-800/95',
          'rounded-xl shadow-xl',
          'overflow-hidden'
        )}
      >
        {/* Image Section */}
        <div className="relative w-full  lg:w-1/2 aspect-video lg:aspect-auto lg:min-h-[300px] p-4 dark:bg-white">
          <div className="relative w-full h-full overflow-hidden !dark:shadow-md hover:shadow-xl hover:bg-white">
            <Image
              src={img}
              alt={name}
              fill
              placeholder="blur"
              blurDataURL={blurImageURL}
              className="object-contain"
              sizes="(max-width: 512px) 100vw, 50vw"
            />
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10"
              aria-label={`Visit project ${name}`}
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-5 sm:p-6 lg:p-8 flex flex-col justify-between text-gray-800 dark:text-gray-200">
          <div className="space-y-4">
            {/* Title and Links */}
            <div className="flex justify-between items-center">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-accent dark:text-accent">
                <Link href={url} target="_blank" rel="noopener noreferrer">
                  {name}
                </Link>
              </h3>
              <div className="flex gap-3">
                {repo &&(
                
                  <Link href= {repo}
                    target ="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 dark:text-gray-400"
                  >
                    <Icon icon="tabler:brand-github" width={22} />
                  </Link>
                  )}

                <Link
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-gray-400"
                >
                  <Icon icon="ci:external-link" width={22} />
                </Link>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-primary/80  dark:text-gray-400">{description}</p>
            <p className="text-sm text-gray-600 text-justify dark:text-gray-400">{tasks}</p>

            {/* Tags */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium text-accent dark:text-blue-300 bg-blue-50 dark:bg-blue-800/20 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturedProject;
