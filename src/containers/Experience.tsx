'use client';
import { TabList } from '@/components';

import { experienceSection } from '../lib/content/experience';
import { getSectionAnimation } from '../styles/animations';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="max-w-3xl py-20 px-4 sm:px-8 mx-auto"
      {...getSectionAnimation}
    >
      {/* Improved Heading */}
      <h2 className="heading-secondary text-center sm:text-left text-2xl sm:text-4xl font-bold text-accent mb-6 sm:mb-10">
        {experienceSection.title}
      </h2>

      {/* Scrollable Tabs for Mobile */}
      <div className="overflow-x-auto sm:overflow-hidden">
        <TabList experiences={experienceSection.experiences} />
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
