export default function AdminExpertise() {
  const cards = [
    {
      icon: "fa-users-cog", title: "Role-Based Access",
      desc: "Multi-level RBAC with admin, moderator, and viewer roles. Granular permission control per module.",
      tags: [{ label: "RBAC", tip: "Access Control" }, { label: "JWT", tip: "Token Auth" }, { label: "OAuth2", tip: "Third-party Auth" }],
    },
    {
      icon: "fa-table", title: "Full CRUD Dashboards",
      desc: "Complete CRUD operations for all entities — users, content, settings — with data tables, filters, and search.",
      tags: [{ label: "React.js", tip: "UI Library" }, { label: "Redux Toolkit", tip: "State Management" }, { label: "Tailwind CSS", tip: "Styling" }],
    },
    {
      icon: "fa-chart-line", title: "Real-Time Analytics",
      desc: "Live activity logs via Socket.IO, analytics charts, and data export features for business insights.",
      tags: [{ label: "Socket.IO", tip: "Live Updates" }, { label: "Analytics", tip: "Charts" }, { label: "Data Export", tip: "Export" }],
    },
  ];

  return (
    <section id="admin-expertise">
      <h2 className="section-title">Admin Panel Expertise</h2>
      <p style={{ opacity: 0.8, marginBottom: "3rem", fontSize: "1rem", maxWidth: 700 }}>
        For every project, I independently build a <strong>full-featured React admin dashboard</strong> — not just the backend.
      </p>
      <div className="grid">
        {cards.map((c) => (
          <div key={c.title} className="card project-card reveal">
            <h3><i className={`fas ${c.icon}`} /> {c.title}</h3>
            <p style={{ margin: "1rem 0", opacity: 0.8 }}>{c.desc}</p>
            <div className="tags">
              {c.tags.map((t) => <span key={t.label} data-tooltip={t.tip}>{t.label}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
