import React from "react"
import {
	Layout,
	SEO,
	Introduction,
	Social,
	About,
	Projects,
} from "../components"

import "../styles/index.css"

const IndexPage = () => (
	<Layout>
		<SEO title="ZH" keywords={[`gatsby`, `application`, `react`]} />
		<div className="index-page-grid">
			<Introduction />
			<Social />
			<About />
			<Projects />
		</div>
	</Layout>
)

export default IndexPage
