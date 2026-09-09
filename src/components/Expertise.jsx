import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/expertise.css';

gsap.registerPlugin(ScrollTrigger);

const Expertise = () => {
  const sectionRef = useRef(null);
  const floatingRef = useRef(null);

  useEffect(() => {
    // Animate floating icons
    if (floatingRef.current) {
      const icons = floatingRef.current.querySelectorAll('.floating-icon');
      icons.forEach((icon, i) => {
        gsap.to(icon, {
          y: `${(Math.random() - 0.5) * 40}`,
          x: `${(Math.random() - 0.5) * 30}`,
          rotation: (Math.random() - 0.5) * 20,
          duration: Math.random() * 3 + 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.3
        });
      });
    }
  }, []);

  const services = [
    {
      num: '01',
      title: 'Creative Development',
      desc: 'Building fast, responsive and scalable interfaces with modern frontend technologies.',
      icon: '</>',
      tags: ['HTML', 'CSS', 'JAVASCRIPT']
    },
    {
      num: '02',
      title: 'Motion & Interaction',
      desc: 'Turning static interfaces into expressive experiences through meaningful motion and interactions.',
      icon: '⚡',
      tags: ['GSAP', 'SCROLLTRIGGER', 'LENIS']
    },
    {
      num: '03',
      title: 'UI / UX Design',
      desc: 'Creating clean systems with strong hierarchy, usability and a distinctive visual personality.',
      icon: '⚛',
      tags: ['V/DESIGN', 'UI', 'PROTOTYPING']
    },
    {
      num: '04',
      title: 'Modern Web Apps',
      desc: 'Developing interactive applications with component based architecture and dynamic data.',
      icon: '◆',
      tags: ['REACT', 'APPS', 'FIREBASE']
    }
  ];

  const techStack = ['HTML', 'CSS', 'JAVASCRIPT', 'GSAP', 'REACT', 'LENIS'];

  return (
    <section className="expertise" id="expertise" ref={sectionRef}>
      <div className="floating-icons" ref={floatingRef}>
        <div className="floating-icon gsap" style={{ top: '20%', left: '30%' }}>G</div>
        <div className="floating-icon js" style={{ top: '40%', left: '45%' }}>JS</div>
        <div className="floating-icon react" style={{ top: '60%', left: '35%' }}>⚛</div>
        <div className="floating-icon html" style={{ top: '30%', left: '50%' }}>&lt;/&gt;</div>
        <div className="floating-icon css" style={{ top: '50%', left: '55%' }}>{'{ }'}</div>
        <div className="floating-icon firebase" style={{ top: '70%', left: '40%' }}>🔥</div>
        <div className="floating-icon lenis" style={{ top: '25%', left: '55%' }}>L</div>
      </div>

      <div className="container">
        <div className="expertise-header slide-from-left">
          <span className="micro-heading">02 — EXPERTISE</span>
        </div>

        <div className="expertise-grid">
          <div className="expertise-left">
            <h2 className="expertise-subtitle slide-from-left">
              MY <span className="gold">EXPERTISE</span>
            </h2>

            <p className="expertise-desc slide-from-left">
              I design and build digital experiences where <strong>design, code and motion</strong> work as one.
            </p>

            <p className="expertise-desc slide-from-left">
              From expressive interfaces to smooth interactions, I combine frontend engineering with visual design to create digital experiences that feel alive.
            </p>

            <div className="tech-stack slide-from-left">
              {techStack.map((tech, i) => (
                <span key={i} className="tech-pill">{tech}</span>
              ))}
            </div>
          </div>

          <div className="expertise-right">
            {services.map((service, i) => (
              <div
                key={i}
                className="service-card slide-from-left hover-target"
              >
                <span className="service-num">{service.num}</span>
                <div className="service-content">
                  <div className="service-header">
                    <h3 className="service-title">{service.title}</h3>
                    <span className="service-link">↗</span>
                  </div>
                  <p className="service-desc">{service.desc}</p>
                  <div className="service-tags">
                    {service.tags.map((tag, j) => (
                      <span key={j} className="service-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="service-icon-badge">
                  {service.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
