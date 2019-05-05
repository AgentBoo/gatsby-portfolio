import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { useSpring, animated, config } from "react-spring"
import { FormattedText } from "./formattedText"

const Introduction = () => {
	const style = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		config: config.molasses,
	})

	return (
		<StaticQuery
			query={graphql`
				query {
					l10NJson {
						introduction {
							text
							subtext
						}
					}
				}
			`}
			render={({ l10NJson }) => (
				<section className="intro">
					<animated.div style={style}>
						<ul className="list-block">
							<li>
								<FormattedText type="h2" text={l10NJson.introduction.text} />
							</li>
							<li>
								<FormattedText type="h2" text={l10NJson.introduction.subtext} />
							</li>
						</ul>
					</animated.div>
				</section>
			)}
		/>
	)
}

export default Introduction
