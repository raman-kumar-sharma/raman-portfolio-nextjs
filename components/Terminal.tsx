"use client";
import { useRef, useState, useCallback } from "react";

const COMMANDS: Record<string, () => string | null> = {
  help: () => `<span class="t-text">Available commands:<br>
&nbsp;&nbsp;<span class="t-cmd">whoami</span> &nbsp;&nbsp;&nbsp;— About me<br>
&nbsp;&nbsp;<span class="t-cmd">skills</span> &nbsp;&nbsp;&nbsp;— Technical skills<br>
&nbsp;&nbsp;<span class="t-cmd">experience</span> — Work history<br>
&nbsp;&nbsp;<span class="t-cmd">projects</span> &nbsp;&nbsp;— Featured projects<br>
&nbsp;&nbsp;<span class="t-cmd">contact</span> &nbsp;&nbsp;&nbsp;— Get in touch<br>
&nbsp;&nbsp;<span class="t-cmd">github</span> &nbsp;&nbsp;&nbsp;&nbsp;— GitHub profile<br>
&nbsp;&nbsp;<span class="t-cmd">clear</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— Clear terminal</span>`,

  whoami: () => `<span class="t-text"><strong>Raman Sharma</strong> — Full Stack MERN Developer<br>
📍 Jaipur, Rajasthan<br>
⚡ 3+ years building scalable APIs, real-time systems & React frontends<br>
🚀 10x query optimizations | 99.9% uptime | 100K+ user systems<br>
✅ Available for full-time / freelance roles</span>`,

  skills: () => `<span class="t-text"><strong>Backend:</strong> Node.js, Express.js, GraphQL, Socket.IO, BullMQ, Redis Pub/Sub<br>
<strong>Frontend:</strong> React.js, React Vite, Redux Toolkit, Tailwind CSS<br>
<strong>Databases:</strong> MongoDB, MySQL, PostgreSQL, Redis<br>
<strong>Cloud:</strong> AWS S3, CloudFront, Docker<br>
<strong>Auth:</strong> JWT, OAuth2, RBAC, Rate Limiting</span>`,

  experience: () => `<span class="t-text"><strong>Nimble App Genie</strong> — MERN Stack Developer (June 2024 – Present)<br>
&nbsp;&nbsp;▹ 10x MongoDB query optimization (2.5s → 250ms)<br>
&nbsp;&nbsp;▹ 100K+ daily active users<br>
&nbsp;&nbsp;▹ Full-stack apps with React admin dashboards<br><br>
<strong>Fzeetechz Pvt Ltd</strong> — Node.js Developer (Aug 2023 – June 2024)<br>
&nbsp;&nbsp;▹ WebRTC live streaming, LMS, fintech APIs<br>
&nbsp;&nbsp;▹ JWT, OAuth2, rate limiting, structured logging</span>`,

  projects: () => `<span class="t-text">🏆 <strong>Fantasy Sports Platform</strong> — React Vite + BullMQ + Socket.IO (500+ concurrent users)<br>
💬 <strong>Real-Time Matchmaking</strong> — MongoDB + Socket.IO (100K+ users, 50% DB load reduction)<br>
⚙️ <strong>Job Processing Platform</strong> — Node.js Cluster + Redis (50K+ tasks/day, zero job loss)<br>
🎵 <strong>Audio Streaming</strong> — AWS S3 + CloudFront (50K+ assets, 60% less buffering)<br>
📺 <strong>Live Streaming</strong> — WebRTC + Socket.IO (500+ active rooms)<br>
📚 <strong>LMS</strong> — RBAC + React Admin (admin/teacher/student roles)</span>`,

  contact: () => `<span class="t-text">📧 <a href="mailto:mr.ramansharma2000@gmail.com" style="color:var(--accent)">mr.ramansharma2000@gmail.com</a><br>
📱 +91-8619295550<br>
💼 <a href="https://www.linkedin.com/in/raman-sharma-a5946aa4/" target="_blank" rel="noopener noreferrer" style="color:var(--accent)">LinkedIn</a><br>
🐙 <a href="https://github.com/raman-kumar-sharma" target="_blank" rel="noopener noreferrer" style="color:var(--accent)">GitHub</a></span>`,

  github: () => {
    window.open("https://github.com/raman-kumar-sharma", "_blank", "noopener,noreferrer");
    return `<span class="t-text">Opening GitHub profile... 🚀</span>`;
  },
};

interface Line { cmd?: string; html?: string | null; }

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([
    { html: `<span class="t-text">Welcome! Type <strong>help</strong> to see available commands.</span>` },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const histIdx = useRef(-1);
  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const run = useCallback((cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;
    setHistory((h) => [trimmed, ...h]);
    histIdx.current = -1;

    if (trimmed === "clear") {
      setLines([]);
      return;
    }
    const fn = COMMANDS[trimmed];
    const response = fn ? fn() : `<span class="t-error">command not found: ${trimmed}. Type <strong>help</strong> for available commands.</span>`;
    setLines((prev) => [...prev, { cmd: trimmed, html: response }]);
    setTimeout(() => { if (outputRef.current) outputRef.current.scrollTop = outputRef.current.scrollHeight; }, 10);
  }, []);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") { run(input); setInput(""); }
    if (e.key === "ArrowUp") {
      const next = Math.min(histIdx.current + 1, history.length - 1);
      histIdx.current = next;
      setInput(history[next] || "");
    }
    if (e.key === "ArrowDown") {
      const next = Math.max(histIdx.current - 1, -1);
      histIdx.current = next;
      setInput(next === -1 ? "" : history[next]);
    }
  };

  return (
    <section id="terminal-section">
      <h2 className="section-title">Interactive Terminal</h2>
      <p style={{ opacity: 0.7, marginBottom: "2rem", fontSize: "0.95rem" }}>
        Type a command below. Try: <code>help</code>, <code>whoami</code>, <code>skills</code>, <code>projects</code>, <code>contact</code>, <code>experience</code>
      </p>
      <div className="terminal-box" id="terminalBox" onClick={() => inputRef.current?.focus()}>
        <div className="terminal-topbar">
          <span className="t-dot" style={{ background: "#ff5f57" }} />
          <span className="t-dot" style={{ background: "#febc2e" }} />
          <span className="t-dot" style={{ background: "#28c840" }} />
          <span style={{ marginLeft: "1rem", fontSize: "0.8rem", opacity: 0.5 }}>raman@portfolio ~ </span>
        </div>
        <div className="terminal-output" ref={outputRef}>
          {lines.map((line, i) => (
            <div key={i}>
              {line.cmd && (
                <div className="t-line">
                  <span className="t-prompt">$</span> <span className="t-cmd">{line.cmd}</span>
                </div>
              )}
              {line.html != null && (
                <div className="t-line" dangerouslySetInnerHTML={{ __html: line.html }} />
              )}
            </div>
          ))}
        </div>
        <div className="terminal-input-row">
          <span className="t-prompt">$</span>
          <input
            ref={inputRef}
            type="text"
            className="terminal-input"
            placeholder="type a command..."
            autoComplete="off"
            spellCheck={false}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
          />
        </div>
      </div>
    </section>
  );
}
