import React, { useEffect, useState } from 'react';
import './App.css';

const ScrollEffectComponent = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const barra = document.getElementById("barra");
    const barra2 = document.getElementById("barra2");
    const pixeles = document.getElementById("pixeles");
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;


    const updateBarPositions = () => {
      const newScrollY = window.scrollY;

      if (newScrollY <= maxScroll) {
        barra.style.marginTop = `${newScrollY * 2}px`;
      }

      pixeles.innerHTML = newScrollY;
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
      <p className="barra" id="barra"></p>
      <p className="barra2" id="barra2"></p>
      <p id="pixeles"></p>
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

