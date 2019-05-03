import React from "react"
import PropTypes from "prop-types"

const Glyph = ({ glyph }) => <span className={`fas fa-${glyph}`} />

Glyph.defaultProps = {
	glyph: "heart",
}

Glyph.propTypes = {
	glyph: PropTypes.string,
}

export { Glyph }
