import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import { defineConfig } from 'astro/config';
import AstroPWA from '@vite-pwa/astro'
import prefetch from '@astrojs/prefetch';

import AutoImport from 'astro-auto-import';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkSmartypants from 'remark-smartypants';

import { asideAutoImport, astroAsides } from './integrations/astro-asides';
import { astroCodeSnippets, codeSnippetAutoImport } from './integrations/astro-code-snippets';
import { sitemap } from './integrations/sitemap';
import { autolinkConfig } from './plugins/rehype-autolink-config';
import { rehypei18nAutolinkHeadings } from './plugins/rehype-i18n-autolink-headings';
import { rehypeTasklistEnhancer } from './plugins/rehype-tasklist-enhancer';
import { remarkFallbackLang } from './plugins/remark-fallback-lang';
import { theme } from './syntax-highlighting-theme';

const getCache = ({ name, pattern }: any) => ({
  urlPattern: pattern,
  handler: "CacheFirst" as const,
  options: {
    cacheName: name,
    expiration: {
      maxEntries: 500,
      maxAgeSeconds: 60 * 60 * 24 * 365 * 2 // 2 years
    },
    cacheableResponse: {
      statuses: [200]
    }
  }
});

// https://astro.build/config
export default defineConfig({
	  site: 'https://grovery-core-toolkit-staging.netlify.app/',
	  integrations: [
	  	AutoImport({
		    imports: [asideAutoImport, codeSnippetAutoImport]
		  }), 
		  preact({
		    compat: true
		  }), 
		  sitemap(), 
		  astroAsides(), 
		  astroCodeSnippets(), 
		  mdx()
		  
	  ],
	  markdown: {
	    syntaxHighlight: 'shiki',
	    shikiConfig: {
	      theme
	    },
	    // Override with our own config
	    smartypants: false,
	    remarkPlugins: [[remarkSmartypants, {
	      dashes: false
	    }],
	    // Add our custom plugin that marks links to fallback language pages
	    remarkFallbackLang()],
	    rehypePlugins: [rehypeSlug,
	    // This adds links to headings
	    [rehypeAutolinkHeadings, autolinkConfig],
	    // Tweak GFM task list syntax
	    rehypeTasklistEnhancer(),
	    // Translates the autolink headings anchors
	    rehypei18nAutolinkHeadings()]
	  }
	});