import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";

import { useAuth } from "@pangeacyber/react-auth";

import Status from "@components/Status";
import Header from "@components/Header";
import Footer from "@components/Footer";

import Home from "@features/Home";
import Profile from "@features/Profile";
import About from "@features/About";

const Layout = () => {
  const { authenticated, loading, error } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !error && !authenticated) {
      navigate("/", { replace: true });
    }
  }, [error, authenticated]);

  if (loading) {
    return (<Status message="Loading" />); 
  } else if (error) {
    return (<Status message="Error" />);
  }

  return (
    <div className="app">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;