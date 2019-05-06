/**
 * Social component queries for social media links
 * and a resume pdf file with Gatsby's StaticQuery
 * component
 *
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Social = () => (
	<StaticQuery
		query={graphql`
			query {
				l10NJson {
					social {
						title
						links {
							name
							url
						}
					}
				}
				file(relativePath: { eq: "res.pdf" }) {
					publicURL
				}
			}
		`}
		render={({ l10NJson, file }) => (
			<section className="index-social">
				<ul className="list-inline">
					<li>
						<h3 className="pigment">{l10NJson.social.title}</h3>
					</li>
					{l10NJson.social.links.map(method => (
						<li key={method.name}>
							<h3>
								<a href={method.url} target="__blank">
									{method.name}
								</a>
							</h3>
						</li>
					))}
					<li>
						<h3>
							<a href={file.publicURL} target="__blank">
								resume
							</a>
						</h3>
					</li>
				</ul>
			</section>
		)}
	/>
)

export default Social
