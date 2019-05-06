/**
 * Glyph component uses Font Awesome icons and symbols.
 * Gatsby links to Font Awesome CDN in the <head/> of
 * the document.
 *
 */

import React from "react"
import PropTypes from "prop-types"

const Glyph = ({ glyph }) => <span className={`fas fa-${glyph}`} />

Glyph.defaultProps = {
	glyph: `heart`,
}

Glyph.propTypes = {
	glyph: PropTypes.string,
}

export { Glyph }
