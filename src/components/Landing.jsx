import useMediaQuery from '../hooks/useMediaQuery';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

export const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10 "
    >
      {/* IMAGE SECTION */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-10 
          before:-left-10 before:rounded-t-[400px] before:w-full before:max-w-[400px] 
          before:h-full before:border-4 before:border-slate-400 before:z-[-1]"
          >
            <img
              alt="me"
              src="assets/foto3.jpg"
              className="hover:filter hover:contrast-150 transition duration-500 z-10 w-full 
              max-w-[300px] md:max-w-[400px] rounded-t-[400px]"
            />
          </div>
        ) : (
          <img
            alt="me"
            src="assets/foto3.jpg"
            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full 
            max-w-[300px] md:max-w-[400px] rounded-t-[200px]"
          />
        )}
      </div>
    </section>
  );
};
