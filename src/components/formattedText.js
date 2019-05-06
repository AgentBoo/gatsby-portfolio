/**
 * FormattedText component splits text into chunks,
 * when a newline character is encountered. Split
 * text is enclosed in a user-defined tag/element.
 * Any text flanked with underscores is replaced with
 * a <span/> styled with a user-defined css class.
 *
 */

import React from "react"
import PropTypes from "prop-types"
import reactStringReplace from "react-string-replace"

// See: https://github.com/iansinnott/react-string-replace

function touchUp(text, className) {
	const regex = /_([^_\s]+[^_]*)_/gm
	return reactStringReplace(text, regex, (match, i) => (
		<span key={match + i} className={className}>
			{match}
		</span>
	))
}

const FormattedText = ({ text, type, className, highlightClassName }) => {
	const Tag = type

	return text.split("\n").map(paragraph => (
		<Tag key={paragraph.slice(8)} className={className}>
			{touchUp(paragraph, highlightClassName)}
		</Tag>
	))
}

FormattedText.defaultProps = {
	type: `p`,
	className: `default`,
	formatClassName: `pigment`,
}

FormattedText.propTypes = {
	text: PropTypes.string,
	type: PropTypes.string,
	className: PropTypes.string,
	formatClassName: PropTypes.string,
}

export { FormattedText }
