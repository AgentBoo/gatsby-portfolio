import React, { useState } from "react"
import PropTypes from "prop-types"
import { useTransition, animated, config } from "react-spring"
import { FormattedText } from "./formattedText"
import { Button } from "./button"
import { Glyph } from "./glyph"

const Gallery = ({ title, projects }) => {
	let [min, max] = [0, projects.length - 1]
	let [page, setPage] = useState(min)

	function selectPage(page) {
		setPage(page)
	}

	function prevPage() {
		setPage(page - 1)
	}

	function nextPage() {
		setPage(page + 1)
	}

	const transitions = useTransition(projects[page], item => item.title, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0, display: "none" },
		config: config.molasses,
	})

	return (
		<div className="gallery">
			<ul className="list-inline">
				<li>
					<ul className="list-inline">
						{projects.map(project => (
							<li key={project.title}>
								<h3
									className={
										project.title == projects[page].title
											? "pigment"
											: "default"
									}
									onClick={selectPage}>
									<a href={project.url} target="__blank">
										{project.title}
									</a>
								</h3>
							</li>
						))}
					</ul>
				</li>
				<li className="gallery-controls">
					<Button variant="round" disabled={page <= min} onClick={prevPage}>
						<Glyph glyph="long-arrow-alt-left" />
					</Button>
					<Button variant="round" disabled={page >= max} onClick={nextPage}>
						<Glyph glyph="long-arrow-alt-right" />
					</Button>
				</li>
				<li>
					{transitions.map(({ item, props, key }) => (
						<animated.div key={key} style={props}>
							<div className="gallery-description meta">
								<FormattedText text={item.text} />
								<ul className="list-inline">
									<li>
										<a href={item.repo} target="__blank">
											demo
										</a>
									</li>
									<li>
										<a href={item.repo} target="__blank">
											repo
										</a>
									</li>
								</ul>
							</div>
						</animated.div>
					))}
				</li>
			</ul>
		</div>
	)
}

Gallery.defaultProps = {
	projects: [{}],
}

Gallery.propTypes = {
	projects: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			text: PropTypes.string,
			url: PropTypes.string,
		})
	),
}

export default Gallery
