'use client';
import { aboutSection } from '@/lib/content/about';
import { heroSection } from '@/lib/content/hero';
import useWindowWidth from '@/lib/hooks/use-window-width';
import { getBreakpointsWidth } from '@/lib/utils/helper';

import {  AuthorImage, Button, Wrapper } from '@/components';

import { slideUp } from '@/styles/animations';

import { motion } from 'framer-motion';

const Hero = () => {
  const { cta, subtitle, title, tagline, description, specialText } =
    heroSection;
    const { backimg,img} = aboutSection;

  const windowWidth = useWindowWidth();
  const md = getBreakpointsWidth('md');
  const DEFAULT_ANIMATION_DELAY = windowWidth <= md ? 0.9 : 1.7;

  const getAnimationDelay = (i: number, increment = 0.15) =>
    DEFAULT_ANIMATION_DELAY + increment * i;

  return (
    <Wrapper className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-2 lg:gap-16 min-h-[calc(100vh)] mt-10 pb-4 sm:pt-20 sm:pb-8 lg:py-0">
      <div className="w-full lg:w-2/5 flex justify-center lg:justify-end order-1 lg:order-2 sm:mt-0">
        <AuthorImage
          frontsrc={img}
          backsrc='/cropsign.jpg'
          size="w-[200px] h-[200px] xs:w-[240px] xs:h-[240px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px]"
          alt="Author Image"
          priority
        />
      </div>

      <div
        id="hero"
        className="flex flex-col justify-center w-full lg:w-3/5 gap-3 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-0 order-2 lg:order-1">

        <motion.p
          variants={slideUp({ delay: getAnimationDelay(0) })}
          initial="hidden"
          animate="show"
          className="font-mono text-xs sm:text-sm md:text-base text-accent text-center lg:text-left"
        >
          {subtitle}
        </motion.p>

        <div className="space-y-2 sm:space-y-3 lg:space-y-4 text-center lg:text-left">
          <motion.h1
            variants={slideUp({ delay: getAnimationDelay(1) })}
            initial="hidden"
            animate="show"
            className="text-slate-900 dark:text-slate-200 capitalize text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.1]"
          >
            {title}
          </motion.h1>
          <motion.h1
            variants={slideUp({ delay: getAnimationDelay(2) })}
            initial="hidden"
            animate="show"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.2]"
          >
            {tagline}
          </motion.h1>
        </div>

        <motion.p
          variants={slideUp({ delay: getAnimationDelay(3) })}
          initial="hidden"
          animate="show"
          className="max-w-xl text-sm sm:text-base md:text-lg mx-auto lg:mx-0 text-center lg:text-left"
        >
          {description}
        </motion.p>

        <motion.p
          variants={slideUp({ delay: getAnimationDelay(4) })}
          initial="hidden"
          animate="show"
          className="font-mono text-xs sm:text-sm text-accent text-center lg:text-left"
        >
          {specialText}
        </motion.p>

        {cta && (
          <Button
            size="lg"
            type="link"
            variants={slideUp({ delay: getAnimationDelay(5) })}
            initial="hidden"
            animate="show"
            href={cta?.url ?? '#'}
            className={`mt-4 sm:mt-6 lg:mt-8 mx-auto lg:mx-0 ${cta.hideInDesktop ? 'md:hidden' : ''}`}
            sameTab={cta?.sameTab}
          >
            {cta.title}
          </Button>
        )}
      </div>
    </Wrapper>
    
  );
};

export default Hero;
