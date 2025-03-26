import { Footer, Navbar, Social } from '@/containers';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({ children, className = '' }: Props) => {
  return (
    <>
      <Navbar />
      <main
      
        className={ 
           `max-w-screen-lg mx-auto justify-items-center ${className}`}
      >
        {children}
      </main>
      <Footer />
      <Social />
      {/* <Email /> */}
      {/* this show email vertically on right side  */}
    </>
  );
};

export default Layout;
