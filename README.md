# README

## Project-Specific Notes
* Project-specific notes go here.

### Server Links
* Local: http://localhost:3000/
* Staging: https://grovery-core-toolkit-staging.netlify.app/
* Live: 




---

## In-Progress Dev Notes
Delete this section when no longer needed.

Current active dev branches:
* feature--algolia-search
* plugins--vite-initial
* template--placeholder-content


---

## Grovery CORE Toolkit


### Initialize
* Use Node v16.13.0 - you can just run "npm run nvm" to set
* run 'npm install'
* run 'npm run dev' (start and serve commands are the same as this by default, customize them if you need to)

### Initial Server Deploy, Updating Test/Staging Server
This site uses Netlify's auto-deploy functions.  Every time you push to your main branch, Netlify will do a new deploy.  

### Git Guidelines - Branching & Merging
Try to keep all updates isolated to their own branch, and then open a pull request (PR) when you're ready to push the update live.  

All branches should follow the naming scheme of `category--subject`, for example: `template--basic-page-template`, `package--astro-icon`, or `component--MasterComponent`.  

>*Avoiding Merge Errors*: 
>Before you open your PR, re-merge `main` into your branch to get any updates that have happened in the meantime, and then run `pnpm run build` to make sure your updates build properly.  

### Assets Checklist
When you start the project, check in with the team for the following:
* Font files
* Logo(s) - as PNGs or SVGs
* Favicon - you can usually resize the logo for this
* Adobe Xd project link
* Legal copy/links
* Social links

### Code Libraries
* Framework: [Astro Docs](https://github.com/withastro/docs)
* Icons: [astro-icon](https://github.com/natemoo-re/astro-icon#readme)
* Sliders/Carousels: [swiper](https://swiperjs.com/)

### Coming Features
* Contact page
* About page - == In Progress ==
* [Arbitrary JSON data usage](https://vercel.com/guides/loading-static-file-nextjs-api-route) - == Complete ==
* [Category and tag filtering on blog pages](https://retool.com/blog/filtering-data-in-react-filter-map-and-for-loops/)
* lodash - js utility library
* browsersync - sync multiple browser windows
* Form integration - netlify forms

### Article Links
* [Set up Google Analytics with react-ga](https://medium.com/@cooperwfloyd/the-most-simple-way-to-track-next-js-page-views-in-google-analytics-8a5c6d981f43)