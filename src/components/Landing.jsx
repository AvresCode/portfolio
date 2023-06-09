import useMediaQuery from '../hooks/useMediaQuery';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SocialLinks } from './SocialLinks';
import { MotionContainer } from './MotionContainer';

export const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  const textVariant = {
    hidden: { opacity: 0, x: -70 },
    visible: { opacity: 1, x: 20 },
  };
  console.log('width', window.innerWidth);
  return (
    <section
      id="home"
      className="md:flex md:justify-center md:items-center md:h-full gap-14 pt-10 my-10"
    >
      {/* IMAGE SECTION */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-30">
        {isAboveMediumScreens ? (
          <MotionContainer
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
          </MotionContainer>
        ) : (
          <img
            alt="me"
            src="assets/foto3.jpg"
            className="hover:filter hover:saturate-200 transition duration-700 z-10 w-full 
            max-w-[300px] md:max-w-[400px] rounded-t-[200px] my-10"
          />
        )}
      </div>
      {/* TEXT SECTION */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32 text-center">
        {/* HEADINGS */}
        <MotionContainer
          // className=""
          variants={textVariant}
          transition={{ duration: 1 }}
        >
          <p className="text-4xl font-playfair z-10 text-center ">
            Serveh {''}
            <span
              className="xs:relative xs:font-semibold z-20 sm:before:content-colorful
              before:absolute before:-left-[60px] before:-top-[110px] before:z-[-1]"
            >
              Saeedi
            </span>
          </p>

          <p className="mt-12 mb-10  text-center font-opensans md:text-start">
            I'm a career changer turned self-taught junior full-stack developer.
            I enjoy creating visually stunning websites and have a strong
            passion for learning. Motivated and driven, I constantly strive to
            enhance my skills and stay updated with the latest technologies.
          </p>
        </MotionContainer>
        {/* CALL TO ACTION */}
        <MotionContainer
          className="flex justify-center"
          transition={{ delay: 0.3, duration: 1 }}
          variants={textVariant}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.7 },
          }}
        >
          <AnchorLink
            className="rounded-md bg-gradient-rainblue p-1 "
            onClick={() => setSelectedPage('contact')}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-amber-300 transition duration-500 w-full h-full py-3 px-10 font-playfair">
              Let's talk!
            </div>
          </AnchorLink>
        </MotionContainer>
        <MotionContainer
          className="flex mt-5 justify-center"
          variants={textVariant}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <SocialLinks />
        </MotionContainer>
      </div>
    </section>
  );
};
