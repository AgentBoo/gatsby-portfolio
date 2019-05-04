import React from "react"
import PropTypes from "prop-types"
import { touchUp } from "../utils"

const FormattedText = ({ type, className, text }) => {
	const Tag = type
	return text.split("\n").map(paragraph => (
		<Tag key={paragraph.slice(8)} className={className}>
			{touchUp(paragraph, "span")}
		</Tag>
	))
}

FormattedText.defaultProps = {
	type: `p`,
	className: `default`,
}

FormattedText.propTypes = {
	type: PropTypes.string,
	className: PropTypes.string,
	text: PropTypes.string,
}

export { FormattedText }
