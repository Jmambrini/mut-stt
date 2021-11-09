import React, { useEffect, useState } from 'react';
import './App.scss';
import Routes from './routes/Routes';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function App() {
  const { width } = useWindowDimensions();
  if (width < 600) {
    return <div>Esse REA foi desenvolvido inicialmente para funcionar somente no Web</div>;
  }
  return (<Routes />);
}

export default App;
