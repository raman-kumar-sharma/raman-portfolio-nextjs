"use client";
import { useEffect } from "react";

export default function GlobalEffects() {
  useEffect(() => {
    // Scroll reveal
    document.querySelectorAll(".card, .section-title, .stats-row").forEach((el) => el.classList.add("reveal"));
    const revealObs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); revealObs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => revealObs.observe(el));

    // 3D card tilt
    function applyTilt(card: Element) {
      card.addEventListener("mousemove", (ev) => {
        const e = ev as MouseEvent;
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left, y = e.clientY - rect.top;
        const cx = rect.width / 2, cy = rect.height / 2;
        const rX = ((y - cy) / cy) * -10, rY = ((x - cx) / cx) * 10;
        (card as HTMLElement).style.transform = `perspective(800px) rotateX(${rX}deg) rotateY(${rY}deg) translateY(-6px)`;
        (card as HTMLElement).style.boxShadow = "0 20px 40px rgba(0,0,0,0.4), 0 0 25px var(--accent-glow)";
        card.classList.add("tilt-active");
      });
      card.addEventListener("mouseleave", () => {
        (card as HTMLElement).style.transform = "";
        (card as HTMLElement).style.boxShadow = "";
        card.classList.remove("tilt-active");
      });
    }
    document.querySelectorAll(".card").forEach(applyTilt);

    // Click burst
    const onBurst = (e: MouseEvent) => {
      for (let i = 0; i < 8; i++) {
        const p = document.createElement("div");
        p.className = "burst-particle";
        const angle = (i / 8) * Math.PI * 2;
        const dist = 30 + Math.random() * 30;
        p.style.left = e.clientX + "px";
        p.style.top = e.clientY + "px";
        p.style.setProperty("--tx", Math.cos(angle) * dist + "px");
        p.style.setProperty("--ty", Math.sin(angle) * dist + "px");
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 600);
      }
    };
    document.addEventListener("click", onBurst);

    // Audio
    const hoverSound = new Audio("/hover.mp3");
    const clickSound = new Audio("/click.mp3");
    hoverSound.volume = 0.2; clickSound.volume = 0.4;
    const playClick = () => { clickSound.currentTime = 0; clickSound.play().catch(() => {}); };
    document.querySelectorAll("a, button, .card, .theme-opt, .tags span, .hero-badge").forEach((el) => el.addEventListener("click", playClick));

    // Title blur
    const docTitle = document.title;
    const onBlur = () => { document.title = "⚠️ System Halted | Come Back!"; };
    const onFocus = () => { document.title = docTitle; };
    window.addEventListener("blur", onBlur);
    window.addEventListener("focus", onFocus);

    // Copy email
    const showToast = (msg: string) => (window as any).showToast?.(msg);
    document.querySelectorAll("a[href='mailto:mr.ramansharma2000@gmail.com']").forEach((el) => {
      el.addEventListener("click", () => {
        navigator.clipboard.writeText("mr.ramansharma2000@gmail.com").then(() => showToast("📋 Email copied to clipboard!")).catch(() => {});
      });
    });

    // Keyboard shortcuts
    const onKey = (e: KeyboardEvent) => {
      if (["INPUT", "TEXTAREA"].includes((document.activeElement as HTMLElement)?.tagName)) return;
      const shortcuts: Record<string, () => void> = {
        g: () => window.open("https://github.com/raman-kumar-sharma", "_blank", "noopener,noreferrer"),
        l: () => window.open("https://www.linkedin.com/in/raman-sharma-a5946aa4/", "_blank", "noopener,noreferrer"),
        c: () => { navigator.clipboard.writeText("mr.ramansharma2000@gmail.com"); showToast("📋 Email copied!"); },
        t: () => { document.getElementById("terminal-section")?.scrollIntoView({ behavior: "smooth" }); setTimeout(() => (document.getElementById("terminalInput") as HTMLInputElement)?.focus(), 600); },
        h: () => window.scrollTo({ top: 0, behavior: "smooth" }),
        "?": () => showToast("⌨️  G=GitHub  L=LinkedIn  C=Copy Email  T=Terminal  H=Home"),
      };
      const key = e.key.toLowerCase();
      if (shortcuts[key]) {
        shortcuts[key]();
        if (key !== "?") showToast(({ g: "🐙 Opening GitHub...", l: "💼 Opening LinkedIn...", c: "📋 Email copied!", t: "💻 Opening Terminal...", h: "🏠 Going Home..." } as any)[key]);
      }
    };
    document.addEventListener("keydown", onKey);

    // Shortcut hint once
    if (!localStorage.getItem("shortcuts-shown")) {
      setTimeout(() => { showToast("⌨️ Press ? to see keyboard shortcuts"); localStorage.setItem("shortcuts-shown", "1"); }, 3000);
    }

    return () => {
      document.removeEventListener("click", onBurst);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("focus", onFocus);
      revealObs.disconnect();
    };
  }, []);

  return null;
}
