'use client';
import { aboutSection } from '@/lib/content/about';
import { getId } from '@/lib/utils/helper';

import { AuthorImage, ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const About = () => {
  const { title, img,backimg,list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" className="mt-12 sm:mt-16 lg:mt-20 mb-16 sm:mb-20 lg:mb-24" {...getSectionAnimation}>
      <h2 className="heading-secondary mb-6 lg:mb-8 text-center lg:text-left">{title}</h2>
      <main className="flex flex-col items-center lg:items-start lg:flex-row gap-6 sm:gap-8 lg:gap-16 max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="w-full max-w-[240px] xs:max-w-[280px] sm:max-w-[300px] md:max-w-[320px] lg:w-2/5 flex justify-center lg:justify-end mb-2 sm:mb-4 lg:mb-0">
          <AuthorImage
            frontsrc={img}
            backsrc={backimg}
            alt="Sumit Nepal"
            priority
            size="w-full aspect-square max-w-full"
          />
        </div>
        <div className="w-full lg:w-3/5">
          <div className="space-y-4 sm:space-y-5">
            <p className='text-primary text-sm sm:text-base lg:text-lg leading-relaxed text-left text-justify'>
            {/* hello sumit {' '}
              <Link
                href="https://vtechsoftwaresolutions.com/"
                target="_blank"
                className="text-accent hover:underline inline-flex items-center"
              >
                vTech Software Solutions
              </Link> */}
              Hi, I'm Sumit Nepal — a passionate Computer Science graduate with a strong interest in UI/UX design 
              and front-end development. I enjoy crafting clean, user-friendly interfaces that solve real-world problems 
              and create meaningful experiences. Always eager to learn and collaborate, I'm driven by creativity, empathy,
               and the desire to make a positive impact through design and technology.
            </p>

            {list && (
              <div className="mt-4 sm:mt-6 lg:mt-8">
                <p className="text-base sm:text-lg font-medium mb-3 sm:mb-4 lg:text-left">{list.title}</p>
                <ul className="grid grid-cols-2 text-xs sm:text-sm lg:text-base w-full max-w-xl lg:max-w-none mx-auto lg:mx-0 lg:pr-8">
                  {list.items.map((item) => (
                    <ListItem key={getId()} className="transition-colors duration-200 text-left py-1.5 flex items-center gap-2 before:content-['▹'] before:text-accent before:text-sm">{item}</ListItem>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
