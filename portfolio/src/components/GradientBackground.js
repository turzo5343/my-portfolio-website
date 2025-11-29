import React, { useEffect, useRef } from 'react';

const GradientBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    document.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      // Smooth mouse tracking
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      const gradient = ctx.createRadialGradient(
        mouseX, mouseY, 0,
        mouseX, mouseY, canvas.width / 2
      );

      const time = Date.now() * 0.0005;
      const hue1 = (time * 20) % 360;
      const hue2 = (time * 30 + 60) % 360;
      const hue3 = (time * 40 + 120) % 360;

      gradient.addColorStop(0, `hsla(${hue1}, 70%, 60%, 0.1)`);
      gradient.addColorStop(0.5, `hsla(${hue2}, 70%, 60%, 0.05)`);
      gradient.addColorStop(1, `hsla(${hue3}, 70%, 60%, 0.02)`);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

export default GradientBackground;