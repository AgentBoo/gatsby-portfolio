import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Gallery from "./gallery"

const Projects = () => (
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
				<h5 className="title">{l10NJson.projects.title}</h5>
				<Gallery projects={l10NJson.projects.gallery} />
			</section>
		)}
	/>
)

export default Projects
