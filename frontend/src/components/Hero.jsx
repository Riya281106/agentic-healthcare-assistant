import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Your AI-Powered Healthcare Companion</h1>
        <p>
          Get clear, reliable health guidance through natural conversation —
          grounded in trusted medical sources, available anytime.
        </p>
        <div className="hero-actions">
          <Link to="/chat" className="btn-primary">Start a Conversation</Link>
          <Link to="/register" className="btn-secondary">Create Account</Link>
        </div>
        <p className="hero-disclaimer">
          This assistant provides general guidance only and does not replace
          professional medical advice.
        </p>
      </div>
    </section>
  );
}

export default Hero;