import { useEffect, useRef } from 'react';
import '../styles/cursor.css';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const followerRef = useRef(null);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const followerPos = useRef({ x: mouse.current.x, y: mouse.current.y });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const lerp = (start, end, factor) => start + (end - start) * factor;

    const animate = () => {
      followerPos.current.x = lerp(followerPos.current.x, mouse.current.x, 0.12);
      followerPos.current.y = lerp(followerPos.current.y, mouse.current.y, 0.12);

      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${followerPos.current.x}px, ${followerPos.current.y}px)`;
      }

      requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => {
      if (followerRef.current) {
        followerRef.current.classList.add('hovered');
      }
    };

    const handleMouseLeave = () => {
      if (followerRef.current) {
        followerRef.current.classList.remove('hovered');
      }
    };

    const handleHeroEnter = () => {
      if (followerRef.current) {
        followerRef.current.classList.add('hero-hover');
      }
    };

    const handleHeroLeave = () => {
      if (followerRef.current) {
        followerRef.current.classList.remove('hero-hover');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .hover-target');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Add hero hover listeners
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
      heroSection.addEventListener('mouseenter', handleHeroEnter);
      heroSection.addEventListener('mouseleave', handleHeroLeave);
    }

    // Observe DOM changes to add listeners to new elements
    const observer = new MutationObserver(() => {
      const newElements = document.querySelectorAll('a, button, .hover-target');
      newElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      if (heroSection) {
        heroSection.removeEventListener('mouseenter', handleHeroEnter);
        heroSection.removeEventListener('mouseleave', handleHeroLeave);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef}></div>
      <div className="cursor-follower" ref={followerRef}></div>
    </>
  );
};

export default CustomCursor;
