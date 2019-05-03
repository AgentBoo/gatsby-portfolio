import React from "react"
import { Layout, SEO } from "../components"
import { About } from "../components"

import "./about.css"

const AboutPage = () => (
	<Layout>
		<SEO title="ZH" keywords={[`react`, `about`, `han`, `hanova`]} />
		<About />
	</Layout>
)

export default AboutPage
