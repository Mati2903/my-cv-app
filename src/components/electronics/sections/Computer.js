import React, { useRef } from "react";
import useIntersection from "../../useIntersection";

const Computer = () => {
	const ref = useRef();
	const inViewport = useIntersection(ref, "-10px");

	if (ref.current) {
		if (inViewport) {
			ref.current.classList.add("active");
			document
				.querySelector(".electronics-section__computer-article")
				.classList.add("active");
		} else {
			ref.current.classList.remove("active");
			document
				.querySelector(".electronics-section__computer-article")
				.classList.remove("active");
		}
	}

	return (
		<>
			<section className="electronics-section">
				<div className="electronics-section__div">
					<div className="electronics-section__computer" ref={ref}></div>
					<article className="electronics-section__computer-article">
						Obsługa komputera
						<p className="electronics-section__computer-paragraph">
							System Windows/macOS; programy MS Office, Autodesk Eagle, Visual
							Studio Code
						</p>
					</article>
				</div>
			</section>
		</>
	);
};

export default Computer;

// Element.offsetTop - daje odległość od górnej krawędzi w px
//element.getPropertyValue("block-size") daje wysokość elementu
