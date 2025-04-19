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
      className={cn(
        'group relative w-full overflow-hidden rounded-xl bg-white border border-gray-200 shadow-md transition-all duration-300 hover:shadow-lg flex flex-col md:flex-row',
        align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
      )}
      {...rest}
    >
      {/* Image Section */}
      <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
        <Image
          src={img}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          placeholder="blur"
          blurDataURL={blurImageURL}
        />
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 px-6 py-8 space-y-6 text-gray-900">
        <h2 className="text-2xl font-bold group-hover:text-accent transition-colors">
          <Link href={url} target="_blank" rel="noopener noreferrer">
            {name}
          </Link>
        </h2>
        <p className="text-base">{description}</p>

        {/* Tasks */}
        {taskList.length > 0 && (
          <div className="space-y-2">
            <p className="font-mono text-sm text-accent">Key Features:</p>
            <ul className="space-y-1 list-disc list-inside text-primary/70">
              {taskList.map((task, index) => (
                <li key={index} className="hover:text-primary transition-colors">
                  {task}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="flex items-center gap-4 pt-2">
          {repo && (
            <Link
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/60 hover:text-accent transition-colors"
            >
              <Icon icon="tabler:brand-github" width={20} />
            </Link>
          )}
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary/60 hover:text-accent transition-colors"
          >
            <Icon icon="ci:external-link" width={20} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProject;
