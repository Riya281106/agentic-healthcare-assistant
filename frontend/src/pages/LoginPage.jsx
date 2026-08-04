import { Link } from "react-router-dom";
import "./AuthPages.css";

function LoginPage() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Welcome Back</h2>
        <p className="auth-subtitle">Log in to continue your conversation</p>

        <form className="auth-form">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="you@example.com" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />

          <button type="submit" className="auth-btn">Log In</button>
        </form>

        <p className="auth-switch">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;