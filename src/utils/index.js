import React from "react"
import reactStringReplace from "react-string-replace"

const regex = /_([^_\s]+[^_]*)_/gm

export function touchUp(text, tag, className = "pigment") {
	const Tag = tag

	return reactStringReplace(text, regex, (match, i) => (
		<Tag key={match + i} className={className}>
			{match}
		</Tag>
	))
}

export function noop() {
	return {}
}