import React from "react"
import { Layout, SEO } from "../components"

import "../styles/404.css"

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not found" />
		<h1 className="title">NOT FOUND</h1>
		<p>Uh oh, you just hit a route that doesn&#39;t exist...</p>
	</Layout>
)

export default NotFoundPage
