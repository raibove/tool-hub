# Pangea React Authn Demo

## Setup

### Clone the repo and install dependencies

```
% git clone git@github.com:pangeacyber/pangea-example-react-authn.git
% cd pangea-example-react-authn
% yarn install
```

### Configure Pangea AuthN Service

> [!NOTE]
> If you don't already have an account, signup at https://console.pangea.cloud/

Create a project and enable the AuthN Service in the Pangea Console.

> [!IMPORTANT]
> Configure a Redirect Setting for your project
> - Navigate to AuthN > General > Redirect Settings.
> - Click `+ Redirect`
> - Type `http://localhost:3000` in the URL input and click `Save`.


Note the following fields, in the AuthN > Overview section, for use in the next step.
- Client Token: this is the CLIENT_TOKEN
- Domain: this is the PANGEA_DOMAIN
- Hosted Login: this is the LOGIN_URL

### Configure environment variables
```
% cp .env.template .env.local
```

Set three values in .env.local
 - REACT_APP_CLIENT_TOKEN={CLIENT_TOKEN}
 - REACT_APP_LOGIN_URL="{LOGIN_URL}"
 - REACT_APP_PANGEA_DOMAIN="{PANGEA_DOMAIN}"


### Start the server
```
% yarn start
```
