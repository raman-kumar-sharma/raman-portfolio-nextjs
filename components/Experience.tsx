export default function Experience() {
  return (
    <section id="experience">
      <h2 className="section-title">Professional Evolution</h2>
      <div className="grid">

        <div className="card project-card reveal">
          <div className="card-header">
            <div>
              <h3>Nimble App Genie</h3>
              <span className="role-badge">MERN Stack Developer</span>
            </div>
            <span className="date">June 2024 – Present</span>
          </div>
          <p className="company-intro">
            Architecting full-stack applications serving 100K+ daily active users. Leading backend infrastructure,
            real-time systems, and building complete React frontends with admin dashboards.
          </p>
          <div className="projects-container">
            <h5>🚀 Key Achievements:</h5>
            {[
              { title: "10x Query Optimization", tag: "MongoDB", desc: <>Optimized aggregation pipelines achieving <strong>2.5s → 250ms</strong> response time using advanced indexing strategies.</> },
              { title: "Fantasy Sports Platform", tag: "Full Stack", desc: <>Built complete user app + admin dashboard with live draft lobby, real-time leaderboard, BullMQ queues — <strong>zero job loss over 3 months</strong>.</> },
              { title: "Real-Time Matchmaking", tag: "Socket.IO", desc: <>Scalable chat system with message batching. Reduced DB load by <strong>50%</strong> for 100K+ user platform.</> },
              { title: "Audio Streaming Service", tag: "AWS S3 + CDN", desc: <>Managing <strong>50K+ media assets</strong> with AWS S3/CloudFront. 60% less buffering via byte-range streaming.</> },
            ].map((p) => (
              <div key={p.title} className="inner-project">
                <div className="inner-head">
                  <strong>{p.title}</strong>
                  <span className="tech-tag">{p.tag}</span>
                </div>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card project-card reveal">
          <div className="card-header">
            <div>
              <h3>Fzeetechz Pvt Ltd</h3>
              <span className="role-badge">Node.js Developer</span>
            </div>
            <span className="date">Aug 2023 – June 2024</span>
          </div>
          <p className="company-intro">
            Developed secure backend services for live streaming, EdTech, and fintech platforms with JWT authentication,
            Redis sessions, and structured logging.
          </p>
          <div className="projects-container">
            <h5>🚀 Key Achievements:</h5>
            {[
              { title: "Repso Live Streaming", tag: "WebRTC", desc: <>Low-latency signaling backend for WebRTC with <strong>500+ active rooms</strong>, TURN relay fallback, and admin monitoring dashboard.</> },
              { title: "Navya Edu LMS", tag: "RBAC", desc: "Scalable LMS with RBAC (admin/teacher/student), secure content delivery, and React admin panel for course management." },
              { title: "API Security Hardening", tag: "JWT + OAuth2", desc: "Implemented rate limiting, CORS policies, input validation, and structured logging — significantly reduced MTTR." },
            ].map((p) => (
              <div key={p.title} className="inner-project">
                <div className="inner-head">
                  <strong>{p.title}</strong>
                  <span className="tech-tag">{p.tag}</span>
                </div>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
