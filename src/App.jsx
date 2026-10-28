import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Efek otomatis untuk mendeteksi scroll dan memunculkan animasi naik (reveal)
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Panggil sekali saat pertama load agar bagian atas langsung muncul

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const theme = {
    dark: isDarkMode,
    background: isDarkMode 
      ? 'linear-gradient(135deg, #062814 0%, #331808 50%, #0a1324 100%)' 
      : 'linear-gradient(135deg, #f0fdf4 0%, #fef3c7 50%, #f8fafc 100%)',
    textColor: isDarkMode ? '#ffffff' : '#0f172a',
    subText: isDarkMode ? '#94a3b8' : '#334155',
    cardBg: isDarkMode ? 'rgba(18, 38, 22, 0.75)' : '#ffffff',
    borderColor: isDarkMode ? 'rgba(34, 197, 94, 0.3)' : '#cbd5e1',
    textStroke: '0px rgba(0,0,0,0)'
  };

  return (
    <div style={{ background: theme.background, color: theme.textColor, minHeight: '100vh', position: 'relative' }}>
      
      {/* Background Bintang Melayang */}
      <div className="starry-bg">
        {[...Array(35)].map((_, i) => {
          const randomX = Math.random() * 100;
          const randomY = Math.random() * 100;
          const randomSize = Math.random() * 3 + 1;
          const randomDuration = Math.random() * 5 + 3;
          const randomDelay = Math.random() * 5;

          return (
            <div
              key={i}
              className="star"
              style={{
                left: `${randomX}%`,
                top: `${randomY}%`,
                width: `${randomSize}px`,
                height: `${randomSize}px`,
                animationDuration: `${randomDuration}s`,
                animationDelay: `${randomDelay}s`,
                background: isDarkMode ? '#ffffff' : '#1e293b',
                opacity: isDarkMode ? 0.8 : 0.4
              }}
            />
          );
        })}
      </div>

      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} theme={theme} />
      
      {/* Setiap section dibungkus class reveal agar muncul perlahan dari bawah ke atas saat scroll */}
      <div className="reveal">
        <Hero theme={theme} />
      </div>
      
      <div className="reveal">
        <About theme={theme} />
      </div>

      <div className="reveal">
        <Projects theme={theme} />
      </div>

      <div className="reveal">
        <Skills theme={theme} />
      </div>

      <div className="reveal">
        <Contact theme={theme} />
      </div>

      <div className="reveal">
        <Footer theme={theme} />
      </div>
    </div>
  );
}