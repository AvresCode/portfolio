import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';

export const Skills = () => {
  //   const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  return (
    <section id="skills" className="my-10 p-20  md:h-full">
      {/* HEADER & IMAGE */}

      <motion.div
        className="flex flex-col items-center gap-20 md:flex-row md:justify-between py-20 px-10 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -70 },
          visible: { opacity: 1, x: 20 },
        }}
      >
        <p className="text-4xl font-playfair  text-center "> Tech Skills </p>
        <img
          alt="skills"
          src="assets/codingb.jpg"
          className="z-10 w-full max-w-[350px] md:max-w-[470px] rounded-lg "
        />
      </motion.div>
      <div className="bg-slate-600 py-16 px-10 flex gap-6 justify-center flex-wrap">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: 'spring',
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className="font-playfair text-l font-bold border-2 rounded-full w-24 h-24 bg-slate-300 text-black  pt-7 text-center"
        >
          HTML
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: 'spring',
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className="font-playfair text-l font-bold border-2 rounded-full w-24 h-24 bg-slate-300 text-black  pt-7 text-center"
        >
          CSS
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: 'spring',
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className="font-playfair text-l font-bold border-2 rounded-full w-24 h-24 bg-slate-300 text-black  pt-7 text-center"
        >
          JavaScript
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: 'spring',
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className="font-playfair text-l font-bold border-2 rounded-full w-24 h-24 bg-slate-300 text-black  pt-7  text-center"
        >
          React
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: 'spring',
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className="font-playfair text-l font-bold border-2 rounded-full w-24 h-24 bg-slate-300 text-black  pt-7 text-center"
        >
          Redux
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: 'spring',
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className="font-playfair text-l font-bold border-2 rounded-full w-24 h-24 bg-slate-300 text-black  pt-7  text-center"
        >
          Node
        </motion.div>
      </div>
      {/* <img
        alt="skills"
        src="assets/css-icon.jpg"
        className="z-10 w-full max-w-[70px] "
      /> */}
    </section>
  );
};
