/**
 * This configures the navigation sidebar.
 * All other languages follow this ordering/structure and will fall back to
 * English for any entries they haven’t translated.
 *
 * - All entries MUST include `text` and `key`
 * - Heading entries MUST include `header: true` and `type`
 * - Link entries MUST include `slug` (which excludes the language code)
 */
export default [

	//LEARN SECTION
	{ text: 'Introduction', header: true, type: 'learn', key: 'startHere' },
		{ text: 'Getting Started', slug: 'getting-started', key: 'getting-started' },
		{ text: 'How to use the toolkit', slug: 'how-to-use-the-toolkit', key: 'how-to-use-the-toolkit' },
		{ text: 'Announcements', slug: 'announcements', key: 'announcements' },
		{ text: 'What is a brand toolkit?', slug: 'what-is-a-brand-toolkit', key: 'what-is-a-brand-toolkit' },
		{ text: 'Playbook in practice', slug: 'playbook-in-practice', key: 'playbook-in-practice' },
		{ text: 'Test your knowledge', slug: 'test-your-knowledge', key: 'test-your-knowledge' },

	{ text: 'Onboarding', header: true, type: 'learn', key: 'onboarding' },
		{ text: 'About our team', slug: 'onboarding/about-our-team', key: 'about-our-team' },
		{ text: 'What we use', slug: 'onboarding/what-we-use', key: 'what-we-use' },
		{ text: 'Introduction video', slug: 'onboarding/introduction-video', key: 'introduction-video' },

	{ text: 'Page Templates', header: true, type: 'learn', key: 'pageTemplates' },
		{ text: 'Basic Page Template', slug: 'page-templates/basic-page-template', key: 'page-templates/basic-page-template' },
		{ text: 'Component Page Template', slug: 'page-templates/component-page-template', key: 'page-templates/component-page-template' },
		{ text: 'Video Page Template', slug: 'page-templates/video-page-template', key: 'page-templates/video-page-template' },
		{ text: 'Directory Page Template', slug: 'page-templates/directory-page-template', key: 'page-templates/directory-page-template' },
		{ text: 'Resource Page Template', slug: 'page-templates/resource-page-template', key: 'page-templates/resource-page-template' },
		{ text: 'Tutorial Page Template', slug: 'page-templates/tutorial-page-template', key: 'page-templates/tutorial-page-template' },

	{ text: 'Tutorials', header: true, type: 'learn', key: 'tutorials' },
		{ text: 'Build a Blog', slug: 'tutorial/0-introduction', key: 'blog-tutorial' },
		// { text: 'Thinking with Islands', slug: 'tutorial/0-introduction', key: 'island-tutorial' },

	{ text: 'Misc.', header: true, type: 'learn', key: 'tutorials' },
		{ text: 'Our Brand Partners', slug: 'our-brand-partners', key: 'our-brand-partners' },
		{ text: 'Recent Achievements', slug: 'recent-achievements', key: 'recent-achievements' },
		{ text: 'FAQ’s', slug: 'faqs', key: 'faqs' },

	//RESOURCES SECTION
	{ text: 'Resources', header: true, type: 'api', key: 'resources' },
	{
		text: 'Configuration',
		slug: 'reference/configuration-reference',
		key: 'reference/configuration-reference',
	},
	{ text: 'Runtime API', slug: 'reference/api-reference', key: 'reference/api-reference' },
	{
		text: 'Integrations API',
		slug: 'reference/integrations-reference',
		key: 'reference/integrations-reference',
	},
	{ text: 'Adapter API', slug: 'reference/adapter-reference', key: 'reference/adapter-reference' },
	{
		text: 'Image Service API',
		slug: 'reference/image-service-reference',
		key: 'reference/image-service-reference',
	},
	{
		text: 'Template Directives',
		slug: 'reference/directives-reference',
		key: 'reference/directives-reference',
	},
	{ text: 'The Astro CLI', slug: 'reference/cli-reference', key: 'reference/cli-reference' },
	{
		text: 'Error Reference',
		slug: 'reference/error-reference',
		key: 'reference/error-reference',
	},
	{ text: 'NPM Package Format', slug: 'reference/publish-to-npm', key: 'guides/publish-to-npm' },
] as const;
