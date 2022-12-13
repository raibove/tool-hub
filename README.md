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

Set values in .env.local
```
REACT_APP_CLIENT_TOKEN=${AUTHN-CLIENT-TOKEN}
REACT_APP_LOGIN_URL=${AUTHN-LOGIN-URL}
REACT_APP_PROVIDER_API=${AUTH-API-URL}
```


### Start the server
```
% yarn start
```
