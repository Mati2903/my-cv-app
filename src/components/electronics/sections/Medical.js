import React, { useRef } from "react";
import useIntersection from "../../useIntersection";

const Medical = () => {
	const ref = useRef();
	const inViewport = useIntersection(ref, "-10px");

	if (ref.current) {
		if (inViewport) {
			ref.current.classList.add("active");
			document
				.querySelector(".electronics-section__medical-article")
				.classList.add("active");
		} else {
			ref.current.classList.remove("active");
			document
				.querySelector(".electronics-section__medical-article")
				.classList.remove("active");
		}
	}

	return (
		<>
			<section className="electronics-section">
				<div className="electronics-section__div">
					<div className="electronics-section__medical" ref={ref}></div>
					<article className="electronics-section__medical-article">
						Aparatura medyczna
						<p className="electronics-section__medical-paragraph">
							Diagnostyka, naprawa oraz przeglądy techniczne urządzeń
							<br />w placówkach medycznych na terenie kraju
						</p>
					</article>
				</div>
			</section>
		</>
	);
};

export default Medical;
