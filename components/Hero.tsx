"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const subRef = useRef<HTMLParagraphElement>(null);

  // Typed text effect
  useEffect(() => {
    const el = subRef.current;
    if (!el) return;
    const fullText = el.innerHTML;
    let i = 0;
    el.innerHTML = '<span class="typed-cursor"></span>';
    function typeChar() {
      el!.innerHTML = fullText.slice(0, i) + '<span class="typed-cursor"></span>';
      if (i < fullText.length) { i++; setTimeout(typeChar, 18); }
    }
    setTimeout(typeChar, 600);
  }, []);

  // Animated counters
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const target = +(el.getAttribute("data-target") || 0);
          const suffix = el.getAttribute("data-suffix") || "";
          let current = 0;
          const step = Math.ceil(target / 60);
          const timer = setInterval(() => {
            current += step;
            if (current >= target) { current = target; clearInterval(timer); }
            el.textContent = current + suffix;
          }, 25);
          observer.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll(".counter").forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="hero">
      <div className="hero-badge" data-tooltip="Available for full-time / freelance 👨‍💻">
        Available for Hire
      </div>
      <h1 className="glitch-text">Raman Sharma</h1>
      <p className="hero-sub" ref={subRef}>
        Full Stack <strong>MERN Developer</strong> with <strong>3+ years</strong> of production experience.
        Building scalable backend APIs, real-time systems, job queues, and complete React frontends including admin panels.
        Proven <strong>10x query optimizations</strong> and <strong>99.9% uptime</strong> on 100K+ user systems.
      </p>

      <div className="stats-row">
        <div className="stat-item">
          <h2 className="counter" data-target="10" data-suffix="x">0x</h2>
          <p>Query Speedup</p>
        </div>
        <div className="stat-item">
          <h2 className="counter" data-target="100" data-suffix="K+">0</h2>
          <p>Daily Active Users</p>
        </div>
        <div className="stat-item">
          <h2>99.9%</h2>
          <p>Production Uptime</p>
        </div>
        <div className="stat-item">
          <h2 className="counter" data-target="3" data-suffix="+">0</h2>
          <p>Years Experience</p>
        </div>
      </div>

      <div className="btn-group" style={{ marginTop: "2.5rem" }}>
        <a href="#projects" className="btn-main"><i className="fas fa-briefcase" /> View Projects</a>
        <a href="/raman_sharma_resume.pdf" download className="btn-main"><i className="fas fa-download" /> Download CV</a>
        <a href="mailto:mr.ramansharma2000@gmail.com" className="btn-main"><i className="fas fa-envelope" /> Contact Me</a>
      </div>
    </section>
  );
}
