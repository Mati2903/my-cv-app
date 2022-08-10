import React, { Suspense } from "react";
import Loading from "../Loading";
import Back from "../Back";
import Github from "./Github";

const Html = React.lazy(() => import("./sections/Html"));
const Css = React.lazy(() => import("./sections/Css"));
const JavaScript = React.lazy(() => import("./sections/JavaScript"));
const Node = React.lazy(() => import("./sections/Node"));
const ReactJS = React.lazy(() => import("./sections/ReactJS"));
const NavMenu = React.lazy(() => import("./sections/NavMenu"));

const Programming = () => {
	return (
		<Suspense fallback={<Loading />}>
			<Back />
			<Github />
			<NavMenu />
			<Html />
			<Css />
			<JavaScript />
			<ReactJS />
			<Node />
		</Suspense>
	);
};

export default Programming;
