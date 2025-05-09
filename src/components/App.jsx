import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { getLangData } from '../mock/data';

function App() {  
  const [lang, setLang] = useState('en');
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  const handleLangChange = (newLang) => {
    const { heroData, aboutData, projectsData, contactData, footerData } =
      getLangData(newLang);

    setLang(newLang);
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      <LangToggle onChange={handleLangChange} />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
