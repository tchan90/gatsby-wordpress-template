import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

// Query WP data - title and content
export const query = graphql`
	query ($slug: String!) {
		allWpPost(filter: { slug: { eq: $slug } }) {
			nodes {
				title
				content
			}
		}
	}
`;

export default function BlogPost({ data }) {
	const post = data.allWpPost.nodes[0];
	console.log(post);
	return (
		<Layout>
			<div>
				<h1>{post.title}</h1>
				<div dangerouslySetInnerHTML={{ __html: post.content }} />
			</div>
		</Layout>
	);
}
