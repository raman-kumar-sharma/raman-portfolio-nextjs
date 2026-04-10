const projects = [
  {
    title: "Fantasy Sports Platform",
    badge: <span className="backend-badge"><i className="fas fa-layer-group" /> Full Stack</span>,
    summary: "Complete full-stack fantasy sports app — user web app, admin dashboard, and high-throughput backend with live draft and real-time leaderboard.",
    points: [
      <><strong>React Vite + Redux Toolkit</strong> user app with live draft lobby, optimistic UI updates, and Socket.IO live match events.</>,
      <><strong>BullMQ queues</strong> for async point calculation and leaderboard updates — zero job loss over 3 months.</>,
      <><strong>Redis pub/sub event bus</strong> decoupling scoring engine, draft manager, and notification service.</>,
      <>Live draft with Socket.IO rooms: <strong>500+ concurrent users</strong>, sub-second pick propagation, &lt;200ms latency.</>,
      <>React admin dashboard with RBAC — manage matches, verify teams, push live score updates.</>,
    ],
    tags: [
      { label: "React Vite", tip: "Fast React Build" }, { label: "Redux Toolkit", tip: "State Management" },
      { label: "BullMQ", tip: "Job Queues" }, { label: "Redis Pub/Sub", tip: "Event Bus" },
      { label: "Socket.IO", tip: "Real-time" }, { label: "MySQL", tip: "Relational DB" },
    ],
  },
  {
    title: "Real-Time Matchmaking",
    badge: <a href="https://play.google.com/store/apps/details?id=com.skimate" target="_blank" rel="noopener noreferrer" className="live-link"><i className="fab fa-google-play" /> Live App</a>,
    summary: "Scalable matchmaking platform for 100K+ users with real-time chat, AI matching, and a full admin moderation dashboard.",
    points: [
      <><strong>MongoDB schema</strong> for 100K+ users with optimized aggregation pipelines.</>,
      <>Message batching and compression — reduced <strong>DB load by 50%</strong> with sub-second delivery.</>,
      "AI collaborative filtering algorithms increasing match quality by 40%.",
      "End-to-End Encryption and S3 presigned URLs for privacy.",
      "Admin dashboard to moderate chats, manage users, and view real-time metrics.",
    ],
    tags: [
      { label: "Socket.IO", tip: "Real-time Events" }, { label: "MongoDB", tip: "NoSQL Database" },
      { label: "AI Matching", tip: "Recommendation Engine" }, { label: "AWS S3", tip: "Secure Storage" },
    ],
  },
  {
    title: "Job Processing Platform",
    badge: <span className="backend-badge"><i className="fas fa-server" /> Backend System</span>,
    summary: "High-throughput distributed job processing system handling 50K+ scheduled tasks daily with 99.95% reliability.",
    points: [
      <><strong>Node.js Cluster mode</strong> utilizing all CPU cores for 5x throughput.</>,
      <>Redis-based queues with retry strategies and <strong>exponential backoff</strong>.</>,
      <><strong>Dead-letter queue</strong> ensuring zero job loss.</>,
      "MySQL connection pooling with transaction isolation levels.",
      "React admin panel to monitor queues, retry failed jobs, and view analytics.",
    ],
    tags: [
      { label: "BullMQ", tip: "Job Queue Manager" }, { label: "MySQL", tip: "Relational DB" },
      { label: "Redis", tip: "Caching + Queues" }, { label: "Node.js Cluster", tip: "Multi-core" },
    ],
  },
  {
    title: "Audio Streaming Service",
    badge: <a href="https://play.google.com/store/apps/details?id=com.peakneuro.android&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="live-link"><i className="fab fa-google-play" /> Live App</a>,
    summary: "High-performance audio streaming platform managing 50K+ media assets with adaptive bitrate streaming and global CDN delivery.",
    points: [
      <><strong>AWS S3 + CloudFront CDN</strong> for low-latency global media delivery.</>,
      <>Byte-range streaming and caching — <strong>60% less buffering</strong>.</>,
      "Tiered subscription models using Stripe API integration.",
      "Admin panel to upload/manage audio files, set metadata, and view streaming analytics.",
    ],
    tags: [
      { label: "AWS S3", tip: "Object Storage" }, { label: "CloudFront", tip: "Global CDN" },
      { label: "Stripe", tip: "Payment Gateway" }, { label: "React", tip: "Frontend" },
    ],
  },
  {
    title: "Live Interactive Streaming",
    badge: <a href="https://apps.apple.com/in/app/repso-live/id6642654814" target="_blank" rel="noopener noreferrer" className="live-link"><i className="fab fa-app-store-ios" /> App Store</a>,
    summary: "Low-latency live streaming platform with real-time social interactions, WebRTC signaling, and admin stream monitoring.",
    points: [
      <><strong>WebRTC signaling backend</strong> for sub-second stream delay.</>,
      <>Real-time interaction engine (Likes, Gifts, Comments) — <strong>500+ active rooms</strong>.</>,
      "TURN relay fallback and session management for NAT traversal.",
      "Admin dashboard to monitor active streams, manage rooms, and broadcast system messages.",
    ],
    tags: [
      { label: "WebRTC", tip: "Peer-to-Peer Stream" }, { label: "Socket.IO", tip: "Real-time Events" },
      { label: "Redis", tip: "High-Speed Caching" }, { label: "React", tip: "Frontend" },
    ],
  },
  {
    title: "Learning Management System",
    badge: <a href="https://navyaedu.com/" target="_blank" rel="noopener noreferrer" className="live-link"><i className="fas fa-globe" /> Live Web</a>,
    summary: "Comprehensive EdTech LMS with role-based access, secure content delivery, and a full React admin panel for course management.",
    points: [
      <><strong>RBAC</strong> (admin, teacher, student roles).</>,
      "Secure video delivery APIs with course management and student progress tracking.",
      "Modular architecture allowing easy extension for new features.",
      "React admin panel for course creation, user role assignment, and content approval.",
    ],
    tags: [
      { label: "MERN Stack", tip: "Full Stack" }, { label: "LMS", tip: "Learning System" },
      { label: "RBAC", tip: "Secure Permissions" }, { label: "React Admin", tip: "Frontend" },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Featured Engineering</h2>
      <div className="grid">
        {projects.map((p) => (
          <div key={p.title} className="card project-card reveal">
            <div className="project-header">
              <h3>{p.title}</h3>
              <div className="project-links">{p.badge}</div>
            </div>
            <p className="project-summary">{p.summary}</p>
            <div className="tech-deep-dive">
              <h5>Key Engineering:</h5>
              <ul>{p.points.map((pt, i) => <li key={i}>{pt}</li>)}</ul>
            </div>
            <div className="tags">
              {p.tags.map((t) => <span key={t.label} data-tooltip={t.tip}>{t.label}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
