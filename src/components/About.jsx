import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/about.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll('.slide-from-left');
    elements.forEach((el, i) => {
      gsap.from(el, {
        x: -120,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        delay: i * 0.1
      });
    });
  }, []);

  const stats = [
    { label: 'BASED', value: 'PAKISTAN' },
    { label: 'FOCUS', value: 'WEB / MOTION' },
    { label: 'BUILDING WEBSITES', value: "1+ YEAR" },
    { label: 'MINDSET', value: 'ALWAYS LEARNING' },
    { label: 'PROJECTS DONE', value: '10+' },
    { label: 'EDUCATION', value: 'INTERMEDIATE' },
  ];

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about-header slide-from-left">
          <span className="micro-heading">WHO AM I?</span>
        </div>

        <div className="about-grid">
          <div className="about-left slide-from-left">
            <div className="portrait-container">
              <div className="portrait-placeholder">
                <span>Portrait Photo</span>
              </div>
            </div>
          </div>

          <div className="about-right">
            <h2 className="catchphrase slide-from-left">
              I BUILD <span className="gold">DIGITAL WORLDS</span> WHERE DESIGN MEETS <span className="gold">CODE.</span>
            </h2>

            <div className="about-bio-grid slide-from-left">
              <p className="bio">
                I'm <strong>Waqas</strong> — a creative frontend developer who enjoys turning ideas, interfaces and motion into experiences people remember.
              </p>
              <p className="bio">
                I care about the details most people don't notice: the rhythm of typography, the timing of an interaction, the way a transition feels and the tiny moments that make a digital product feel alive.
              </p>
            </div>

            <div className="stats-grid slide-from-left">
              {stats.map((stat, i) => (
                <div key={i} className="stat-item">
                  <span className="stat-label">{stat.label}</span>
                  <span className="stat-value">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section-number slide-from-left">
          <span>03</span> — EXPERTISE
        </div>
      </div>
    </section>
  );
};

export default About;
