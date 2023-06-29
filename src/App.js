import { useEffect, useState } from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import { Navbar } from './components/Navbar';
import { DotMenu } from './components/DotMenu';
import { Landing } from './components/Landing';
import { Skills } from './components/Skills';

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, SetIsTopOfPage] = useState(true);
  const isAboveSmallScreens = useMediaQuery('(min-width: 1060px)');

  useEffect(() => {
    console.log(window.innerWidth);
    const handleScroll = () => {
      if (window.scrollY <= 90) {
        SetIsTopOfPage(true);
      } else {
        SetIsTopOfPage(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue ">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <div className="w-5/6 mx-auto md:h-full ">
        {isAboveSmallScreens && (
          <DotMenu
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
        <Skills />
      </div>
    </div>
  );
}

export default App;
