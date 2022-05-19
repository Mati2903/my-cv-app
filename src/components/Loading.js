import React, { useEffect } from "react";

const Loading = () => {
	// const [isLoading, setIsLoading] = useState(true);

	// window.onload = () => {
	// 	setIsLoading(false);
	// };

	//document.readyState === "complete"

	// const fetchComponents = async () => {
	// 	try {
	// 		const response = await fetch(
	// 			(window.onload = () => {
	// 				if (document.querySelector(".loading")) {
	// 					document.querySelector(".loading").style.display = "none";
	// 				}
	// 			})
	// 		);
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// };

	// useEffect(() => {
	// 	fetchComponents();
	// });

	return (
		<div className="loading">
			<div className="spinner">
				<div className="spinner__content"></div>
			</div>
			<h1 className="loading__text">Wczytywanie</h1>
		</div>
	);
};

export default Loading;
