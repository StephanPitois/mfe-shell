# Micro-Frontends with Svelte

This demo shows an app shell using SvelteKit, which provides routing, a place to keep pages that must be server-side rendered, and a host
for micro-frontends. The micro-frontends are simple Svelte apps (+ Rollup), coded and deployed independently from the app shell and from each other. 
In this implementation, the micro-frontends have no server-rendering capabilities as the remotes are loaded dynamically on the client-side only.

On the Products page, we have two micro-frontends from two different remotes. When items are added to the cart from the product micro-frontend,
an event is triggered. The shopping cart micro-frontend listens to that event and updates its count in response. 
This shows communication between two micro-frontends via simple events.

<img src="https://user-images.githubusercontent.com/1167497/220003988-194b903e-f7b2-424c-8bef-6b70633901dd.png" width="750"/>

## App Shell For Micro-Frontends

- App Shell | SvelteKit app deployed to Vercel | https://mfe-shell-ten.vercel.app/
- MFE1 | Svelte module deployed to AWS S3 with AWS Lambda Function as backend | https://github.com/StephanPitois/mfe-1
- MFE3 | Svelte module deployed to AWS S3 | https://github.com/StephanPitois/mfe-3

## Environment variables

Add a `.env` file to your project with this content:

```
PUBLIC_REMOTE_APP_1=http://localhost:1971/build/bundle.esm.js
PUBLIC_REMOTE_APP_3=http://localhost:1973/build/bundle.esm.js
```

For production, these will need to be configured in your deployment pipeline
to reflect the deployed URLs of your micro-frontends, i.e., the path to each
`bundle.js`. 

You can use those locally too. For example, if you are working on the app shell and don't want to run all
micro-frontends locally, change your local `.env` to this:

```
PUBLIC_REMOTE_APP_1=https://d14ypcdlwpkk4n.cloudfront.net/build/bundle.esm.js
PUBLIC_REMOTE_APP_3=https://d2mzhg2tanon84.cloudfront.net/build/bundle.esm.js
```

Similarly, when working on a specific micro-frontends locally, the preferred setup is to just have the app shell and the targeted micro-frontend
running locally and then using deployed micro-frontends for the rest. Not only does this keep things simple and
focused on your development machine, but having only one local micro-frontend allows for live-reload, which is essential
to good devloper experience. For example, if you want to develop MFE1, your config would look like this:

```
PUBLIC_REMOTE_APP_1=http://localhost:1971/build/bundle.esm.js
PUBLIC_REMOTE_APP_3=https://d2mzhg2tanon84.cloudfront.net/build/bundle.esm.js
```

## Deployment

Vercel is a great platform with fantastic DX but not all engineering teams have the option of using it, and often they will have to deploy their apps to AWS directly instead - or to some other provider. At the moment, the deployment is on Vercel for the App Shell, while MFE1 nad MFE3 are deployed to AWS S3 via GitHub Actions when code is merged into `main`. The S3 buckets are set as CloudFront origins. MFE1 is also backed by an AWS Lambda Function that returns the list of products.

<img src="https://user-images.githubusercontent.com/1167497/220025966-bc2e3809-ab38-4818-970f-c41b814120f0.png" width="500"/>

While SvelteKit is still used for the app shell, I would like to look into using single-spa or routify instead. SvelteKit is a really great tool, but you don't get to use it fully when limiting it to being a MFE app shell. Using a tool meant for micro-frontends, or just a lightweight client-side router seems to make more sense as opposed to trying to force SvelteKit into something it was not designed to be.

## Tech Stack

- [SvelteKit](https://kit.svelte.dev/)/[Vite](https://vitejs.dev/): App Shell/Host App
- [Svelte](https://svelte.dev/)/[Rollup](https://github.com/sveltejs/rollup-plugin-svelte): Micro-Frontends/Remote Apps 
- [Pico.css](https://picocss.com/)
- [~unocss~](https://github.com/unocss/unocss/tree/main/packages/runtime)
- [~SystemJS~](https://github.com/systemjs/systemjs)

## Alternatives & Possible Improvements

- [Single SPA](https://single-spa.js.org/docs/recommended-setup)
- Server-side composition and SSR

---

# SvelteKit

## Developing

Once you've installed dependencies with `npm install`, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
