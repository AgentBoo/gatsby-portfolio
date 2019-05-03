import React from "react"
import PropTypes from "prop-types"
import { noop } from "../utils"

const Button = ({ variant, disabled, onClick, children }) => (
	<button
		type="button"
		className={`button ${variant}`}
		disabled={disabled}
		onClick={disabled ? noop : onClick}>
		{children}
	</button>
)

Button.defaultProps = {
	variant: "primary",
	disabled: false,
	onClick: noop,
}

Button.propTypes = {
	variant: PropTypes.string,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
	children: PropTypes.node.isRequired,
}

export { Button }
