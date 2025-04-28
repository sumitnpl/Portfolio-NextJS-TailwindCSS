import Image from 'next/image';
import { useState } from 'react';

type Props = {
  frontsrc: string;  // Front image source
  backsrc: string;   // Back image source (for hover effect)
  alt: string;       // Alt text for images
  size?: string;     // Custom size (e.g., 'w-[500px] h-[500px]' for larger images)
};

const AuthorImage = ({ frontsrc, backsrc, alt, size = "w-full aspect-square max-w-[350px]", priority = false }: Props & { priority?: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative ${size} rounded-full overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ perspective: '1000px' }}
    >
      <div
        className="relative w-full h-full transition-transform duration-500 ease-out will-change-transform"
        style={{
          transformStyle: 'preserve-3d',
          transform: isHovered ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 w-full h-full rounded-full"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(0deg)',
          }}
        >
          <Image
            src={frontsrc}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={priority}
            quality={90}
            className="object-cover w-full h-full rounded-full"
          />
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 w-full h-full rounded-full"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <Image
            src={backsrc}
            alt={alt}
            fill
            sizes="(max-width: 700px) 80vw, 20vw"
            priority={priority}
            quality={90}
            className="object-cover w-full h-full rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthorImage;





// import Image from 'next/image';


// type Props = { src: string; alt: string };

// const AuthorImage = ({ src, alt }: Props) => {
//   return (
// <div className="relative transition-all duration-300 group-hover:scale-105">
//   <Image
//     src={src}  // Set your image source
//     alt={alt}  // Set your image alt text
//     width={1250} // Adjust the width as needed
//     height={1250} // Adjust the height as needed

    
//     className="aspect-square rounded-full object-cover border-4 border-dark-3 shadow-lg shadow-accent-light"
//   />
// </div>

//   );
// };

// export default AuthorImage;
