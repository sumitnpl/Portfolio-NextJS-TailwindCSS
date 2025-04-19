'use client';
import { TabList } from '@/components';

import { experienceSection } from '../lib/content/experience';
import { getSectionAnimation } from '../styles/animations';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="w-full max-w-5xl mt-16 sm:mt-20 lg:mt-24 mb-12 sm:mb-16 px-3 sm:px-6 lg:px-8 mx-auto"
      {...getSectionAnimation}
    >
      {/* Improved Heading */}
      <div className="max-w-4xl mx-auto">
        <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 lg:mb-10">
          <h2 className="heading-secondary text-center text-2xl sm:text-3xl lg:text-4xl font-bold">
            {experienceSection.title}
          </h2>
          <p className="text-center text-[13px] sm:text-sm lg:text-base text-primary/80 max-w-lg mx-auto">
            My professional journey and roles
          </p>
        </div>

        {/* Career Timeline */}
        <div className="bg-accent/5 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-2 xs:p-4 sm:p-6 lg:p-8 -mx-3 xs:mx-0">
          <TabList experiences={experienceSection.experiences} />
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;



// 'use client';
// import { TabList } from '@/components';

// import { experienceSection } from '../lib/content/experience';
// import { getSectionAnimation } from '../styles/animations';
// import { motion } from 'framer-motion';

// const Experience = () => {
//   return (
//     <motion.section
//       id="experience"
//       className="max-w-2xl py-32 mx-auto"
//       {...getSectionAnimation}
//     >
//       <h2 className="heading-secondary">{experienceSection.title}</h2>
//       <TabList experiences={experienceSection.experiences} />
//     </motion.section>
//   );
// };

// export default Experience;
