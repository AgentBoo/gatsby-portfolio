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
			}
		`}
		render={({ l10NJson, file }) => (
			<section className="updates">
				<ul className="list-block">
					{l10NJson.updates.learning.map(text => (
						<li>
							<h3>
							<FormattedText 
								key={text} 
								type="strong"
								text={text} />
								</h3>
						</li>
					))}
					<li>
						<h3>
							<strong>
							Other than that, I am learning how to play{" "}
							<a href="http://beatsaber.com/">Beat Saber</a> on Expert mode.
							</strong>
						</h3>
					</li>
					<li>
						<h3>
							 You	know. Because it's <strong>awesome.</strong>
						</h3>
					</li>
				</ul>
				<p><span>{" (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧"}</span></p>
			</section>
		)}
	/>
)

export default Updates
