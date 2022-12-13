import React from 'react';
import {  useNavigate } from "react-router-dom";
import { AuthProvider, AppState } from "@pangeacyber/react-auth";

import AuthContext from "@src/components/AuthContext"
import './scss/styles.scss';

const LOGIN_URL = process.env.REACT_APP_LOGIN_URL || "";
const CLIENT_TOKEN = process.env.REACT_APP_CLIENT_TOKEN || "";
const PROVIDER_API = process.env.REACT_APP_PROVIDER_API || "";

const App = () => {
  const navigate = useNavigate();

  const handleLogin = (appData: AppState) => {
    const redirectUrl = new URL(appData.returnPath)
    navigate(redirectUrl.pathname);
  }

  return (
    <AuthProvider
      config={{
        domain: PROVIDER_API,
        clientToken: CLIENT_TOKEN,
      }}
      onLogin={handleLogin}
      loginUrl={LOGIN_URL}
    >
      <AuthContext />
    </AuthProvider>
  );
};

export default App;
