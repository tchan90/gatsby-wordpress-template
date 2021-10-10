import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

const AboutPage = () => {
	return (
		<Layout pageTitle="About Me">
			<p>I luuuuve bubbletea. Gimme gimme gimme</p>
			<Link to="/">Back to Home</Link>
		</Layout>
	);
};

export default AboutPage;
