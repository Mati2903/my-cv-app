import React from "react";
import {
	IoLogoHtml5,
	IoLogoCss3,
	IoLogoJavascript,
	IoLogoNodejs,
} from "react-icons/io";
import { DiReact } from "react-icons/di";
import { Link, Button } from "react-scroll";

const NavMenu = () => {
	return (
		<nav>
			<Link
				to="html"
				spy={true}
				smooth={true}
				duration={150}
				offset={-1}
				ignoreCancelEvents={true}
				className="nav-link html"
				activeClass="active"
			>
				<IoLogoHtml5 />
			</Link>
			<Link
				to="css"
				spy={true}
				smooth={true}
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
	);
};

export default NavMenu;
