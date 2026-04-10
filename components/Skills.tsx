export default function Skills() {
  const cards = [
    {
      icon: "fa-server",
      title: "Backend Core",
      desc: "High-performance server architecture & APIs.",
      tags: [
        { label: "Node.js", tip: "Runtime Environment" },
        { label: "Express.js", tip: "Web Framework" },
        { label: "REST APIs", tip: "REST API Design" },
        { label: "GraphQL", tip: "API Query Language" },
        { label: "Socket.IO", tip: "Real-time Engine" },
        { label: "BullMQ", tip: "Distributed Job Queues" },
        { label: "Redis Pub/Sub", tip: "Event-driven Architecture" },
      ],
    },
    {
      icon: "fa-code",
      title: "Frontend Ecosystem",
      desc: "Full-stack UIs, admin panels & dashboards.",
      tags: [
        { label: "React.js", tip: "UI Library" },
        { label: "React Vite", tip: "Fast Build Tool" },
        { label: "Redux Toolkit", tip: "State Management" },
        { label: "Tailwind CSS", tip: "Utility-first CSS" },
        { label: "Axios", tip: "HTTP Client" },
        { label: "Socket.IO Client", tip: "Real-time Client" },
      ],
    },
    {
      icon: "fa-database",
      title: "Databases & Cloud",
      desc: "Scalable storage, caching & infrastructure.",
      tags: [
        { label: "MongoDB", tip: "NoSQL + Aggregation" },
        { label: "MySQL", tip: "Relational Database" },
        { label: "PostgreSQL", tip: "Relational Database" },
        { label: "Redis", tip: "In-Memory Cache + Pub/Sub" },
        { label: "AWS S3", tip: "Object Storage + CDN" },
        { label: "Docker", tip: "Containerization" },
      ],
    },
    {
      icon: "fa-shield-alt",
      title: "Security & Auth",
      desc: "Secure, production-grade authentication.",
      tags: [
        { label: "JWT", tip: "Token Authentication" },
        { label: "OAuth2", tip: "Third-party Auth" },
        { label: "RBAC", tip: "Role-Based Access Control" },
        { label: "Rate Limiting", tip: "API Protection" },
        { label: "CORS", tip: "Cross-Origin Policy" },
        { label: "Input Validation", tip: "Input Sanitization" },
      ],
    },
  ];

  return (
    <section id="skills">
      <h2 className="section-title">Technical Arsenal</h2>
      <div className="grid">
        {cards.map((c) => (
          <div key={c.title} className="card project-card reveal" style={{ borderLeft: "3px solid var(--accent)" }}>
            <h3><i className={`fas ${c.icon}`} /> {c.title}</h3>
            <p style={{ marginBottom: "1rem", opacity: 0.7 }}>{c.desc}</p>
            <div className="tags">
              {c.tags.map((t) => (
                <span key={t.label} data-tooltip={t.tip}>{t.label}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
