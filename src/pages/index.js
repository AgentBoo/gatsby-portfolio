import React from "react"
import { Layout, SEO } from "../components"
import { Introduction, Social, Projects, Updates } from "../components"

import "./index.css"

const IndexPage = () => (
	<Layout>
		<SEO title="ZH" keywords={[`react`, `zh`, `zuzka`, `han`, `hanova`]} />
		<Introduction />
		<Social />
		<Projects />
		<Updates />
	</Layout>
)

export default IndexPage
