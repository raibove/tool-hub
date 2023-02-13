import { useNavigate } from "react-router-dom";
import { AuthProvider, AppState } from "@pangeacyber/react-auth";

import Router from "@src/components/Router";
import './scss/styles.scss';

const LOGIN_URL = process.env.REACT_APP_LOGIN_URL || "";
const CLIENT_TOKEN = process.env.REACT_APP_CLIENT_TOKEN || "";
const PROVIDER_API = process.env.REACT_APP_PROVIDER_API || "";

const App = () => {
  const navigate = useNavigate();

  const handleLogin = (appData: AppState) => {    
    navigate(appData.returnPath);
  }

  return (
    <AuthProvider
      config={{
        domain: PROVIDER_API,
        token: CLIENT_TOKEN,
      }}
      onLogin={handleLogin}
      loginUrl={LOGIN_URL}
    >
      <Router />
    </AuthProvider>
  );
};

export default App;
