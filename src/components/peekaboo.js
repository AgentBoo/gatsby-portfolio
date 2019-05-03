import React, { useState } from "react"

const faces = [":D", "^_^", "*w*", "@_@"]

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
