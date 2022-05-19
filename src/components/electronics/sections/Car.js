import React, { useRef } from "react";
import useIntersection from "../../useIntersection";

const Car = () => {
	const ref = useRef();
	const inViewport = useIntersection(ref, "-10px");

	if (ref.current) {
		if (inViewport) {
			ref.current.classList.add("active");
			document
				.querySelector(".electronics-section__car-article")
				.classList.add("active");
		} else {
			ref.current.classList.remove("active");
			document
				.querySelector(".electronics-section__car-article")
				.classList.remove("active");
		}
	}

	return (
		<>
			<section className="electronics-section">
				<div className="electronics-section__div">
					<div className="electronics-section__car" ref={ref}></div>
					<article className="electronics-section__car-article">
						Pojazdy samochodowe
						<p className="electronics-section__car-paragraph">
							Diagnostyka komputerowa, diagnostyka usterek mechanicznych i
							elektronicznych, <br />
							uprawnienia diagnosty samochodowego
						</p>
					</article>
				</div>
			</section>
		</>
	);
};

export default Car;
