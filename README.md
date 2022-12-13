# Pangea React Authn Demo

## Setup

### Clone the repo and install dependencies

```
% git clone git@github.com:pangeacyber/pangea-example-react-authn.git
% cd pangea-example-react-authn
% yarn install
```

### Configure environment variables
```
% cp .env.template .env.local
```

Set three values in .env.local
 - REACT_APP_CLIENT_TOKEN={PANGEA_TOKEN}
 - REACT_APP_LOGIN_URL="{AUTHN_LOGIN_URL}"
 - REACT_APP_PROVIDER_API="{AUTHN_API_URL}"


### Start the server
```
% yarn start
```
