import { useEffect, useState } from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import { Navbar } from './components/Navbar';

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, SetIsTopOfPage] = useState(true);
  const isAboveSmallScreens = useMediaQuery('(min-width: 1060px)');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        SetIsTopOfPage(true);
      }
      if (window.screenY !== 0) {
        SetIsTopOfPage(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
}

export default App;
