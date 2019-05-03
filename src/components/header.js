import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
	<header>
		<Link to="/" className="site-title">
			{siteTitle}
		</Link>
		<Link to="/about" className="internal-link" activeClassName="active-link">
			About me
		</Link>
	</header>
)

Header.defaultProps = {
	siteTitle: ``,
}

Header.propTypes = {
	siteTitle: PropTypes.string,
}

export default Header
