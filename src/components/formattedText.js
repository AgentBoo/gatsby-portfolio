import React from "react"
import PropTypes from "prop-types"
import reactStringReplace from "react-string-replace"

export function touchUp(text, className) {
	const regex = /_([^_\s]+[^_]*)_/gm
	return reactStringReplace(text, regex, (match, i) => (
		<span key={match + i} className={className}>
			{match}
		</span>
	))
}

const FormattedText = ({ text, type, className, formatClassName }) => {
	const Tag = type

	return text.split("\n").map(paragraph => (
		<Tag key={paragraph.slice(8)} className={className}>
			{touchUp(paragraph, formatClassName)}
		</Tag>
	))
}

FormattedText.defaultProps = {
	type: `p`,
	className: `default`,
	formatClassName: `pigment`
}

FormattedText.propTypes = {
	text: PropTypes.string,
	type: PropTypes.string,
	className: PropTypes.string,
	formatClassName: PropTypes.string
}

export { FormattedText }
