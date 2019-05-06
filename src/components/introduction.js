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
							title
							subtitle
						}
					}
				}
			`}
			render={({ l10NJson }) => (
				<section className="index-intro">
					<animated.div style={style}>
						<ul className="list-block">
							<li>
								<FormattedText 
									type="h2" 
									text={l10NJson.introduction.title} />
							</li>
							<li>
								<FormattedText
									type="h2"
									text={l10NJson.introduction.subtitle}
								/>
							</li>
						</ul>
					</animated.div>
				</section>
			)}
		/>
	)
}

export default Introduction
