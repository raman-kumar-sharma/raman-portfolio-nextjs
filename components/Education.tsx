export default function Education() {
  return (
    <section id="education">
      <h2 className="section-title">Education</h2>
      <div className="grid">
        <div className="card reveal">
          <div className="card-header">
            <div>
              <h3>Bachelor of Computer Applications (BCA)</h3>
              <h4 style={{ marginBottom: 5, opacity: 0.9 }}>St. Wilfred&apos;s PG College</h4>
            </div>
            <div style={{ textAlign: "right", minWidth: 120 }}>
              <span className="date" style={{ display: "block", marginBottom: 5 }}>2019 – 2022</span>
              <span style={{ fontSize: "0.85rem", opacity: 0.7 }}><i className="fas fa-map-marker-alt" /> Jaipur, RJ</span>
            </div>
          </div>
          <p style={{ opacity: 0.8, fontSize: "0.95rem", marginTop: 10 }}>
            Graduated with First Division. Specialized in Software Development, Object-Oriented Programming, and Database Management Systems.
          </p>
        </div>
      </div>
    </section>
  );
}
