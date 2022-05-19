import { useRef } from "react";
import { DiReact } from "react-icons/di";
import useIntersection from "../../useIntersection";

const React = () => {
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
		<section id="react">
			<div className="react__section" ref={ref}>
				<DiReact className="react__logo" />
				<p className="react__text">Znajomość frameworka ReactJS</p>
			</div>
		</section>
	);
};

export default React;
