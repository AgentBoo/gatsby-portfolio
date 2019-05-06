/**
 * Updates component queries for content about
 * what I'm currently doing in life with Gatsby's
 * StaticQuery component
 *
 */

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
						details
					}
				}
			}
		`}
		render={({ l10NJson, file }) => (
			<section className="index-updates">
				<ul className="list-block">
					{l10NJson.updates.details.map((text, index) => (
						<li key={index}>
							<FormattedText key={text} type="h3" text={text} />
						</li>
					))}
					<li>
						<h3>
							Other than that, I am learning how to play{" "}
							<a href="http://beatsaber.com/">Beat Saber</a> on Expert mode.
						</h3>
					</li>
					<li>
						<h3>
							You know. Because it's <strong>awesome.</strong>
						</h3>
					</li>
				</ul>
				<span>{" (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧"}</span>
			</section>
		)}
	/>
)

export default Updates
