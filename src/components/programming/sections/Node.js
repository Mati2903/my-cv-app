import React, { useRef } from "react";
import { IoLogoNodejs } from "react-icons/io";
import useIntersection from "../../useIntersection";

const Node = () => {
	const ref = useRef();
	const inViewport = useIntersection(ref, "-100px");

	if (ref.current) {
		if (inViewport) {
			ref.current.classList.add("active");
		} else {
			ref.current.classList.remove("active");
		}
	}

	return (
		<section id="node">
			<div className="node__section" ref={ref}>
				<p className="node__text">Znajomość środowiska Node.js</p>
				<IoLogoNodejs className="node__logo" />
			</div>
		</section>
	);
};

export default Node;
