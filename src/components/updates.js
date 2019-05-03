import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FormattedText } from "./formattedText"

const Updates = () => (
	<StaticQuery
		query={graphql`
			query {
				l10NJson {
					updates {
						title
						learning
					}
				}

				file(relativePath: { eq: "res.pdf" }) {
					publicURL
				}
			}
		`}
		render={({ l10NJson, file }) => (
			<section className="updates">
				<h5 className="title pigment">{l10NJson.updates.title}</h5>
				<ul className="list-block">
					{l10NJson.updates.learning.map(text => (
						<li className="meta">
							<FormattedText key={text} type="span" text={text} />
						</li>
					))}
					<li className="meta">
						<span>
							Other than that, I am learning how to play{" "}
							<a href="http://beatsaber.com/">Beat Saber</a> on Expert mode. You
							know. Because it's awesome.
						</span>
					</li>
					<li>
						<span className="meta">{"(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧"}</span>
					</li>
				</ul>
			</section>
		)}
	/>
)

export default Updates
