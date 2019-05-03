import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Peekaboo } from "./peekaboo"

const Header = ({ siteTitle }) => (
	<header>
		<nav className="nav-links">
			<Link 
				to="/" 
				className="site-title">
				{siteTitle}
			</Link>
			<Link
				to="/about"
				className="nav-link title"
				activeClassName="nav-link-active">
				<strong>About</strong>
			</Link>
		</nav>
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
