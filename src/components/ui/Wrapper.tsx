import { motion, MotionProps } from 'framer-motion';
import { ElementType, HTMLAttributes, ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  id?: string;
  animate?: boolean;
}

const Wrapper = ({
  children,
  as = 'section',
  className = '',
  id = '',
  animate = true,
  ...rest
}: Props & MotionProps) => {
  if (animate) {
    const MotionTag = motion(as);

    return (
      <MotionTag id={id} className={`md:py-16 ${className}`} {...rest}>
        {children}
      </MotionTag>
    );
  }

  if (as === 'section') {
    return (
      <motion.section
        id={id}
        className={`md:py-10 ${className}`}
        {...rest}
      >
        {children}
      </motion.section>
    );
  }

  const CustomTag = `${as}` as ElementType;

  return (
    <CustomTag id={id} className={`${className}`} {...rest}>
      {children}
    </CustomTag>
  );
};

export default Wrapper;
