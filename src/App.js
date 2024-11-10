import './App.css';
import Header from './Components/Header/Header1';
import Extra from './Components/Extra/Extra1';
import Companies from './Components/Companies/Companies';
import Residencies from './Components/Residencies/Residencies';
import Value from './Components/Value/Value'; 
import { useState,useRef } from 'react';
import Contact from './Components/Contact/Contact';
import GetStarted from './Components/GetStarted/GetStarted';
import Footer from './Components/Footer/Footer';


function App() {
  const [btnText, setBtnText] = useState("dark");  // Initially set to "dark"

  const homeref = useRef(null);
  const residenciesRef = useRef(null);
  const valueRef = useRef(null);
  const contactref = useRef(null);
  const getstartedref = useRef(null);


  const toggleMode = () => {
    if (btnText === 'dark') {
      setBtnText('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.title = "Light Mode";
    } else {
      setBtnText('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      document.title = "Dark Mode";
    }
    //console.log(`New mode after toggle: ${btnText}`);
  };

  const scrollToSection = (sectionRef) => {
    const offset = 90; // Adjust this value to match the header height
    const elementPosition = sectionRef.current.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;
  
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };
  

  return (
    <div className="App">

      <Header 
        mode={btnText} 
        toggleMode={toggleMode} 
        scrollToHome={() => scrollToSection(homeref)}
        scrollToResidencies={() => scrollToSection(residenciesRef)}
        scrollToValue={() => scrollToSection(valueRef)}
        scrollToContact={() => scrollToSection(contactref)}
        scrollToGetStarted={() => scrollToSection(getstartedref)}
        logo={btnText === 'light' ? 'sun' : 'moon'}
      />

      <div ref={homeref}>
        <Extra mode={btnText} toggleMode={toggleMode} />
      </div>

      <div ref={residenciesRef}>
        <Companies mode={btnText} toggleMode={toggleMode} />
        <Residencies mode={btnText} toggleMode={toggleMode} />
      </div>

      <div ref={valueRef}>
        <Value mode={btnText} toggleMode={toggleMode} />
      </div>

      <div ref={contactref}>
        <Contact mode={btnText} toggleMode={toggleMode}/>
      </div>

      <div ref={getstartedref}>
        <GetStarted mode={btnText} toggleMode={toggleMode}/>
        <Footer mode={btnText} toggleMode={toggleMode}/>
      </div>

    </div>
  );
}

export default App;
