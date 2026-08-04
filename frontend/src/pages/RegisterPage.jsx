import { Link } from "react-router-dom";
import "./AuthPages.css";

function RegisterPage() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Create Your Account</h2>
        <p className="auth-subtitle">
          Join to get personalized health guidance
        </p>

        <form className="auth-form">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="Riya Yadav" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="you@example.com" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Create a password" />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Re-enter your password"
          />

          <button type="submit" className="auth-btn">Create Account</button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Log in here</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;