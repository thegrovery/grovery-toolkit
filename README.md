# README

## Project-Specific Notes
* Project-specific notes go here.

### Server Links
* Local: http://127.0.0.1:3000/
* Staging: https://grovery-core-toolkit-template.netlify.app/
* Live: 
* Netlify: https://app.netlify.com/sites/grovery-core-toolkit-template/overview


---


## In-Progress Dev Notes
Delete this section when no longer needed.

Current active dev branches:
* feature--algolia-search
* plugins--vite-initial
* template--placeholder-content


---


## Framework: Grovery CORE Toolkit


### Initialize
* Use Node v16.13.0 - you can just run "npm run nvm" to set
* run 'npm install'
* run 'npm run dev' (start and serve commands are the same as this by default, customize them if you need to)

<br/>

### Initial Server Deploy, Updating Test/Staging Server
This site uses Netlify's auto-deploy functions.  Every time you push to your main branch, Netlify will do a new deploy.  

<br/>

### Git Guidelines - Branching & Merging
Try to keep all updates isolated to their own branch, and then open a pull request (PR) when you're ready to push the update live.  This will keep the git timeline clean and allow for easier collaboration.

All branches should follow the naming scheme of `category--subject`, for example: `template--basic-page-template`, `package--astro-icon`, or `component--MasterComponent`.  

<br/>

>**Avoiding Merge Errors**: 
>
>Before you open your PR, re-merge `main` into your branch to get any updates that have happened in the meantime, and then run `pnpm run build` to make sure your updates build properly.  

<br/>

### Assets Checklist
When you start the project, check in with the team for the following:
* Font files
* Logo(s) - as PNGs or SVGs
* Favicon - you can usually resize the logo for this
* Adobe Xd project link
* Legal copy/links
* Social links

<br/>

### Code Libraries
* Framework: [Astro Docs](https://github.com/withastro/docs)
* Icons: [astro-icon](https://github.com/natemoo-re/astro-icon#readme)
* Sliders/Carousels: [swiper](https://swiperjs.com/)

<br/>

## Markdown Syntax Guide
* https://www.markdownguide.org/basic-syntax/#overview