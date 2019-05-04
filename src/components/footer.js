import React from "react"
import PropTypes from "prop-types"

const Footer = ({ siteTitle }) => (
	<footer className="meta">
		<span>
			© {new Date().getFullYear()} {siteTitle}.
		</span>
		<span>
			This page was created with{" "}
			<a href="https://www.gatsbyjs.org/">Gatsby</a>
		</span>
	</footer>
)

Footer.defaultProps = {
	siteTitle: ``,
}

Footer.propTypes = {
	siteTitle: PropTypes.string,
}

export default Footer
