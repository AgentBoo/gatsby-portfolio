import React, { useState } from "react"
import { StaticQuery, graphql } from "gatsby"
import Gallery from "./gallery"

const Projects = () => {

	return (
	<StaticQuery
		query={graphql`
			query {
				l10NJson {
					projects {
						title
						gallery {
							title
							text
							repo
							url
						}
					}
				}
			}
		`}
		render={({ l10NJson }) => (
			<section className="projects">
				<Gallery
					title={l10NJson.projects.title} 
					projects={l10NJson.projects.gallery} />
			</section>
		)}
	/>
)}

export default Projects
