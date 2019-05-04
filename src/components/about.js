import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FormattedText } from "./formattedText"

const About = () => (
	<StaticQuery
		query={graphql`
			query {
				l10NJson {
					about {
						title
						addendum
						summary
						details {
							title
							text
						}
					}
				}
			}
		`}
		render={({ l10NJson }) => (
			<section className="about">
				<h2>{l10NJson.about.title}</h2>
				<div className="about-grid">
					<div className="about-details">
						{l10NJson.about.details.map(paragraph => (
							<section key={paragraph.title}>
								<h4><strong>{paragraph.title}</strong></h4>
								<FormattedText 
									className="meta" 
									text={paragraph.text} />
							</section>
						))}
					</div>
					<aside>
						<h4><strong>Other than that ...</strong></h4>
						<FormattedText
							className="meta"
							text={l10NJson.about.addendum} />
					</aside>
				</div>
			</section>
		)}
	/>
)

export default About
