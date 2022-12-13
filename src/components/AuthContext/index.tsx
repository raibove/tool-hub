import { useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";

import { useAuth } from "@pangeacyber/react-auth";

import Status from "@components/Status";
import Header from "@components/Header";
import Footer from "@components/Footer";

import Home from "@features/Home";
import Profile from "@features/Profile";

const AuthContext = () => {
  const { authenticated, loading, error } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !error && !authenticated) {
      navigate("/", { replace: true });
    }
  }, [navigate, error, authenticated, loading]);

  if (loading) {
    return (<Status message="Loading" />); 
  } else if (error) {
    return (<Status message={error} />);
  }

  return (
    <div className="app">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default AuthContext;