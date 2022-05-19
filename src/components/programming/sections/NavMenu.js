import React from "react";
import {
	IoLogoHtml5,
	IoLogoCss3,
	IoLogoJavascript,
	IoLogoNodejs,
} from "react-icons/io";
import { DiReact } from "react-icons/di";
import { Link } from "react-scroll";
import useIntersection from "../../useIntersection";

const NavMenu = () => {
	return (
		<nav>
			<Link
				to="html"
				spy={true}
				smooth={true}
				offset={0}
				duration={150}
				className="nav-link html"
				activeClass="active"
			>
				<IoLogoHtml5 />
			</Link>
			<Link
				to="css"
				spy={true}
				smooth={true}
				offset={0}
				duration={150}
				className="nav-link css"
				activeClass="active"
			>
				<IoLogoCss3 />
			</Link>
			<Link
				to="javascript"
				spy={true}
				smooth={true}
				duration={150}
				className="nav-link javascript"
				activeClass="active"
			>
				<IoLogoJavascript />
			</Link>
			<Link
				to="react"
				spy={true}
				smooth={true}
				duration={150}
				className="nav-link react"
				activeClass="active"
			>
				<DiReact />
			</Link>
			<Link
				to="node"
				spy={true}
				smooth={true}
				duration={150}
				className="nav-link node"
				activeClass="active"
			>
				<IoLogoNodejs />
			</Link>
		</nav>
		// <nav>
		// 	<a
		// 		href="#html"
		// 		onClick={() => setActiveNav("#html")}
		// 		className={activeNav === "#html" ? "active" : ""}
		// 	>
		// 		<IoLogoHtml5 />
		// 	</a>

		// 	<a
		// 		href="#css"
		// 		onClick={() => setActiveNav("#css")}
		// 		className={activeNav === "#css" ? "active" : ""}
		// 	>
		// 		<IoLogoCss3 />
		// 	</a>
		// 	<a
		// 		href="#javascript"
		// 		onClick={() => setActiveNav("#javascript")}
		// 		className={activeNav === "#javascript" ? "active" : ""}
		// 	>
		// 		<IoLogoJavascript />
		// 	</a>
		// 	<a
		// 		href="#react"
		// 		onClick={() => setActiveNav("#react")}
		// 		className={activeNav === "#react" ? "active" : ""}
		// 	>
		// 		<DiReact />
		// 	</a>
		// 	<a
		// 		href="#node"
		// 		onClick={() => setActiveNav("#node")}
		// 		className={activeNav === "#node" ? "active" : ""}
		// 	>
		// 		<IoLogoNodejs />
		// 	</a>
		// </nav>
	);
};

export default NavMenu;
