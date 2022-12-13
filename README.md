# Pangea React Authn Demo

## Setup

### Clone this repo

```
% git clone git@github.com:pangeacyber/pangea-example-react-authn.git
```

### Install dependencies
```
% yarn install
% cp .env.template .env.local
```

### Configure environment variables

Set three values in .env.local
 - REACT_APP_CLIENT_TOKEN=${AUTHN-CLIENT-TOKEN}
 - REACT_APP_LOGIN_URL=${AUTHN-LOGIN-URL}
 - REACT_APP_PROVIDER_API=${AUTH-API-URL}


### Start the dev server
```
% yarn start
```