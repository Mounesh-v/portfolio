import React, { useEffect } from 'react';
import './input.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Skills from './Components/Skills';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    gsap.utils.toArray('.reveal-section').forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          },
        }
      );
    });
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <div className="reveal-section"><Skills /></div>
      <div className="reveal-section"><About /></div>
      <div className="reveal-section"><Project /></div>
      <div className="reveal-section"><Contact /></div>
    </>
  );
};

export default App;
