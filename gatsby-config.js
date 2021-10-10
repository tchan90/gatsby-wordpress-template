module.exports = {
	siteMetadata: {
		siteUrl: "https://www.yourdomain.tld",
		title: "Gatsby & Wordpress",
	},
	plugins: [
		{
			resolve: "gatsby-source-wordpress",
			options: {
				url: "http://hold-my-bubbletea.local/graphql", // URL to fetch WP graphql here - change on Production
				schema: {
					perPage: 20, // currently set to 100
					requestConcurrency: 5, // currently set to 15
					previewRequestConcurrency: 2, // currently set to 5
				},
			},
		},
		"gatsby-plugin-sass",
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
	],
};
