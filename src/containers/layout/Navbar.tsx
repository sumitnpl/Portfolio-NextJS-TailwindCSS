
'use client';
import { navbarSection } from '@/lib/content/navbar';
import useWindowWidth from '@/lib/hooks/use-window-width';
import { getBreakpointsWidth } from '@/lib/utils/helper';

import { Button, DarkModeButton, Link as CLink, NavButton } from '@/components';

import { fadeIn, slideIn } from '@/styles/animations';

import { motion } from 'framer-motion';
import Image from 'next/image' 
import Link from 'next/link';
import { useEffect, useState } from 'react';

/**
 * Hides the navbar while scrolling down
 * @param {Object} config
 * @param {String} [config.id=navbar] - id of navbar
 * @param {Number} [config.offset=100] - offset of navbar in px
 */

const hideNavWhileScrolling = ({
  id = 'navbar',
  offset = 150,
  when = true,
}: {
  id?: string;
  offset?: number;
  when: boolean;
}) => {
  const nav = document.getElementById(id);
  if (!nav) return;

  let prevScrollPos = window.pageYOffset;

  window.onscroll = () => {
    if (when) {
      const curScrollPos = window.pageYOffset;
      if (prevScrollPos < curScrollPos) nav.style.top = `-${offset}px`;
      else nav.style.top = '0';
      prevScrollPos = curScrollPos;
    }
  };
};

type NavItemsProps = {
  href?: string;
  children: React.ReactNode;
  index: number;
  delay: number;
  onClick?: (event: React.MouseEvent) => void;
};

const NavItem = ({ href, children, onClick, index, delay }: NavItemsProps) => {
  return (
    <motion.li
      className="group"
      variants={slideIn({ delay: delay + index / 10, direction: 'down' })}
      initial="hidden"
      animate="show"
    >
      <CLink
        href={href || `/#${children}`}
        className="block p-2 duration-500 hover:text-accent"
        onClick={onClick}
        withPadding
      >
        {children}
      </CLink>
    </motion.li>
  );
};

const Navbar = () => {
  const { cta, navLinks } = navbarSection;
  const [navbarCollapsed, setNavbarCollapsed] = useState(false);

  const windowWidth = useWindowWidth();
  const md = getBreakpointsWidth('md');
  const ANIMATION_DELAY = windowWidth <= md ? 0 : 0.8;

  useEffect(() => {
    hideNavWhileScrolling({ when: !navbarCollapsed });
  }, [navbarCollapsed]);

  return (
    <motion.header
      variants={fadeIn(0.5)}
      initial="hidden"
      animate="show"
      id="navbar"
      className="fixed inset-x-0 top-0 right-0 z-50 flex items-center justify-between 
      px-3 sm:px-6 xl:px-12 h-16 duration-500 bg-bg/95 backdrop-blur-md"
      style={{ transition: 'top 0.3s ease-in-out' }}
    >


<h1 className="capitalize font-signature text-accent group">
  <Link href="/#hero" className="block">
    <div className="relative group">
      <Image
        src="/cropsign.png" // Provide the image path here
        alt="Sumit Nepal"
        width={200} // Specify the width of the image
        height={200} 
        className="transition-all duration-300 transform group-hover:scale-105 group-hover:brightness-125"
      />
      {/* // Glow effect  */}
      <div className="absolute inset-0 rounded-full bg-gradient-blue opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      <div className="group-hover:w-full drop-shadow-md"></div>
    </div>
  </Link>
</h1>


      <NavButton
        onClick={() => {
          setNavbarCollapsed((prev) => !prev);
        }}
        navbarCollapsed={navbarCollapsed}
        className="md:hidden"
      />

      {(navbarCollapsed || windowWidth > md) && (
        <nav className="group-hover:w-full capitalize fixed 
        text-md duration-300 z-50 w-[94%] sm:w-[90%] left-1/2 -translate-x-1/2 
        top-[4rem] h-auto rounded-lg shadow-lg p-4 sm:p-6 dark:bg-slate-800/95 dark:border-slate-700
        md:static md:w-auto md:left-auto md:transform-none md:top-auto 
        md:rounded-none md:shadow-none md:p-0 md:h-auto md:bg-transparent md:border-none">
          <ul className="flex flex-col items-stretch gap-2.5 sm:gap-3 list-style-none lg:gap-5 xl:gap-6 md:flex-row md:items-center">
          
            {navLinks.map(({ name, url }, i) => (
              <NavItem 
                key={i}
                href={url}
                index={i}
                delay={ANIMATION_DELAY}
                onClick={() => setNavbarCollapsed(false)}
              >
                <div className='hover:scale-105'>{name}</div>
                
              </NavItem>
            ))}

            <div className="flex items-center justify-between gap-5 xl:gap-6">
              {cta && (
                <Button
                className = 'uppercase font-mono text-primary'
                  type="link"
                  href={cta.url}
                  sameTab={cta?.sameTab}
                  variants={slideIn({
                    delay: ANIMATION_DELAY + navLinks.length / 10,
                    direction: 'down',
                  })}
                  initial="hidden"
                  animate="show"
                >
                  {cta.title}
                </Button>
              )}
              <DarkModeButton
                onClick={() => setNavbarCollapsed(false)}
                variants={slideIn({
                  delay: ANIMATION_DELAY + (navLinks.length + 1) / 10,
                  direction: 'down',
                })}
                initial="hidden"
                animate="show"
              />
            </div>
          </ul>
        </nav>
      )}
    </motion.header>
  );
};

export default Navbar;