import React, { useState, useEffect, Suspense } from "react";
import Loading from "../Loading";
import Back from "../Back";
const Car = React.lazy(() => import("./sections/Car"));
const Computer = React.lazy(() => import("./sections/Computer"));
const Pcb = React.lazy(() => import("./sections/Pcb"));
const Repair = React.lazy(() => import("./sections/Repair"));
const Medical = React.lazy(() => import("./sections/Medical"));

const Electronics = () => {
	return (
		<>
			<Suspense fallback={<Loading />}>
				<Back />
				<Computer />
				<Pcb />
				<Repair />
				<Medical />
				<Car />
			</Suspense>
		</>
	);
};

export default Electronics;
