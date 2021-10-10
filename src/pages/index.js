import * as React from "react";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "@wordpress/block-library/build-style/style.css";
import "../styles/global.scss";

import Layout from "../components/layout";

// Query WP data - title and slug
export const pageQuery = graphql`
	query {
		allWpPost(sort: { fields: [date] }) {
			nodes {
				title
				slug
			}
		}
	}
`;
const IndexPage = ({ data }) => {
	return (
		<Layout pageTitle="Home">
			<h1>BubbleTea is Awesome</h1>
			<p>Prove me wrong</p>
			<StaticImage
				alt="Row of bubble teas"
				src="https://idsb.tmgrup.com.tr/ly/uploads/images/2021/07/23/130415.jpg"
			/>
			<Link to="/about">About</Link>
			<h4>Posts</h4>
			{data.allWpPost.nodes.map((node) => (
				<div key={node.slug}>
					<Link to={node.slug}>
						<p>{node.title}</p>
					</Link>
				</div>
			))}
		</Layout>
	);
};

export default IndexPage;
