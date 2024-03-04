import React, { useEffect, useState } from 'react';
import './App.css';

const ScrollEffectComponent = () => {
  const [scrollY, setScrollY] = useState(0);
  const [barMarginTop, setBarMarginTop] = useState(0);

  useEffect(() => {
    const updateBarPositions = () => {
      const newScrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const redBarBottom = maxScroll - document.getElementById("barra").offsetHeight;

      if (newScrollY <= 500 && newScrollY <= maxScroll) {
        const newMarginTop = Math.min(newScrollY * 2.24, redBarBottom);
        setBarMarginTop(`${newMarginTop}px`);
      }

      setScrollY(newScrollY);
    };

    document.addEventListener("scroll", updateBarPositions);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("scroll", updateBarPositions);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array means this effect runs once, similar to componentDidMount

  return (
    <div>
      <p className="barra" id="barra" style={{ marginTop: barMarginTop }}></p>
      <p className="barra2" id="barra2"></p>
      <p id="pixeles">{scrollY}</p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <ScrollEffectComponent />
    </div>
  );
}

export default App;
