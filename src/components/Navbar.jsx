export default function Navbar({ isDarkMode, toggleTheme, theme }) {
  const navLinkStyle = {
    color: '#22c55e', 
    fontWeight: '700', 
    textDecoration: 'none',
    cursor: 'pointer'
  };

  const logoColor = theme.textColor;

  return (
    <nav style={{ ...styles.nav, borderBottomColor: theme.borderColor, background: theme.dark ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.9)' }}>
      <h2 style={{ ...styles.logo, color: logoColor }}>
        Firman<span style={styles.dot}>.</span>
      </h2>
      <ul style={styles.menu}>
        <li><a href="#home" style={navLinkStyle}>HOME</a></li>
        <li><a href="#about" style={navLinkStyle}>ABOUT</a></li>
        <li><a href="#services" style={navLinkStyle}>SERVICE</a></li>
        <li><a href="#projects" style={navLinkStyle}>PROJECT</a></li>
        <li><a href="#skills" style={navLinkStyle}>SKILL</a></li>
        <li><a href="#contact" style={navLinkStyle}>CONTACT</a></li>
        <li>
          <button onClick={toggleTheme} style={styles.themeBtn}>
            {isDarkMode ? '🌙 Dark' : '☀️ Light'}
          </button>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: '1.2rem 4rem', 
    width: '100%',
    backdropFilter: 'blur(12px)', 
    position: 'fixed', 
    top: 0, 
    left: 0,
    zIndex: 9999, 
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)' 
  },
  logo: { fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '1px' },
  dot: { color: '#4ade80' },
  menu: { display: 'flex', gap: '2rem', listStyle: 'none', fontSize: '0.9rem', alignItems: 'center' },
  themeBtn: { background: 'linear-gradient(135deg, #22c55e 0%, #854d0e 100%)', color: '#fff', border: 'none', padding: '0.4rem 0.9rem', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.85rem' }
};