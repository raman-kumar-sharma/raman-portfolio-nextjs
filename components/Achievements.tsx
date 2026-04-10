export default function Achievements() {
  const items = [
    { stat: "10x", title: "Query Speedup", desc: "Optimized MongoDB aggregation pipelines from 2.5s → 250ms using indexing and query restructuring." },
    { stat: "50%", title: "DB Load Reduction", desc: "Reduced database load using Redis caching, message batching, and optimized indexing strategies." },
    { stat: "99.9%", title: "System Uptime", desc: "Maintained production uptime via proactive debugging, structured logging, and root cause analysis." },
    { stat: "5x", title: "Throughput Boost", desc: "Cluster-mode Node.js architecture utilizing all CPU cores for 5x throughput on job processing systems." },
  ];

  return (
    <section id="achievements">
      <h2 className="section-title">High-Impact Engineering</h2>
      <div className="grid">
        {items.map((item) => (
          <div key={item.title} className="card project-card reveal">
            <h2 style={{ fontSize: "3rem", color: "var(--accent)", marginBottom: 10 }}>{item.stat}</h2>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
