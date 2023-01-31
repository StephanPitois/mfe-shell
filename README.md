# January 2023 Update

Look into https://github.com/module-federation/vite and compare pros and cons of Modular Federation vs this solution.

# Micro-Frontends with Svelte

This demo shows an app shell using Svelte Kit, which provides routing, a place to keep pages that must be server-side rendered, and a host
for micro-frontends. The micro-frontends are simple Svelte apps, coded and deployed independently from the app shell and from each other. 
In this implmentation, the micro-frontends have no server-rendering capabilities as the remotes are loaded dynamically on the client-side only.

On the Products page, we have three micro-frontends from three different remotes. When items are added to the cart from the product micro-frontend,
an event is triggered. The shopping cart micro-frontends listens to that event, updates its count, and opens the shopping cart dialog in response. 
This shows communication between two micro-frontends via simple events.

![Screenshot](https://user-images.githubusercontent.com/1167497/208300819-93c30a0c-7401-4aec-a67a-8072486a7e2e.png)

## Requirements

- COMPILE APP TO COMPONENT PUBLISHED TO CDN AND CONSUMABLE VIA LINK TAG 
- ONE COMPONENT OR MORE PER TEAM 
- APP SHELL ONLY IMPORTS WHAT IT NEEDS
- EACH TEAM CONTROLS DEPLOYMENT OF REMOTES
- ~~SSR SHOULD WORK~~ CUSTOM ELEMENTS ONLY EXIST CLIENT SIDE, BUT NOT AN ISSUE IF SSR NOT NEEDED
- STILL USE SVELTE KIT FOR APP SHELL

## Shell App For Micro-Frontends

- https://github.com/StephanPitois/mfe-1
- https://github.com/StephanPitois/mfe-2
- https://github.com/StephanPitois/mfe-3

## Environment variables

Add a `.env` file to your project with this content:

```
PUBLIC_MFE_1=http://localhost:1971/build/bundle.js
PUBLIC_MFE_2=http://localhost:1972/build/bundle.js
PUBLIC_MFE_3=http://localhost:1973/build/bundle.js
```

For production, these will need to be configured in your deployment pipeline
to reflect the deployed URLs of your micro-frontends, i.e., the path to each
`bundle.js`. For this demo deployed with Vercel, you would set the environment variables from your console:

![image](https://user-images.githubusercontent.com/1167497/208299703-999e67ea-76ec-43cd-bcdd-6b6b0b58b14f.png)

You can use those locally too. For example, if you are working on the app shell and don't want to run all
micro-frontends locally, change your local `.env` to this:

```
PUBLIC_MFE_1=https://mfe-1-psi.vercel.app/build/bundle.js
PUBLIC_MFE_2=https://mfe-2.vercel.app/build/bundle.js
PUBLIC_MFE_3=https://mfe-3.vercel.app/build/bundle.js
```

Similarly, when working on a specific micro-frontends locally, the preferred setup is to just have the app shell and the targeted micro-frontend
running locally and then using deployed micro-frontends for the rest. Not only does this keep things simple and
focused on your development machine, but having only one local micro-frontend allows for live-reload, which is essential
to good devloper experience. For example, if you want to develop MFE2, your config would look like this:

```
PUBLIC_MFE_1=https://mfe-1-psi.vercel.app/build/bundle.js
PUBLIC_MFE_2=http://localhost:1972/build/bundle.js
PUBLIC_MFE_3=https://mfe-3.vercel.app/build/bundle.js
```

In a production-ready version of this app, we could use a micro-frontend discovery service to help keep
things decoupled and manageable.

## Notes

TODO:

Create new helper, `dispatchCustomEvent` to simplify and standardize this kind of call - naming, payload, etc...:

```
		// Use this to communicate with other micro-frontends:
		window.dispatchEvent(
			new CustomEvent("TOTORO_WAS_CLICKED", {
				detail: { message: "Totoro's first component was clicked." },
			})
		);
```

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
