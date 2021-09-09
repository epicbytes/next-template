// const withBundleAnalyzer = require("@next/bundle-analyzer")({
// 	enabled: process.env.ANALYZE === "true",
// })
const nextTranslate = require("next-translate")

module.exports = nextTranslate({
	reactStrictMode: true,
	env: {
		CUSTOMER_BASE_URL: process.env.CUSTOMER_BASE_URL,
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		})
		return config
	},
})
