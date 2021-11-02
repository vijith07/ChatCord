module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{html,png,css,js,json}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'public/sw.js'
};