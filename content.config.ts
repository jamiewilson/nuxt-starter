import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
	studio: {
		repository: {
			provider: 'github',
			owner: 'jamiewilson',
			repo: 'nuxt-starter',
			branch: 'main',
		},
	},
	collections: {
		content: defineCollection({
			type: 'page',
			source: '**/*.md',
		}),
	},
})
