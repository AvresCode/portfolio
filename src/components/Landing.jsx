import useMediaQuery from '../hooks/useMediaQuery';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

export const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  return (
    <section
      id="home"
      className="md:flex md:justify-center md:items-center md:h-full gap-14 py-10"
    >
      {/* IMAGE SECTION */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-3">
        {isAboveMediumScreens ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: -100 },
              visible: { opacity: 1, y: 0 },
            }}
            className="relative z-0 ml-20 before:absolute before:-top-10 
          before:-left-10  before:rounded-t-[400px] before:w-full before:max-w-[400px] 
          before:h-full before:border-4 before:border-slate-400 before:z-[-1] 
          hover:before:-top-20 hover:before:-left-20 "
          >
            <img
              alt="me"
              src="assets/foto3.jpg"
              className="hover:filter hover:contrast-150 transition duration-500 z-10 w-full 
              max-w-[280px] md:max-w-[350px] rounded-t-[400px]"
            />
          </motion.div>
        ) : (
          <img
            alt="me"
            src="assets/foto3.jpg"
            className="hover:filter hover:saturate-200 transition duration-700 z-10 w-full 
            max-w-[300px] md:max-w-[400px] rounded-t-[200px]"
          />
        )}
      </div>
      {/* TEXT SECTION */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -70 },
            visible: { opacity: 1, x: 20 },
          }}
        >
          <p className="text-4xl font-playfair z-10 text-center md:text-start">
            Serveh {''}
            <span
              className="xs:relative xs:font-semibold z-20 sm:before:content-colorful
              before:absolute before:-left-[60px] before:-top-[110px] before:z-[-1]"
            >
              Saeedi
            </span>
          </p>

          <p className="mt-12 mb-10  text-center font-opensans md:text-start">
            Adipiscing arcu, in aliquam fringilla cursus. Elit arcu elementum
            viverra malesuada sem ac faucibus dolor. Sagittis scelerisque.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
