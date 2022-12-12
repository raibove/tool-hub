import React from 'react';

import { AuthProvider } from "@pangeacyber/react-auth";

import Layout from "@components/Layout"
import './scss/styles.scss';

const LOGIN_URL = process.env.REACT_APP_LOGIN_URL || "";
const CLIENT_TOKEN = process.env.REACT_APP_CLIENT_TOKEN || "";
const PROVIDER_API = process.env.REACT_APP_PROVIDER_API || "";
console.log("URL", LOGIN_URL)
const App = () => {  
  return (
    <AuthProvider
      config={{
        domain: PROVIDER_API,
        clientToken: CLIENT_TOKEN,
      }}
      loginUrl={LOGIN_URL}
    >
      <Layout />
    </AuthProvider>
  );
};

export default App;
