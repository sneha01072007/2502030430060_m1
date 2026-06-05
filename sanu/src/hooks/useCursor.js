import { useEffect, useRef, useCallback } from "react";

export function useCursor() {
  const canvasRef = useRef(null);
  const sparklesRef = useRef([]);
  const goldParticlesRef = useRef([]);
  const animFrameRef = useRef(null);

  const sparkleColors = [
    "#FF1F8E", "#E040FB", "#FF69B4",
    "#FFB3D9", "#B8E4FF", "#E8B4FF", "#FFF4B8",
  ];
  const goldColors = [
    "#FFD700", "#FFC200", "#FFE066",
    "#FFFACD", "#D4AF37", "#FFB300",
  ];

  function drawStar(ctx, x, y, r, color, alpha, rot) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = color;
    ctx.translate(x, y);
    ctx.rotate(rot);
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      const outerR = r, innerR = r * 0.4;
      const outerAngle = (i * 4 * Math.PI) / 5 - Math.PI / 2;
      const innerAngle = ((i * 4 + 2) * Math.PI) / 5 - Math.PI / 2;
      if (i === 0)
        ctx.moveTo(
          Math.cos(outerAngle) * outerR,
          Math.sin(outerAngle) * outerR
        );
      else
        ctx.lineTo(
          Math.cos(outerAngle) * outerR,
          Math.sin(outerAngle) * outerR
        );
      ctx.lineTo(
        Math.cos(innerAngle) * innerR,
        Math.sin(innerAngle) * innerR
      );
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function drawHeart(ctx, x, y, size, color, alpha) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = color;
    ctx.translate(x, y);
    ctx.scale(size / 10, size / 10);
    ctx.beginPath();
    ctx.moveTo(0, -3);
    ctx.bezierCurveTo(0, -6, -5, -6, -5, -2);
    ctx.bezierCurveTo(-5, 2, 0, 5, 0, 7);
    ctx.bezierCurveTo(0, 5, 5, 2, 5, -2);
    ctx.bezierCurveTo(5, -6, 0, -6, 0, -3);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  const handleMouseMove = useCallback((e) => {
    // Move wand cursor
    const wand = document.getElementById("cursor-wand");
    const arrow = document.getElementById("cursor-arrow");
    const flower = document.getElementById("cursor-flower");
    if (wand) { wand.style.left = e.clientX + "px"; wand.style.top = e.clientY + "px"; }
    if (arrow) { arrow.style.left = e.clientX + "px"; arrow.style.top = e.clientY + "px"; }
    if (flower) { flower.style.left = e.clientX + "px"; flower.style.top = e.clientY + "px"; }

    const color = sparkleColors[Math.floor(Math.random() * sparkleColors.length)];
    const type = Math.random() > 0.4 ? "star" : Math.random() > 0.5 ? "heart" : "circle";
    sparklesRef.current.push({
      x: e.clientX + (Math.random() - 0.5) * 16,
      y: e.clientY + (Math.random() - 0.5) * 16,
      r: Math.random() * 5 + 2,
      color,
      type,
      vx: (Math.random() - 0.5) * 1.5,
      vy: -(Math.random() * 2 + 0.5),
      alpha: 0.9,
      rot: Math.random() * Math.PI * 2,
      life: 1.0,
    });
    if (sparklesRef.current.length > 120)
      sparklesRef.current.splice(0, sparklesRef.current.length - 120);

    // Gold trail
    const goldColor = goldColors[Math.floor(Math.random() * goldColors.length)];
    const goldType = Math.random() > 0.5 ? "star" : "circle";
    goldParticlesRef.current.push({
      x: e.clientX + (Math.random() - 0.5) * 10,
      y: e.clientY + (Math.random() - 0.5) * 10,
      r: Math.random() * 4 + 1.5,
      color: goldColor,
      type: goldType,
      vx: (Math.random() - 0.5) * 1.2,
      vy: -(Math.random() * 1.5 + 0.3),
      alpha: 0.85,
      life: 1.0,
      rot: Math.random() * Math.PI * 2,
    });
    if (goldParticlesRef.current.length > 80)
      goldParticlesRef.current.splice(0, goldParticlesRef.current.length - 80);
  }, []);

  const handleClick = useCallback((e) => {
    // Heart burst
    const heart = document.createElement("div");
    heart.className = "heart-burst";
    heart.innerHTML = "💖";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    document.body.appendChild(heart);

    // Click sparkle burst
    for (let i = 0; i < 12; i++) {
      goldParticlesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        r: Math.random() * 5 + 2,
        color: goldColors[Math.floor(Math.random() * goldColors.length)],
        type: Math.random() > 0.5 ? "star" : "heart",
        vx: (Math.random() - 0.5) * 5,
        vy: (Math.random() - 0.5) * 5,
        alpha: 1,
        life: 1.2,
        rot: Math.random() * Math.PI * 2,
      });
    }
    setTimeout(() => heart.remove(), 1000);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Animate sparkle trail
      for (let i = sparklesRef.current.length - 1; i >= 0; i--) {
        const s = sparklesRef.current[i];
        s.x += s.vx;
        s.y += s.vy;
        s.life -= 0.03;
        s.alpha = s.life * 0.9;
        s.rot += 0.08;
        s.r *= 0.985;
        if (s.life <= 0) { sparklesRef.current.splice(i, 1); continue; }
        if (s.type === "star") drawStar(ctx, s.x, s.y, s.r, s.color, s.alpha, s.rot);
        else if (s.type === "heart") drawHeart(ctx, s.x, s.y, s.r * 2, s.color, s.alpha);
        else {
          ctx.save();
          ctx.globalAlpha = s.alpha;
          ctx.fillStyle = s.color;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      // Animate gold trail
      for (let i = goldParticlesRef.current.length - 1; i >= 0; i--) {
        const g = goldParticlesRef.current[i];
        g.x += g.vx;
        g.y += g.vy;
        g.life -= 0.025;
        g.alpha = g.life * 0.85;
        g.rot += 0.06;
        g.r *= 0.98;
        if (g.life <= 0) { goldParticlesRef.current.splice(i, 1); continue; }
        if (g.type === "star") drawStar(ctx, g.x, g.y, g.r, g.color, g.alpha, g.rot);
        else if (g.type === "heart") drawHeart(ctx, g.x, g.y, g.r * 2, g.color, g.alpha);
        else {
          ctx.save();
          ctx.globalAlpha = g.alpha;
          ctx.fillStyle = g.color;
          ctx.beginPath();
          ctx.arc(g.x, g.y, g.r, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      animFrameRef.current = requestAnimationFrame(animate);
    }
    animate();

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [handleMouseMove, handleClick]);

  return { canvasRef };
}