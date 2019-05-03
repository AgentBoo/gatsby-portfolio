import React, { useState } from "react"
import PropTypes from "prop-types"
import { useTransition, animated, config } from "react-spring"
import { FormattedText } from "./formattedText"
import { Button } from "./button"
import { Glyph } from "./glyph"

const Gallery = ({ projects }) => {
	let [min, max] = [0, projects.length - 1]
	let [page, setPage] = useState(min)

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
			<div className="gallery-preview">
				{transitions.map(({ item, props, key }) => (
					<animated.div key={key} style={props}>
						<div className="preview">
							<h6>
								<a href={item.url}>{item.title}</a>
							</h6>
						</div>
					</animated.div>
				))}
			</div>
			
			<div className="gallery-comment">
				<h6 className="title">{projects[page].title}</h6>
				<FormattedText className="meta" text={projects[page].text} />
			</div>

			<div className="gallery-controls">
					{/* prettier-ignore */}
					<Button
						variant="round"
						disabled={page <= min}
						onClick={prevPage}>
						<Glyph glyph="long-arrow-alt-left" />
					</Button>
					{/* prettier-ignore */}
					<Button 
						variant="round" 
						disabled={page >= max} 
						onClick={nextPage}>
						<Glyph glyph="long-arrow-alt-right" />
					</Button>
				</div>
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
