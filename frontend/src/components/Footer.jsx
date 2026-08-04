import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Agentic AI Healthcare</h3>
          <p>
            General health guidance through AI conversation. Not a substitute
            for professional medical advice.
          </p>
        </div>

        <div className="footer-links">
          <h4>Navigate</h4>
          <Link to="/">Home</Link>
          <Link to="/chat">Chat</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>

        <div className="footer-info">
          <h4>Project</h4>
          <p>Final Year Project</p>
          <p>Department of Information Technology</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Agentic AI Healthcare Assistant. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;