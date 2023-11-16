import { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@pangeacyber/react-auth";
import './style.css'
const Header = () => {
  const { authenticated, login, logout } = useAuth();

  const handleLogout = (e: MouseEvent) => {
    e.preventDefault();
    logout();
  }

  return (
    <div className="header">
      <img src="/logo.svg" alt="ToolHub Logo" style={{height: '80px', width: '80px'}}/>
      {authenticated && (
        <div className="nav">
          <Link to="/" className="link">Home</Link>
          <Link to="/profile" className="link">Profile</Link>
          <Link to="/submit-tool" className="link">Submit Tool</Link>
        </div>
      )}
      {authenticated ? (
        <button onClick={handleLogout} className="auth-button">Logout</button>
      ) : (
        <button onClick={login} className="auth-button">Login</button>
      )}
    </div>
  );
};

export default Header;
