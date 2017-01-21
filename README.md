# NYFIX Demo Application

## Intro

This project is a sample/bootstrap application for the purpose of writing a NYFIX Portal app from scratch.

It includes:
- backend:
  Written in ES6 with Babel, exposes authentication endpoints and an empty (but secured) API.
  Web server uses Express, authentication with Passport, configured for NYFIX OAuth2.

- frontend:
  Single page app frontend written in ES6 with Babel+Webpack+React+Redux+Bootstrap.
  Includes localization and authentication workflows.

## How to build

Prerequisite: You need to have node.js (v4+) & npm installed and working.

Both in backend/frontend folders, run `npm install` then `npm start`.
Note that for the authentication to work, you need some extra configuration (see below).

## Auth configuration

### Choose your HOSTNAME

OAuth 2 authentication relies on the auth server redirecting the client after authenticating it (for security reasons), so you need to decide upfront (and configure in OAuth services) the (public) URL your app will be running on.
This URL needs to be accessible by your app clients (browsers), but not necessarily by the backend.

Set your `HOSTNAME` environment variable (or hand edit `config.shared.js`) accordingly.

### NYFIX Portal Register

- go to [NYFIX dev center](http://devcenter-sandbox-dev.nyfix.net)
- create an app, put `http://HOSTNAME:8080/api/nyfix-login` as the Launch URI
- get your client ID and secret (write them down, you can't get them again)
- set the corresponding environment variables `NYFIX_CLIENTID` / `NYFIX_SECRET` (or hand edit `backend/config.js`)
- go to [NYFIX portal sandbox](https://portal-sandbox-dev.nyfix.net/) and test your app

## Dev/Troubleshooting tips

- If you get the error 'Fail to obtain access token' returned by the backend, it may be that your backend process can't access the OAuth server (check backend network/proxy)

- Whether if your run the frontend with `NODE_ENV=dev|production`, the redux toolbar will be displayed (or not).
  You can hide it with CTRL+H, or switch its position with CTRL+Q.

- The frontend dev server proxies '/api' onto the backend API server so the web page deals with a single server/port.
  In production we'd use an Nginx proxy (or similar) to do the same.

- The frontend dev server redirects any unknown resource to index.html (to implement single-page app with browser history routing).

- With NODE_ENV=dev the js file generated by webpack is quite huge (5Mo+), as it includes inline source maps.

- Webpack hot module reload is enabled, so most of your frontend changes should be reflected in realtime (no need to restart).
