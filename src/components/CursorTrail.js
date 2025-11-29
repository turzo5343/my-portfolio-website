import { useEffect } from 'react';

const CursorTrail = () => {
  useEffect(() => {
    let cursorTrails = [];

    const createTrail = (e) => {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.left = e.clientX + 'px';
      trail.style.top = e.clientY + 'px';
      document.body.appendChild(trail);
      
      cursorTrails.push(trail);
      
      setTimeout(() => {
        trail.remove();
        cursorTrails = cursorTrails.filter(t => t !== trail);
      }, 500);
    };

    let lastX = 0;
    let lastY = 0;
    let throttleTimer;

    const handleMouseMove = (e) => {
      const distance = Math.sqrt(
        Math.pow(e.clientX - lastX, 2) + Math.pow(e.clientY - lastY, 2)
      );
      
      if (distance > 20) {
        if (!throttleTimer) {
          createTrail(e);
          lastX = e.clientX;
          lastY = e.clientY;
          throttleTimer = setTimeout(() => {
            throttleTimer = null;
          }, 50);
        }
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cursorTrails.forEach(trail => trail.remove());
      if (throttleTimer) clearTimeout(throttleTimer);
    };
  }, []);

  return null;
};

export default CursorTrail;