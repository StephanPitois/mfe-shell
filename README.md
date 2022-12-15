# Requirements

- COMPILE APP TO COMPONENT PUBLISHED TO CDN AND CONSUMABLE VIA LINK TAG 
- ONE COMPONENT OR MORE PER TEAM 
- APP SHELL ONLY IMPORTS WHAT IT NEEDS
- MAYBE COMPILE TO CUSTOM ELEMENTS BUT MAYBE NOT
- EACH TEAM CONTROLS DEPLOYMENT OF BUNDLES
- ~~SSR SHOULD WORK~~ CUSTOM ELEMENTS ONLY EXIST CLIENT SIDE, BUT NOT AN ISSUE IF SSR NOT NEEDED
- STILL USE SVELTE KIT FOR APP SHELL

## Shell App For Micro-Frontends

- https://github.com/StephanPitois/mfe-1
- https://github.com/StephanPitois/mfe-2
- https://github.com/StephanPitois/mfe-3

## Environment variables

Add a `.env` file to your project with this content:

```
PUBLIC_MFE_1=
PUBLIC_MFE_2=
PUBLIC_MFE_3=
```

These values will need to be updated in your deployment pipeline to reflect the deployed URLs of your MFEs, i.e., the path to the `bundle.js`.

By default on your localhost these are equivalent to:

```
PUBLIC_MFE_1=http://localhost:1971/build/bundle.js
PUBLIC_MFE_2=http://localhost:1972/build/bundle.js
PUBLIC_MFE_3=http://localhost:1973/build/bundle.js
```

When using production MFEs, it looks like this:

```
PUBLIC_MFE_1=https://mfe-1-psi.vercel.app/build/bundle.js
PUBLIC_MFE_2=https://mfe-2.vercel.app/build/bundle.js
PUBLIC_MFE_3=https://mfe-3.vercel.app/build/bundle.js
```

When working on a specific MFE locally, the preferred setup is to just have the app shell and the targeted MFE
running locally and then using deployed MFEs for the rest. Not only does this keep things simple and
focused on your dev machine, but having only one local MFE allows for live-reload, which is essential
to good devloper experience. For example, if you want to develop MFE2, your config would look like this:

```
PUBLIC_MFE_1=https://mfe-1-psi.vercel.app/build/bundle.js
PUBLIC_MFE_2=
PUBLIC_MFE_3=https://mfe-3.vercel.app/build/bundle.js
```

This is equivalent to:

```
PUBLIC_MFE_1=https://mfe-1-psi.vercel.app/build/bundle.js
PUBLIC_MFE_2=http://localhost:1972/build/bundle.js
PUBLIC_MFE_3=https://mfe-3.vercel.app/build/bundle.js
```

In a production-ready version of this app, we could use a micro-frontend discovery service to help keep
things decoupled and manageable.

## Notes

TODO:

- show communication between MFEs
- some global styling can be done in app.css or via link/stylesheet in app.html in the app shell,
  but ::part() may be needed too to pierce through shadow tree.

# About Custom Elements 

_from Svelte documentation_

Custom elements can be a useful way to package components for consumption in a non-Svelte app, as they will work with vanilla HTML and JavaScript as well as most frameworks. There are, however, some important differences to be aware of:

- Styles are encapsulated, rather than merely scoped. This means that any non-component styles (such as you might have in a global.css file) will not apply to the custom element, including styles with the :global(...) modifier
- Instead of being extracted out as a separate .css file, styles are inlined into the component as a JavaScript string
- Custom elements are not generally suitable for server-side rendering, as the shadow DOM is invisible until JavaScript loads
- In Svelte, slotted content renders lazily. In the DOM, it renders eagerly. In other words, it will always be created even if the component's <slot> element is inside an {#if ...} block. Similarly, including a <slot> in an {#each ...} block will not cause the slotted content to be rendered multiple times
- The let: directive has no effect
- Polyfills are required to support older browsers

---

# SvelteKit

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte), deployed to [Vercel](https://vercel.com).

## Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fvercel%2Ftree%2Fmain%2Fexamples%2Fsveltekit&project-name=sveltekit-vercel&repository-name=sveltekit-vercel&demo-title=SvelteKit%20%2B%20Vercel&demo-description=A%20SvelteKit%20app%20optimized%20Edge-first.&demo-url=https%3A%2F%2Fsveltekit-template.vercel.app%2F)

_Live Example: https://sveltekit-template.vercel.app_

## Developing

Once you've installed dependencies with `pnpm install`, start a development server:

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## Building

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build with `npm run preview`.
