'use client';

import { aboutSection } from '@/lib/content/about';
import { getId } from '@/lib/utils/helper';

import { ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const About = () => {
  const { title, list } = aboutSection;
  const [domLoaded, setDomLoaded] = useState(false);
  const imageRef = useRef<HTMLDivElement | null>(null); // ✅ Fix for TypeScript error

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    imageRef.current.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    if (!imageRef.current) return;
    imageRef.current.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  };

  return domLoaded ? (
    <Wrapper
      id="about"
      className="mt-12 sm:mt-16 lg:mt-20 mb-16 sm:mb-20 lg:mb-24"
      {...getSectionAnimation}
    >
      <h2 className="heading-secondary mb-6 lg:mb-8 text-center lg:text-left">{title}</h2>

      <main className="flex flex-col items-center lg:items-start lg:flex-row gap-6 sm:gap-8 lg:gap-16 max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Profile Image */}
        <div className="w-full max-w-[240px] xs:max-w-[280px] sm:max-w-[300px] md:max-w-[320px] lg:w-2/5 flex justify-center lg:justify-end mb-2 sm:mb-4 lg:mb-0">
          <div
            className="relative w-72 h-72 group [perspective:1000px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              ref={imageRef}
              className="w-full h-full transition-transform duration-300 ease-out [transform-style:preserve-3d]"
            >
              <Image
                src="/aboutme_photo.jpg"
                alt="Sumit Nepal"
                width={280}
                height={280}
                className="rounded-md object-cover w-full h-full"
              />
              <div className="absolute inset-0 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"></div>
              <div className="absolute inset-0 transition-all duration-500 ease-in-out"></div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-3/5">
          <div className="space-y-4 sm:space-y-5">
            <p className="text-primary text-base leading-relaxed text-justify">
              Hi, I'm Sumit Nepal — a passionate Computer Science graduate with a strong interest in UI/UX design and front-end development. I enjoy crafting clean, user-friendly interfaces that solve real-world problems and create meaningful experiences. Always eager to learn and collaborate, I'm driven by creativity, empathy, and the desire to make a positive impact through design and technology.
            </p>

            {list && (
              <div className="mt-4 sm:mt-6 lg:mt-8">
                <p className="text-base sm:text-lg font-medium mb-3 sm:mb-4 lg:text-left">
                  {list.title}
                </p>
                <ul className="grid grid-cols-2 text-base w-full max-w-xl lg:max-w-none mx-auto lg:mx-0 lg:pr-8">
                  {list.items.map((item) => (
                    <ListItem
                      key={getId()}
                      className="transition-colors duration-200 text-left py-1.5 flex items-center gap-2 before:content-['▹'] before:text-accent before:text-sm"
                    >
                      {item}
                    </ListItem>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>
    </Wrapper>
  ) : null;
};

export default About;
