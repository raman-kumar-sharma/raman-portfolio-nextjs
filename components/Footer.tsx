export default function Footer() {
  return (
    <footer id="contact">
      <h2>Ready to Scale Your Architecture?</h2>
      <p>Jaipur, Rajasthan • +91-8619295550</p>
      <a href="mailto:mr.ramansharma2000@gmail.com" className="btn-main" style={{ marginTop: 20, minWidth: 200, display: "inline-block" }}>
        Start Conversation
      </a>
      <div className="socials">
        <a href="https://www.linkedin.com/in/raman-sharma-a5946aa4/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
          <i className="fab fa-linkedin" />
        </a>
        <a href="https://github.com/raman-kumar-sharma" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
          <i className="fab fa-github" />
        </a>
        <a href="mailto:mr.ramansharma2000@gmail.com" aria-label="Email">
          <i className="fas fa-envelope" />
        </a>
      </div>
      <div className="terminal-footer">
        <span className="cmd-prompt">root@raman:~/portfolio$</span>
        <span className="typing-effect">echo &quot;Built with Scale &amp; Performance&quot;</span>
        <span className="cursor">_</span>
      </div>
    </footer>
  );
}
