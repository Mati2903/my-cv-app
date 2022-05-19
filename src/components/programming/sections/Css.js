import React, { useRef } from "react";
import { IoLogoCss3, IoLogoSass } from "react-icons/io";
import useIntersection from "../../useIntersection";

const Css = () => {
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
		<section id="css">
			<div className="css__section" ref={ref}>
				<div className="css__about">
					<p className="css__text">Znajomość CSS w wersji 3</p>
					<IoLogoCss3 className="css__logo" />
				</div>
				<div className="sass__about">
					<IoLogoSass className="sass__logo" />
					<p className="sass__text">Znajomość preprocesora SASS/SCSS</p>
				</div>
			</div>
		</section>
	);
};

export default Css;
