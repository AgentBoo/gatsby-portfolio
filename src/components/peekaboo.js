/**
 * Peekaboo component has 2 states:
 * 1. When user hovers over a page link, <Peekaboo/>
 * shows a face tracking the user's mouse. When user
 * no longer hovers, no face is shown.
 * 2. When user clicks on the <Peekaboo/>, make face
 * permanent. When user clicks on the <Peekaboo/>
 * again, toggle back.
 *
 */

import React, { useState } from "react"

const faces = ["uwu", "^_^", "*_*", "@_@", "0_0"]

const Peekaboo = () => {
	let [face, setFace] = useState("0_0")

	function changeFace() {
		setFace(faces[Math.floor(Math.random() * faces.length)])
	}

	function resetFace() {
		setFace("")
	}

	return (
		<div
			className="peekaboo"
			onMouseEnter={changeFace}
			onMouseLeave={resetFace}>
			<span>{face}</span>
		</div>
	)
}

export { Peekaboo }
