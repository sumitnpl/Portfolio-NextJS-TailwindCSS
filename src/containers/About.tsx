'use client';
import { aboutSection } from '@/lib/content/about';
import { getId } from '@/lib/utils/helper';

import { AuthorImage, Link, ListItem, Wrapper } from '@/components';

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
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary my-6">{title}</h2>
      <main className="flex flex-col lg:items-start justify-center items-center lg:flex-row gap-11">
      <div className="w-full lg:w-auto">
        <AuthorImage
          frontsrc={img}
          backsrc={backimg}
          alt="Sumit Nepal"
          priority
        />
      </div>
        <div>
      
        <div className="space-y-2 lg:w-11/12 ">
          <p className='text-primary'>
            Hi, my name is Sumit Nepal, a Graduate student from Butwal Multiple Campus, currently working at software company,{' '}
            <Link
              href="https://vtechsoftwaresolutions.com/"
              target="_blank"
              className="text-accent"
            >
              vTech Software Solutions
            </Link>
            . I'm an Artist as well as crazy UI/UX designer who wants to explore everything.
          </p>
          {/* <p>
            Fast-forward to today, and I've had the privilege of working at a
            start-up -{' '}
            <Link
              href="https://www.pixelwand.live/"
              target="_blank"
              className="text-accent"
            >
              Pixelwand
            </Link>
            .
          </p> 
          <p>
            My main focus these days is learning mobile development and finding
            a decent job.
          </p>*/}

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-2 text-sm">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
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
