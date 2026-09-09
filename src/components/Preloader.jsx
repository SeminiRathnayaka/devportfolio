import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import '../styles/preloader.css';

const Preloader = ({ onComplete }) => {
  const preloaderRef = useRef(null);
  const counterRef = useRef(null);
  const helloSvgRef = useRef(null);
  const drawTextRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let counterInterval;
    let timeoutId;

    // Animate counter
    counterInterval = setInterval(() => {
      setCount(prev => {
        if (prev >= 100) {
          clearInterval(counterInterval);
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 2;
        return Math.min(prev + increment, 100);
      });
    }, 35);

    // Exit preloader after counter reaches 100
    timeoutId = setTimeout(() => {
      clearInterval(counterInterval);
      setCount(100);

      // SVG Stroke Drawing Timeline for "hello"
      const tl = gsap.timeline({
        onComplete: () => {
          // Slide preloader away after drawing finishes
          gsap.to(preloaderRef.current, {
            yPercent: -100,
            duration: 0.8,
            ease: 'power4.inOut',
            onComplete: () => {
              if (onComplete) onComplete();
            }
          });
        }
      });

      // 1. Hide the counter instantly and reveal the SVG container
      tl.to(counterRef.current, { opacity: 0, duration: 0.1 })
        .set(helloSvgRef.current, { opacity: 1 })
        // 2. Draw the stroke ("hello" is written out)
        .to(drawTextRef.current, {
          strokeDashoffset: 0,
          duration: 1,
          ease: 'power2.inOut'
        })
        // 3. Fill in the text solid after drawing
        .to(drawTextRef.current, {
          fill: '#d4af37',
          duration: 0.4
        })
        // 4. Brief pause before clearing
        .to(helloSvgRef.current, { opacity: 0, duration: 0.2, delay: 0.2 });
    }, 3200);

    return () => {
      clearInterval(counterInterval);
      clearTimeout(timeoutId);
    };
  }, [onComplete]);

  return (
    <div className="preloader" ref={preloaderRef}>
      <div className="counter" ref={counterRef}>{count}%</div>
      
      {/* SVG Text Draw Element */}
      <svg 
        className="hello-svg" 
        ref={helloSvgRef}
        viewBox="0 0 400 150"
      >
        <text 
          x="50%" 
          y="60%" 
          dominantBaseline="middle" 
          textAnchor="middle" 
          className="draw-text"
          ref={drawTextRef}
        >
          hello
        </text>
      </svg>

      <div className="preloader-sub">loading digital space</div>
    </div>
  );
};

export default Preloader;
