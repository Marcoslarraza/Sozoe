import { useEffect, useRef, useState } from 'react';

export default function ScrollWaves() {
  const svgRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const animRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      let time = 0;
      function animate() {
        if (svgRef.current) {
          const paths = svgRef.current.querySelectorAll('.wave-path');
          paths.forEach((path, i) => {
            const speed = 15 + i * 8;
            const direction = i % 2 === 0 ? 1 : -1;
            const x = Math.sin(time * 0.001 * (i + 1) * 0.5) * speed * direction;
            path.style.transform = `translateX(${x}px)`;
          });
        }
        time += 16;
        animRef.current = requestAnimationFrame(animate);
      }
      animate();
      return () => cancelAnimationFrame(animRef.current);
    } else {
      let ticking = false;
      function onScroll() {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(() => {
            const scroll = window.scrollY;
            if (svgRef.current) {
              const paths = svgRef.current.querySelectorAll('.wave-path');
              paths.forEach((path, i) => {
                const speed = 0.1 + i * 0.06;
                const direction = i % 2 === 0 ? 1 : -1;
                path.style.transform = `translateX(${scroll * speed * direction}px)`;
              });
            }
            ticking = false;
          });
        }
      }
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }
  }, [isMobile]);

  return (
    <div className="scroll-waves">
      <svg
        ref={svgRef}
        className="scroll-waves__svg"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#134e4a" />
            <stop offset="50%" stopColor="#065f46" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>
          <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="50%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#6ee7b7" />
          </linearGradient>
          <linearGradient id="g3" x1="0%" y1="50%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="50%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>
          <linearGradient id="g4" x1="100%" y1="0%" x2="0%" y2="50%">
            <stop offset="0%" stopColor="#6ee7b7" />
            <stop offset="50%" stopColor="#a7f3d0" />
            <stop offset="100%" stopColor="#d1fae5" />
          </linearGradient>
          <linearGradient id="g5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#047857" />
            <stop offset="50%" stopColor="#059669" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>

        <path
          className="wave-path"
          d="M-200 720 C 100 620, 300 580, 500 640 C 700 700, 900 620, 1100 660 C 1300 700, 1500 600, 1700 650 L 1700 950 L -200 950 Z"
          fill="url(#g1)"
          opacity="0.18"
        />
        <path
          className="wave-path"
          d="M-100 740 C 150 660, 350 630, 600 680 C 850 730, 1000 650, 1200 690 C 1400 730, 1550 640, 1700 680 L 1700 950 L -100 950 Z"
          fill="url(#g5)"
          opacity="0.15"
        />
        <path
          className="wave-path"
          d="M-300 700 C 0 630, 200 600, 450 650 C 700 700, 850 630, 1050 660 C 1250 690, 1450 610, 1650 650 L 1650 950 L -300 950 Z"
          fill="url(#g3)"
          opacity="0.14"
        />
        <path
          className="wave-path"
          d="M-150 750 C 100 680, 350 660, 600 700 C 850 740, 1050 670, 1250 700 C 1450 730, 1600 660, 1750 690 L 1750 950 L -150 950 Z"
          fill="url(#g2)"
          opacity="0.12"
        />
        <path
          className="wave-path"
          d="M-250 730 C 50 670, 250 640, 500 670 C 750 700, 950 640, 1150 670 C 1350 700, 1500 630, 1700 660 L 1700 950 L -250 950 Z"
          fill="url(#g4)"
          opacity="0.1"
        />
      </svg>
    </div>
  );
}
