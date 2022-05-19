import { useRef } from "react";
import useIntersection from "../../useIntersection";
import { IoLogoJavascript } from "react-icons/io";

const JavaScript = () => {
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
		<section id="javascript">
			<div className="javascript__section" ref={ref}>
				<p className="javascript__text">Znajomość JavaScript ES6+</p>
				<IoLogoJavascript className="javascript__logo" />
			</div>
		</section>
	);
};

export default JavaScript;
