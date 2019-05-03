import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Peekaboo from "./peekaboo"

const Header = ({ siteTitle }) => (
	<header>
		<h3>
			<Link to="/">{siteTitle}</Link>
		</h3>
		<Peekaboo />
	</header>
)

Header.defaultProps = {
	siteTitle: ``,
}

Header.propTypes = {
	siteTitle: PropTypes.string,
}

export default Header
