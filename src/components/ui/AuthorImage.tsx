import Image from 'next/image';


type Props = { src: string; alt: string };

const AuthorImage = ({ src, alt }: Props) => {
  return (
<div className="relative transition-all duration-300 group-hover:scale-105">
  <Image
    src={src}  // Set your image source
    alt={alt}  // Set your image alt text
    width={1300} // Adjust the width as needed
    height={1500} // Adjust the height as needed

    
    className="aspect-square rounded-tl-3xl object-cover border-4 border-dark-3 shadow-lg shadow-accent-light"
  />
</div>

  

    // <div className="rounded relative w-64 h-64 group sm:w-auto sm:h-auto">
    //   <Image
    //     src={src}
    //     alt={alt}
    //     width={300}
    //     height={300}
    //     className="rounded shadow-md"
    //   />
    //   <div className="absolute inset-0 border-[3px] z-[-1] rounded border-accent translate-x-6 translate-y-6 group-hover:translate-x-4 group-hover:translate-y-4 duration-150 hidden sm:block"></div>
    // </div>
  );
};

export default AuthorImage;
