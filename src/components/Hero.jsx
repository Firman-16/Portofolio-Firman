import { useState, useEffect } from 'react';

export default function Hero({ theme }) {
  const fullText = "Haai, Saya Firman";
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Efek mengetik otomatis (Typing Effect)
  useEffect(() => {
    let index = 0;
    setDisplayedText(""); 
    setIsTypingComplete(false);

    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, 90);

    return () => clearInterval(typingInterval);
  }, []);

  // Style badge Welcome yang menyesuaikan Mode
  const welcomeStyle = {
    background: theme.dark ? 'rgba(34, 197, 94, 0.15)' : 'rgba(34, 197, 94, 0.2)', 
    color: theme.dark ? '#4ade80' : '#15803d', 
    padding: '0.4rem 1rem', 
    borderRadius: '20px', 
    fontSize: '0.85rem',
    border: theme.dark ? '1px solid rgba(74, 222, 128, 0.3)' : '1px solid rgba(34, 197, 94, 0.4)',
    fontWeight: '700',
    display: 'inline-block',
  };

  return (
    <section id="home" style={styles.hero}>
      <div style={styles.container}>
        <div style={styles.textPart}>
          <div className="fade-in-element delay-1">
            <span style={welcomeStyle} className="floating-card">Welcome</span>
          </div>

          {/* Judul dengan Efek Mengetik & Warna Teks Dinamis */}
          <h1 className="fade-in-element delay-2" style={{ ...styles.title, color: theme.textColor }}>
            {displayedText.includes("Firman") ? (
              <>
                {displayedText.replace("Firman", "")}
                <span style={styles.gradientText}>Firman</span>
              </>
            ) : (
              displayedText
            )}
            {/* Kursor kedip-kedip saat mengetik */}
            {!isTypingComplete && <span style={styles.cursor}>|</span>}
          </h1>

          <p className="fade-in-element delay-3" style={{ ...styles.subtitle, color: theme.subText }}>
            Saya seorang pengembang web yang berfokus membangun website modern, interaktif, dan efisien dengan keahlian di bidang HTML, CSS, JavaScript, dan Laravel.
          </p>

          <div className="fade-in-element delay-4" style={styles.statsContainer}>
            <div className="floating-card" style={{ ...styles.statBox, background: theme.cardBg, borderColor: theme.borderColor }}>
              <h3 style={styles.statNum}>10+</h3>
              <p style={{ ...styles.statText, color: theme.subText }}>Project Completed</p>
            </div>
            <div className="floating-card" style={{ ...styles.statBox, background: theme.cardBg, borderColor: theme.borderColor }}>
              <h3 style={styles.statNum}>1+</h3>
              <p style={{ ...styles.statText, color: theme.subText }}>Years Experience</p>
            </div>
          </div>

          <div className="fade-in-element delay-4" style={styles.btnGroup}>
            <a href="#about" style={styles.primaryBtn} className="interactive-btn">Learn More →</a>
            <a href="#contact" style={{ ...styles.secondaryBtn, color: theme.textColor, borderColor: theme.borderColor }} className="interactive-btn">Hire Me</a>
          </div>
        </div>

        <div className="fade-in-element delay-3" style={styles.imagePart}>
          <div className="floating-profile" style={styles.imageWrapper}>
            <img src="/profil.png" alt="Foto Profil Firman" style={styles.profileImg} />
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: { padding: '4rem 4rem', width: '100%', margin: '0 auto' },
  container: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '3rem', flexWrap: 'wrap', width: '100%' },
  textPart: { flex: 1, minWidth: '300px' },
  imagePart: { display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: '280px' },
  imageWrapper: { width: '280px', height: '280px', borderRadius: '50%', padding: '6px', background: 'linear-gradient(135deg, #22c55e 0%, #b45309 100%)', cursor: 'pointer' },
  profileImg: { width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', display: 'block' },
  title: { fontSize: '3rem', margin: '1rem 0', fontWeight: 'bold', minHeight: '3.6rem', transition: 'color 0.3s ease' },
  gradientText: { background: 'linear-gradient(90deg, #22c55e 0%, #d97706 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
  cursor: { color: '#22c55e', fontWeight: 'normal', animation: 'blink 0.8s infinite' },
  subtitle: { fontSize: '1rem', marginBottom: '2rem', lineHeight: '1.7', fontWeight: '500', transition: 'color 0.3s ease' },
  statsContainer: { display: 'flex', gap: '1.5rem', marginBottom: '2.5rem', flexWrap: 'wrap' },
  statBox: { padding: '1rem 1.5rem', borderRadius: '10px', border: '1px solid', cursor: 'pointer', transition: 'all 0.3s ease' },
  statNum: { color: '#22c55e', fontSize: '1.5rem', fontWeight: 'bold' },
  statText: { fontSize: '0.8rem', fontWeight: '600', transition: 'color 0.3s ease' },
  btnGroup: { display: 'flex', gap: '1rem', flexWrap: 'wrap' },
  primaryBtn: { padding: '0.8rem 1.8rem', background: 'linear-gradient(135deg, #22c55e 0%, #b45309 100%)', color: '#fff', fontWeight: 'bold', borderRadius: '8px', boxShadow: '0 4px 15px rgba(34, 197, 94, 0.3)', textDecoration: 'none' },
  secondaryBtn: { padding: '0.8rem 1.8rem', background: 'transparent', fontWeight: 'bold', borderRadius: '8px', border: '1px solid', textDecoration: 'none', transition: 'all 0.3s ease' }
};