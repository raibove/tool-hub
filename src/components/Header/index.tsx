import { MouseEvent } from 'react';
import { Link } from "react-router-dom";
import { useAuth } from "@pangeacyber/react-auth";

const Header = () => {
  const { authenticated, login, logout } = useAuth();

  const handleLogout = (e: MouseEvent) => {
    e.preventDefault();
    logout(false);
  }

  return (
    <div className="header">
      <img src="/pangea-logo.svg" alt="Pangea Logo"/>
      { authenticated && (
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
        </div>
      )}
      { authenticated ? 
        <button onClick={handleLogout}>Logout</button> :
        <button onClick={login}>Login</button>
      }
    </div>
  );
}

export default Header;