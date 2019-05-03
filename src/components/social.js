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
			<section className="social">
				<h5 className="title pigment">{l10NJson.social.title}</h5>
				<ul className="list-inline">
					{l10NJson.social.links.map(method => (
						<li key={method.name}>
							<h4>
								<a href={method.url} target="__blank">
									{method.name}
								</a>
							</h4>
						</li>
					))}
					<li>
						<h4>
							<a href={file.publicURL} target="__blank">
								resume
							</a>
						</h4>
					</li>
				</ul>
			</section>
		)}
	/>
)

export default Social
