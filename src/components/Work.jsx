import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/work.css';

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const sectionRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    // Create floating particles
    if (particlesRef.current) {
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.width = `${Math.random() * 16 + 6}px`;
        particle.style.height = particle.style.width;
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        particlesRef.current.appendChild(particle);

        // Animate each particle
        gsap.to(particle, {
          y: `${(Math.random() - 0.5) * 100}`,
          x: `${(Math.random() - 0.5) * 60}`,
          duration: Math.random() * 4 + 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: Math.random() * 2
        });
      }
    }

    // Ticker animation
    const ticker = sectionRef.current.querySelector('.ticker-content');
    if (ticker) {
      gsap.to(ticker, {
        xPercent: -50,
        duration: 20,
        repeat: -1,
        ease: 'none'
      });
    }
  }, []);

  const projects = [
    {
      num: '01',
      title: 'Creative Portfolio',
      subtitle: 'Graphic Design & Portfolio Website',
      desc: 'A modern, breathing portfolio designed for a contemporary creative showcase.',
      tags: ['UI/UX', 'GSAP'],
      color: '#e8e4dc'
    },
    {
      num: '02',
      title: 'Summer Essentials',
      subtitle: 'E-commerce Website',
      desc: 'A lifestyle fashion e-commerce platform with clean minimalist aesthetics.',
      tags: ['React.js', 'CSS'],
      color: '#ddd8d0',
      hasButton: true
    },
    {
      num: '03',
      title: 'Creative Clothing Website',
      subtitle: 'GAZU - A Film Collection 2026',
      desc: 'A clothing brand website featuring bold typography and immersive product showcases.',
      tags: ['HTML', 'GSAP'],
      color: '#d4d0c8',
      largeTitle: 'GAZU'
    },
    {
      num: '04',
      title: 'Luxury Timepieces',
      subtitle: 'E-commerce Watch Concept',
      desc: 'A dark luxury watch e-commerce concept highlighting precision engineering and minimal UI.',
      tags: ['UI/UX', 'JavaScript'],
      color: '#e0dcd4'
    },
    {
      num: '05',
      title: 'Premium Headphones',
      subtitle: 'Product Landing Page',
      desc: 'An audio product landing page with immersive visuals and smooth interactions.',
      tags: ['CSS', 'GSAP'],
      color: '#d8d4cc'
    },
    {
      num: '06',
      title: 'Library Management System',
      subtitle: 'Dashboard Interface',
      desc: 'A dashboard-style interface showing system statistics with interactive data panels.',
      tags: ['React.js', 'Firebase'],
      color: '#dcd8d0',
      hasDashboard: true
    }
  ];

  const tickerItems = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Lenis', 'GSAP', 'Firebase'];
  const categories = ['UI/UX', 'INTERACTIVE WEB', 'CREATIVE DEVELOPMENT', 'MOTION DESIGN'];

  return (
    <section className="work" id="work" ref={sectionRef}>
      <div className="work-ticker">
        <div className="ticker-content">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="ticker-item">{item} •</span>
          ))}
        </div>
      </div>

      <div className="work-header">
        <div className="work-particles" ref={particlesRef}></div>
        <div className="scroll-hint slide-from-left">
          <span>SCROLL TO EXPLORE MY</span>
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
        </div>
        <h2 className="work-title slide-from-left">WORK</h2>
      </div>

      <div className="filter-pills slide-from-left">
        {categories.map((cat, i) => (
          <button key={i} className={`pill ${i === 0 ? 'active' : ''}`}>{cat}</button>
        ))}
      </div>

      <div className="projects-container">
        {projects.map((project, i) => (
          <div key={i} className="project-card slide-from-left hover-target">
            <div className="card-img-wrapper" style={{ background: project.color }}>
              {project.largeTitle && (
                <div className="large-bg-title">{project.largeTitle}</div>
              )}
              {project.hasDashboard ? (
                <div className="dashboard-mock">
                  <div className="dashboard-stats">
                    <div className="stat-box">
                      <span className="stat-num">11</span>
                      <span className="stat-label">Books</span>
                    </div>
                    <div className="stat-box">
                      <span className="stat-num">0</span>
                      <span className="stat-label">Registered Users</span>
                    </div>
                    <div className="stat-box">
                      <span className="stat-num">7</span>
                      <span className="stat-label">Borrow / Return</span>
                    </div>
                  </div>
                  <button className="add-btn">Add New Books</button>
                </div>
              ) : (
                <div className="placeholder-text">Project Image</div>
              )}
            </div>
            <div className="card-info">
              <div className="card-meta">
                <span className="project-num">{project.num} — 06</span>
                <span className="project-cat">{project.subtitle}</span>
              </div>
              <h3 className="project-name">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tags">
                {project.tags.map((tag, j) => (
                  <span key={j} className="tag">{tag}</span>
                ))}
              </div>
              {project.hasButton && (
                <button className="explore-btn hover-target">
                  EXPLORE NOW
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
