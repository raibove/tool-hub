import { useNavigate } from "react-router-dom";
import { AuthProvider, AppState } from "@pangeacyber/react-auth";

import Router from "@src/components/Router";
import "./scss/styles.scss";

const App = () => {
  const navigate = useNavigate();

  const hostedLoginURL = process.env?.REACT_APP_LOGIN_URL || "";

  const authConfig = {
    clientToken: process.env?.REACT_APP_CLIENT_TOKEN || "",
    domain: process.env?.REACT_APP_PROVIDER_API || "",
  };

  const handleLogin = (appData: AppState) => {
    navigate(appData.returnPath);
  };

  if (!authConfig.clientToken || !authConfig.domain) {
    return (
      <html lang="en">
        <head />
        <body style={{ padding: "40px", textAlign: "center" }}>
          <h2>
            Please configure your environment variables. See the README for
            more...
          </h2>
        </body>
      </html>
    );
  }

  return (
    <AuthProvider
      loginUrl={hostedLoginURL}
      config={authConfig}
      onLogin={handleLogin}
    >
      <Router />
    </AuthProvider>
  );
};

export default App;
