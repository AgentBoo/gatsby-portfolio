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
						summary
						details {
							title
							text
						}
						addendum {
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
					<section className="about-details">
						{l10NJson.about.details.map(paragraph => (
							<article key={paragraph.title}>
								<h4>{paragraph.title}</h4>
								<FormattedText 
									className="meta" 
									text={paragraph.text} />
							</article>
						))}
					</section>
					<aside>
						<h4>{l10NJson.about.addendum.title}</h4>
						<FormattedText
							className="meta"
							text={l10NJson.about.addendum.text}
						/>
					</aside>
				</div>
			</section>
		)}
	/>
)

export default About
