// import { useInView } from 'react-intersection-observer';

import { MotionContainer } from './MotionContainer';

export const Skills = () => {
  //
  const scalingVariant = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  const scalingTransition = {
    duration: 1.5,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
    scale: {
      type: 'spring',
      damping: 5,
      stiffness: 100,
      restDelta: 0.001,
    },
  };

  const movingVariant = {
    hidden: { opacity: 0, x: 120 },
    visible: { opacity: 1, x: 10 },
  };

  const headerVariant = {
    hidden: { opacity: 0, x: 120 },
    visible: { opacity: 1, x: 10 },
  };

  const skillsStyle =
    'font-playfair  font-bold border-2 rounded-full w-20 h-20 ss:w-24 ss:h-24 bg-slate-300 text-black  pt-7 text-center';

  return (
    <section id="skills" className="my-10 py-20 px-10 md:h-full">
      <MotionContainer
        className="flex flex-col items-center gap-20 md:flex-row md:justify-around py-10 px-10 "
        variants={headerVariant}
        transition={{ duration: 1 }}
      >
        <p className="text-4xl font-playfair text-center "> Tech Skills </p>
        <img
          alt="skills"
          src="assets/codingb.jpg"
          className="z-10 w-full max-w-[370px] lg:max-w-[450px] min-w-[300px] rounded-lg "
        />
      </MotionContainer>
      <div className=" py-16 xs:px-10 px-3 flex gap-6 justify-center flex-wrap   sm:w-[550px] mx-auto text-sm">
        <MotionContainer
          children="HTML"
          className={skillsStyle}
          variants={scalingVariant}
          transition={scalingTransition}
        />
        <MotionContainer
          children="CSS"
          className={skillsStyle}
          variants={scalingVariant}
          transition={scalingTransition}
        />
        <MotionContainer
          children="JavaScript"
          className={skillsStyle}
          variants={scalingVariant}
          transition={scalingTransition}
        />

        <MotionContainer
          children="React"
          className={skillsStyle}
          variants={movingVariant}
          transition={{ duration: 1, delay: 1 }}
        />
        <MotionContainer
          children="Redux"
          className={skillsStyle}
          variants={movingVariant}
          transition={{ duration: 1, delay: 1.2 }}
        />
        <MotionContainer
          children="Node"
          className={skillsStyle}
          variants={movingVariant}
          transition={{ duration: 1, delay: 1.4 }}
        />
      </div>
    </section>
  );
};
