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
        className={`mx-auto px-4 sm:px-6 md:px-26 lg:px-18 xl:px-0 max-w-screen-lg ${className}`}
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
