import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Loading from "./components/Loading";
import Electronics from "./components/electronics/Electronics";
import Programming from "./components/programming/Programming";
const StartingPage = React.lazy(() => import("./StartingPage"));

function App() {
	return (
		<>
			<Suspense fallback={<Loading />}>
				<Routes>
					<Route path="/" element={<StartingPage />} />
					<Route path="/elektronika" element={<Electronics />} />
					<Route path="/programowanie" element={<Programming />} />
				</Routes>
			</Suspense>
		</>
	);
}

export default App;
