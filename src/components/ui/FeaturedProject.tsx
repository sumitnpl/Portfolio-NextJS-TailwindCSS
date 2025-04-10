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
  tasks = "",
  tags,
  align = 'left',
  ...rest
}: Props) => {
  const taskList = tasks.split(',').map((task) => task.trim());

  return (
    <>
      {/* Desktop Version */}
      <motion.div
        className={cn(
          'relative group flex flex-col lg:flex-row items-center justify-between rounded-xl overflow-hidden shadow-xl transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl',
          'bg-white border border-gray-300 lg:max-w-4xl mx-auto w-full p-4 lg:p-6'  // Reduced padding
        )}
        {...rest}
      >
        {/* Image Section */}
        <div className="w-1/2 lg:w-1/2 lg:h-60 rounded-lg aspect-square overflow-hidden mb-4 lg:mb-0"> {/* Reduced height */}
          <Image
            src={img}
            alt={name}
            width={720}
            height={480}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            placeholder="blur"
            blurDataURL={blurImageURL}
          />
          <Link
            href={`${url}`}
            target="_blank"
            className="absolute inset-0 z-10 block bg-transparent"
          />
        </div>

        {/* Description Section */}
        <div className="w-full lg:w-1/2 space-y-4 p-4 text-gray-900"> {/* Reduced padding */}
          <h2 className="text-2xl font-semibold transform transition duration-300 group-hover:text-accent">
            <a href={url} target="_blank" className="hover:underline">
              {name}
            </a>
          </h2>
          <p className="text-md opacity-90">{description}</p>

          {/* Task List with Animation */}
          <div className="space-y-2">
            <p className="font-mono text-accent text-lg">Tasks / Achievements:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              {taskList.length > 0 ? (
                taskList.map((task, index) => (
                  <li key={index} className="transition-all duration-200 hover:text-accent">
                    {task}
                  </li>
                ))
              ) : (
                <li className="text-gray-500">No tasks available</li>
              )}
            </ul>
          </div>

          {/* Tags Section with Hover Effects */}
          <div className="flex flex-wrap gap-3 mt-4 text-sm">
            {tags.map((tag) => (
              <span
                key={tag.replaceAll(' ', '')}
                className="bg-accent text-white py-1 px-4 rounded-full text-xs font-medium transition duration-300 transform hover:scale-110"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Repo and External Links */}
          <div className="flex gap-6 mt-4">
            {repo && (
              <a
                href={repo}
                className="text-gray-900 hover:text-accent transition duration-300"
                target="_blank"
              >
                <Icon icon="tabler:brand-github" width={24} height={24} />
              </a>
            )}
            <a
              href={url}
              className="text-gray-900 hover:text-accent transition duration-300"
              target="_blank"
            >
              <Icon icon="ci:external-link" width={24} height={24} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Mobile Version */}
      <motion.div
        className={cn(
          'relative group rounded-xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl',
          'bg-white border border-gray-300 lg:hidden mx-auto w-full h-auto'
        )}
        {...rest}
      >
        {/* Image Section for Mobile */}
        <div className="w-full h-56 rounded-lg overflow-hidden mb-4"> {/* Reduced height */}
          <Image
            src={img}
            alt={name}
            width={720}
            height={480}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            placeholder="blur"
            blurDataURL={blurImageURL}
          />
          <Link
            href={`${url}`}
            target="_blank"
            className="absolute inset-0 z-10 block bg-transparent"
          />
        </div>

        {/* Description Section for Mobile */}
        <div className="space-y-4 p-4 text-gray-900"> {/* Reduced padding */}
          <h2 className="text-2xl font-semibold transform transition duration-300 group-hover:text-accent">
            <a href={url} target="_blank" className="hover:underline">
              {name}
            </a>
          </h2>
          <p className="text-md opacity-90">{description}</p>

          {/* Task List for Mobile */}
          <div className="space-y-2">
            <p className="font-mono text-accent text-lg">Tasks / Achievements:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              {taskList.length > 0 ? (
                taskList.map((task, index) => (
                  <li key={index} className="transition-all duration-200 hover:text-accent">
                    {task}
                  </li>
                ))
              ) : (
                <li className="text-gray-500">No tasks available</li>
              )}
            </ul>
          </div>

          {/* Tags Section for Mobile */}
          <div className="flex flex-wrap gap-3 mt-4 text-sm">
            {tags.map((tag) => (
              <span
                key={tag.replaceAll(' ', '')}
                className="bg-accent text-white py-1 px-4 rounded-full text-xs font-medium transition duration-300 transform hover:scale-110"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Repo and External Links for Mobile */}
          <div className="flex gap-6 mt-4">
            {repo && (
              <a
                href={repo}
                className="text-gray-900 hover:text-accent transition duration-300"
                target="_blank"
              >
                <Icon icon="tabler:brand-github" width={24} height={24} />
              </a>
            )}
            <a
              href={url}
              className="text-gray-900 hover:text-accent transition duration-300"
              target="_blank"
            >
              <Icon icon="ci:external-link" width={24} height={24} />
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default FeaturedProject;


// import { FeaturedProjectType } from '@/lib/types';
// import { blurImageURL } from '@/lib/utils/config';
// import { cn } from '@/lib/utils/helper';

// import { Icon } from '@iconify/react';
// import { motion, MotionProps } from 'framer-motion';
// import Image from 'next/image';
// import Link from 'next/link';

// interface Props extends FeaturedProjectType, MotionProps {
//   align?: 'left' | 'right';
// }

// const FeaturedProject = ({
//   img,
//   name,
//   url,
//   repo,
//   description,
//   tasks,
//   tags,
//   align = 'left',
//   ...rest
// }: Props) => {
//   return (import { FeaturedProjectType } from '@/lib/types';
//     <>
//       <motion.div
//         className={cn(
//           'relative hidden lg:block  min-h-[280px] sm:min-h-[360px] h-full overflow-hidden lg:overflow-visible rounded-lg lg:rounded-xl shadow-lg lg:shadow-none text-center lg:text-right',
//           align === 'left' && 'lg:text-left'
//         )}
//         {...rest}
//       >
//         <div
//           className={cn(
//             'w-full lg:max-w-[60%] absolute inset-0 h-full -z-20  lg:z-0 lg:object-contain rounded overflow-hidden shadow-2xl group',

//             align === 'left' && 'ml-auto'
//           )}
//         >
//           <Image
//             src={img}
//             alt={name}
//             width={720}
//             height={480}
//             className="object-cover w-full h-full transition-transform duration-200 group-hover:scale-105"
//             placeholder="blur"
//             blurDataURL={blurImageURL}
//           />
//           <Link
//             href={`${url}`}
//             target="_blank"
//             className="absolute inset-0 z-10 block bg-transparent"
//           />
//         </div>
//         <div
//           className={cn(
//             'lg:max-w-[45%] space-y-2 lg:space-y-5 w-full h-full p-5 lg:p-0 ',
//             'absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0',
//             'lg:h-auto left-0 lg:left-auto top-0 right-auto lg:bg-none lg:text-inherit',
//             'flex flex-col justify-end',
//             'bg-gradient-to-t from-black/80 group-hover:from-accent group-focus:from-accent',
//             align === 'left' && 'lg:left-0'
//           )}
//         >
//           <div>
//             <div className="font-mono hidden lg:block text-accent capitalize text-xs lg:mb-2.5">
//               featured project
//             </div>
//             <h2 className="heading-tertiary !text-white lg:!text-dark-2 !font-semibold lg:!font-normal !normal-case">
//               <a
//                 href={url}
//                 className="block duration-200 hover:text-accent"
//                 target="_blank"
//               >
//                 {name}
//               </a>
//             </h2>
//           </div>

//           <div className="rounded-2xl  lg:bg-bg-secondary lg:shadow-lg lg:p-5">
//             <div
//               className={cn(
//                 'lg:max-w-sm text-dark-1 lg:text-inherit text-sm lg:text-base',
//                 align === 'right' && 'ml-auto'
//               )}
//             >
//               <p className="text-dark-1">{description}</p>
//               <div className="hidden my-3 font-mono text-xs capitalize lg:block text-accent lg:my-2 lg:mt-3">
//                 tasks / achievements
//               </div>
//               <div className="hidden text-base lg:block lg:text-sm">
//                 {tasks}
//               </div>
//             </div>
//           </div>

//           <p
//             className={cn(
//               'font-mono text-[10px] text-accent lg:text-accent lg:text-xs justify-center capitalize flex flex-wrap gap-2 lg:gap-x-5 items-center lg:justify-end',
//               align === 'left' && 'lg:justify-start'
//             )}
//           >
//             {tags.map((tag) => (
//               <span key={tag.replaceAll(' ', '')}>{tag}</span>
//             ))}
//           </p>

//           {repo && (
//             <div
//               className={cn(
//                 'flex lg:justify-end items-center gap-3',
//                 align === 'left' && 'lg:justify-start'
//               )}
//             >
//               <a
//                 href={repo}
//                 className="block duration-200 hover:text-accent"
//                 target="_blank"
//               >
//                 <Icon icon="tabler:brand-github" width={22} height={22} />
//               </a>
//               <a
//                 href={url}
//                 className="block duration-200 hover:text-accent"
//                 target="_blank"
//               >
//                 <Icon icon="ci:external-link" width={24} height={24} />
//               </a>
//             </div>
//           )}
//         </div>
//       </motion.div>

//       {/* For mobile */}
//       <motion.div
//         className={cn(
//           'relative lg:hidden min-h-[300px] h-full rounded-xl shadow-lg lg:shadow-none text-center'
//         )}
//         {...rest}
//       >
//         {/* Image Header */}
//         <header className={cn('w-full')}>
//           <Image
//             src={img}
//             alt={name}
//             width={720}
//             height={480}
//             className="object-cover w-full h-full transition-transform duration-200 group-hover:scale-105"
//             placeholder="blur"
//             blurDataURL={blurImageURL}
//           />
//           <Link
//             href={`${url}`}
//             target="_blank"
//             className="absolute inset-0 z-10 block bg-transparent"
//           />
//         </header>

//         <div className={cn('bg-bg-secondary p-5 space-y-2')}>
//           <div>
//             {/* <div className="font-mono text-accent capitalize text-xs lg:mb-2.5">
//               featured project
//             </div> */}
//             <h2 className="heading-tertiary !text-white !font-semibold !normal-case">
//               <a
//                 href={url}
//                 className="block duration-200 hover:text-accent"
//                 target="_blank"
//               >
//                 {name}
//               </a>
//             </h2>
//           </div>

//           <div className={cn('text-dark-1 space-y-2 text-sm')}>
//             <p className="text-base text-dark-1">{description}</p>
//             <div className="hidden my-3 font-mono text-xs capitalize lg:block text-accent lg:my-2 lg:mt-3">
//               tasks / achievements
//             </div>
//             <div className="mb-2 space-y-1">
//               {tasks?.split(',').map((task) => (
//                 <div key={task.slice(0, 10)}>{task}</div>
//               ))}
//             </div>
//           </div>

//           <p
//             className={cn(
//               'font-mono text-[10px] text-accent lg:text-accent lg:text-xs justify-center capitalize flex flex-wrap gap-2 lg:gap-x-5 items-center lg:justify-end',
//               align === 'left' && 'lg:justify-start'
//             )}
//           >
//             {tags.map((tag) => (
//               <span key={tag.replaceAll(' ', '')}>{tag}</span>
//             ))}
//           </p>

//           {repo && (
//             <div
//               className={cn(
//                 'flex lg:justify-end items-center gap-3',
//                 align === 'left' && 'lg:justify-start'
//               )}
//             >
//               <a
//                 href={repo}
//                 className="block duration-200 hover:text-accent"
//                 target="_blank"
//               >
//                 <Icon icon="tabler:brand-github" width={22} height={22} />
//               </a>
//               <a
//                 href={url}
//                 className="block duration-200 hover:text-accent"
//                 target="_blank"
//               >
//                 <Icon icon="ci:external-link" width={24} height={24} />
//               </a>
//             </div>
//           )}
//         </div>
//       </motion.div>
//     </>
//   );
// };

// export default FeaturedProject;
