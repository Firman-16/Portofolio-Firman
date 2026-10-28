export default function Navbar({ isDarkMode, toggleTheme, theme }) {
  // Warna teks menu navigasi diatur hijau (#22c55e), tebal, dan tanpa garis bawah
  const navLinkStyle = {
    color: '#22c55e', 
    fontWeight: '700', 
    textDecoration: 'none',
    WebkitTextStroke: theme.textStroke
  };

  return (
    <nav style={{ ...styles.nav, borderBottomColor: theme.borderColor }}>
      <h2 style={{ ...styles.logo, color: theme.textColor, WebkitTextStroke: theme.textStroke }}>
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
  nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.2rem 3rem', background: 'rgba(29, 18, 12, 0.9)', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 100, borderBottom: '1px solid' },
  logo: { fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '1px' },
  dot: { color: '#4ade80' },
  menu: { display: 'flex', gap: '2rem', listStyle: 'none', fontSize: '0.9rem', alignItems: 'center' },
  themeBtn: { background: 'linear-gradient(135deg, #22c55e 0%, #854d0e 100%)', color: '#fff', border: 'none', padding: '0.4rem 0.9rem', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.85rem' }
};