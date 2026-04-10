"use client";
import { useEffect } from "react";

export default function Timeline() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } }),
      { threshold: 0.2 }
    );
    document.querySelectorAll(".tl-item").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const items = [
    {
      date: "June 2024 – Present",
      company: "Nimble App Genie",
      role: "MERN Stack Developer",
      desc: "Architecting full-stack apps for 100K+ daily users. 10x MongoDB query optimization, real-time systems, BullMQ job queues, and complete React admin dashboards.",
    },
    {
      date: "Aug 2023 – June 2024",
      company: "Fzeetechz Pvt Ltd",
      role: "Node.js Developer",
      desc: "Built secure backend services for live streaming (WebRTC), EdTech LMS (RBAC), and fintech APIs with JWT, OAuth2, rate limiting, and structured logging.",
    },
    {
      date: "2019 – 2022",
      company: "St. Wilfred's PG College",
      role: "BCA — First Division",
      desc: "Bachelor of Computer Applications. Specialized in Software Development, OOP, and Database Management Systems.",
    },
  ];

  return (
    <section id="timeline">
      <h2 className="section-title">Career Timeline</h2>
      <div className="timeline">
        {items.map((item) => (
          <div key={item.company} className="tl-item">
            <div className="tl-dot" />
            <div className="tl-content card">
              <span className="tl-date">{item.date}</span>
              <h3>{item.company}</h3>
              <span className="role-badge">{item.role}</span>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
