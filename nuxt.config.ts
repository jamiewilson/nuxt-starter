// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	content: {
		experimental: {
			sqliteConnector: 'native',
		},
	},
	devtools: {
		enabled: true,
	},
	modules: [
		'@nuxt/image',
		'@nuxt/fonts',
		'@nuxt/content',
		'@nuxt/scripts',
		'@nuxt/icon',
		'nuxt-studio',
	],
	css: ['~/assets/css/main.css'],
	studio: {
		route: '/admin',
		repository: {
			provider: 'github',
			owner: 'jamiewilson',
			repo: 'nuxt-starter',
			branch: 'main',
		},
	},
})
