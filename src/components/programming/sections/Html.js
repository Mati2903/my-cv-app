import React, { useRef } from "react";

import { IoLogoHtml5 } from "react-icons/io";
import useIntersection from "../../useIntersection";

const Html = () => {
	const ref = useRef();
	const inViewport = useIntersection(ref, "-10px");

	if (ref.current) {
		if (inViewport) {
			ref.current.classList.add("active");
		} else {
			ref.current.classList.remove("active");
		}
	}

	return (
		<section id="html">
			<div className="html__section" ref={ref}>
				<IoLogoHtml5 className="html__logo" />
				<div className="html__text">Znajomość HTML w wersji 5</div>
			</div>
		</section>
	);
};

export default Html;
