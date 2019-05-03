import React, { Fragment } from "react"
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
			<Fragment>
				<h2>{l10NJson.about.title}</h2>
				<section className="about">
					<div className="about-details">
						{l10NJson.about.details.map(paragraph => (
							<section key={paragraph.title}>
								<h6 className="title">{paragraph.title}</h6>
								<FormattedText className="meta" text={paragraph.text} />
							</section>
						))}
					</div>
					<aside>
						<h6 className="title">About me</h6>
						<FormattedText className="meta" text={l10NJson.about.addendum} />
					</aside>
				</section>
			</Fragment>
		)}
	/>
)

export default About
