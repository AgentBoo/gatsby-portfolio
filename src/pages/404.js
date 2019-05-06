import React from "react"
import { Layout, SEO } from "../components"

import "./404.css"

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not found" />
		<section className="not-found">
			<h4 className="title">Not found</h4>
			<p>Uh oh, you just hit a route that doesn&#39;t exist...</p>
		</section>
	</Layout>
)

export default NotFoundPage
