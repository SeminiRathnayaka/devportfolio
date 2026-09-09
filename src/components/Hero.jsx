import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/hero.css';

const Hero = () => {
  const creativeRef = useRef(null);
  const noiseRef = useRef(null);

  useEffect(() => {
    // Animate the SVG turbulence for wavy effect
    if (noiseRef.current) {
      gsap.to(noiseRef.current, {
        attr: { baseFrequency: '0.015 0.08' },
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }

    // Entrance animation
    const tl = gsap.timeline({ delay: 0.2 });
    tl.from('.hero-creative', {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })
    .from('.hero-developer', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.5')
    .from('.hero-meta-item', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out'
    }, '-=0.4')
    .from('.scroll-indicator', {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.2')
    .from('.floating-badge', {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.7)'
    }, '-=0.4')
    .from('.copyright', {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.4');
  }, []);

  return (
    <section className="hero" id="home">
      {/* SVG Filter for wavy text */}
      <svg className="svg-filters">
        <defs>
          <filter id="wave-filter" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              ref={noiseRef}
              type="fractalNoise"
              baseFrequency="0.015 0.08"
              numOctaves="2"
              seed="3"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="15"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-creative" ref={creativeRef}>CREATIVE</span>
          <span className="hero-developer">DEVELOPER</span>
        </h1>

        <div className="hero-meta">
          <span className="hero-meta-item">VISUALS</span>
          <span className="hero-meta-item hero-meta-center">• • •</span>
          <span className="hero-meta-item">CODE</span>
          <span className="hero-meta-item hero-meta-center">• • •</span>
          <span className="hero-meta-item">EXPERIENCE</span>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span>SCROLL TO EXPLORE</span>
        </div>
      </div>

      <div className="copyright">©2026 waqas</div>

      <div className="floating-badge hover-target">
        <div className="badge-content">
          <span className="badge-text">LET'S WORK! LET'S WORK TOGETHER</span>
          <div className="badge-arrow">↗</div>
        </div>
        <span className="badge-location">BASED IN PAKISTAN</span>
      </div>
    </section>
  );
};

export default Hero;
