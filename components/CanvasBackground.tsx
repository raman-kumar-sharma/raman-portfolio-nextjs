"use client";
import { useEffect, useRef } from "react";

interface Props { theme: string; }

export default function CanvasBackground({ theme }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let width = 0, height = 0;
    let particles: any[] = [];
    let forestTrees: any[] = [];
    const mouse = { x: null as number | null, y: null as number | null };

    function resize() {
      width = canvas!.width = window.innerWidth;
      height = canvas!.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);
    const onMouse = (e: MouseEvent) => { mouse.x = e.x; mouse.y = e.y; };
    window.addEventListener("mousemove", onMouse);

    function initNeon() {
      particles = [];
      for (let i = 0; i < 90; i++)
        particles.push({ x: Math.random() * width, y: Math.random() * height, vx: (Math.random() - 0.5) * 1.5, vy: (Math.random() - 0.5) * 1.5, size: 2 });
    }
    function drawNeon() {
      ctx.fillStyle = "#050505"; ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "#0ff"; ctx.strokeStyle = "#0ff";
      particles.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();
        for (let j = i; j < particles.length; j++) {
          const dx = p.x - particles[j].x, dy = p.y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.lineWidth = 0.5; ctx.globalAlpha = 1 - dist / 120;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      });
    }

    function initZen() {
      particles = [];
      for (let i = 0; i < 70; i++)
        particles.push({ x: Math.random() * width, y: Math.random() * height, vx: (Math.random() - 0.5) * 0.6, vy: (Math.random() - 0.5) * 0.6, size: Math.random() * 4, phase: Math.random() * Math.PI * 2 });
    }
    function drawZen() {
      ctx.fillStyle = "#e9edc9"; ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "#606c38";
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy; p.phase += 0.05;
        if (p.x < 0) p.x = width; if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height; if (p.y > height) p.y = 0;
        const pulse = ((Math.sin(p.phase) + 1) / 2) * 0.5 + 0.5;
        ctx.globalAlpha = pulse;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();
        ctx.globalAlpha = 1;
      });
    }

    function initForest() {
      forestTrees = []; particles = [];
      for (let i = 0; i < 60; i++)
        particles.push({ x: Math.random() * width, y: Math.random() * height, vx: (Math.random() - 0.5) * 1.5, vy: Math.random() * 1 + 0.5, size: Math.random() * 6 + 4, angle: Math.random() * Math.PI * 2, spin: (Math.random() - 0.5) * 0.05, color: Math.random() > 0.5 ? "#2e7d32" : "#81c784" });
      const numTrees = Math.floor(width / 120);
      for (let i = 0; i < numTrees; i++)
        forestTrees.push({ x: (width / numTrees) * i + (Math.random() * 50 - 25), h: 100 + Math.random() * 80, color: Math.random() > 0.5 ? "#66bb6a" : "#d4e157", swaySpeed: 0.001 + Math.random() * 0.002, swayOffset: Math.random() * Math.PI * 2 });
    }
    function drawForest() {
      ctx.fillStyle = "#f1f8e9"; ctx.fillRect(0, 0, width, height);
      const time = Date.now();
      forestTrees.forEach((t) => {
        const sway = Math.sin(time * t.swaySpeed + t.swayOffset) * 15;
        ctx.save(); ctx.translate(t.x, height);
        ctx.strokeStyle = "#5d4037"; ctx.lineWidth = 8; ctx.lineCap = "round";
        ctx.beginPath(); ctx.moveTo(0, 0); ctx.quadraticCurveTo(sway * 0.5, -t.h / 2, sway, -t.h); ctx.stroke();
        ctx.fillStyle = t.color;
        ctx.beginPath(); ctx.arc(sway, -t.h, 35, 0, Math.PI * 2); ctx.arc(sway - 25, -t.h + 15, 25, 0, Math.PI * 2); ctx.arc(sway + 25, -t.h + 15, 25, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
      });
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy; p.angle += p.spin;
        if (p.y > height) p.y = -10; if (p.x > width) p.x = 0; if (p.x < 0) p.x = width;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.angle);
        ctx.fillStyle = p.color; ctx.beginPath(); ctx.ellipse(0, 0, p.size, p.size / 2, 0, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
      });
    }

    cancelAnimationFrame(animRef.current);
    particles = []; forestTrees = [];
    if (theme === "theme-neon") initNeon();
    else if (theme === "theme-zen") initZen();
    else if (theme === "theme-jungle") initForest();
    else ctx.clearRect(0, 0, width, height);

    function animate() {
      if (theme === "theme-neon") drawNeon();
      else if (theme === "theme-zen") drawZen();
      else if (theme === "theme-jungle") drawForest();
      animRef.current = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, [theme]);

  return <canvas ref={canvasRef} id="heroCanvas" />;
}
