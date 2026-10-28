export default function Projects({ theme }) {
  const projectList = [
    {
      id: 1,
      title: 'Aplikasi Manajemen Mahasiswa',
      desc: 'Aplikasi pengelolaan data mahasiswa interaktif berbasis web dengan fitur pencarian, statistik real-time, dan penyimpanan LocalStorage.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: '/project1.png'
    },
    {
      id: 2,
      title: 'Sistem Informasi Inventaris Barang',
      desc: 'Sistem manajemen inventaris berbasis Laravel 11 dan Blade templates, lengkap dengan Eloquent ORM dan fitur cetak PDF.',
      tech: ['PHP', 'Laravel', 'MySQL'],
      image: '/project2.png'
    },
    {
      id: 3,
      title: 'Aplikasi D-RENT',
      desc: 'Desain antarmuka aplikasi rental mobil modern yang interaktif dan ramah pengguna untuk kemudahan pemesanan kendaraan.',
      tech: ['Figma'],
      image: '/figma.png'
    }
  ];

  return (
    <section id="projects" style={styles.section}>
      <h2 style={{ ...styles.heading, WebkitTextStroke: theme.textStroke }}>My Projects</h2>
      <div style={styles.grid}>
        {projectList.map((project) => (
          <div key={project.id} className="floating-card" style={{ ...styles.card, background: theme.cardBg, borderColor: theme.borderColor }}>
            <div style={styles.imageWrapper}>
              <img src={project.image} alt={project.title} style={styles.projectImg} />
            </div>
            <div style={styles.content}>
              <h3 style={{ ...styles.projectTitle, color: theme.textColor, WebkitTextStroke: theme.textStroke }}>{project.title}</h3>
              <p style={{ ...styles.projectDesc, color: theme.subText, WebkitTextStroke: theme.subTextStroke }}>{project.desc}</p>
              <div style={styles.techContainer}>
                {project.tech.map((t, idx) => (
                  <span key={idx} style={{ ...styles.techBadge, background: theme.dark ? 'rgba(34, 197, 94, 0.2)' : 'rgba(34, 197, 94, 0.15)', color: theme.dark ? '#4ade80' : '#15803d' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: { padding: '5rem 2rem', maxWidth: '1100px', margin: '0 auto' },
  heading: { fontSize: '2rem', marginBottom: '2.5rem', textAlign: 'center', color: '#22c55e' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' },
  card: { borderRadius: '15px', border: '1px solid', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' },
  imageWrapper: { width: '100%', height: '180px', overflow: 'hidden', background: '#111' },
  projectImg: { width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' },
  content: { padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 },
  projectTitle: { fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.8rem' },
  projectDesc: { fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.2rem', flex: 1, fontWeight: '500' },
  techContainer: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' },
  techBadge: { fontSize: '0.75rem', padding: '0.3rem 0.8rem', borderRadius: '20px', fontWeight: '600' }
};