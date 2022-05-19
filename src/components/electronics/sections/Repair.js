import React, { useRef } from "react";
import useIntersection from "../../useIntersection";

const Repair = () => {
	const ref = useRef();
	const inViewport = useIntersection(ref, "-10px");

	if (ref.current) {
		if (inViewport) {
			ref.current.classList.add("active");
			document
				.querySelector(".electronics-section__repair-article")
				.classList.add("active");
		} else {
			ref.current.classList.remove("active");
			document
				.querySelector(".electronics-section__repair-article")
				.classList.remove("active");
		}
	}

	return (
		<>
			<section className="electronics-section">
				<div className="electronics-section__div">
					<div className="electronics-section__repair" ref={ref}></div>
					<article className="electronics-section__repair-article">
						Naprawa elektroniki
						<p className="electronics-section__repair-paragraph">
							Montaż/demontaż elementów wykonanych w technologii THT oraz SMT (w
							tym BGA), <br />
							naprawa układów elektronicznych
						</p>
					</article>
				</div>
			</section>
		</>
	);
};

export default Repair;
