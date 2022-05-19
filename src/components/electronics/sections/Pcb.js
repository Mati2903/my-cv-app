import React, { useRef } from "react";
import useIntersection from "../../useIntersection";

const Pcb = () => {
	const ref = useRef();
	const inViewport = useIntersection(ref, "-10px");

	if (ref.current) {
		if (inViewport) {
			ref.current.classList.add("active");
			document
				.querySelector(".electronics-section__elements-article")
				.classList.add("active");
		} else {
			ref.current.classList.remove("active");
			document
				.querySelector(".electronics-section__elements-article")
				.classList.remove("active");
		}
	}

	return (
		<>
			<section className="electronics-section">
				<div className="electronics-section__div">
					<div className="electronics-section__elements" ref={ref}></div>
					<article className="electronics-section__elements-article">
						Diagnostyka elektroniki
						<p className="electronics-section__elements-paragraph">
							Pomiary elektryczne i diagnostyka usterek układów elektronicznych,
							<br />
							obsługa miernika i oscyloskopu
						</p>
					</article>
				</div>
			</section>
		</>
	);
};

export default Pcb;
