import React from "react"
import { Layout, SEO } from "../components"
import { Introduction, Projects, Social, Updates } from "../components"

import "./index.css"

const IndexPage = () => (
	<Layout>
		<SEO title="ZH" keywords={[`react`, `zh`, `zuzka`, `han`, `hanova`]} />
		<Introduction />
		<Updates />
		<Social />
		<Projects />
	</Layout>
)

export default IndexPage
