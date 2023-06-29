import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export const MotionContainer = ({
  className,
  variants,
  transition,
  children,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const mainControl = useAnimation();

  useEffect(() => {
    if (inView) {
      console.log(inView);
      mainControl.start('visible');
    } else {
      mainControl.start('hidden');
    }
  }, [mainControl, inView]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={mainControl}
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};
