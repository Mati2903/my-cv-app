import { Link } from "react-router-dom";
import Loading from "./components/Loading";

const StartingPage = () => {
	return (
		<>
			<div className="chooseWindow">
				<h1 className="chooseWindow__title">Wybierz dziedzinę</h1>
				<section className="electronics">
					<div className="electronics__image"></div>
					<div className="electronics__button">
						<Link to="/elektronika">
							<button className="electronics__choose">ELEKTRONIKA</button>
						</Link>
					</div>
				</section>
				<section className="programming">
					<div className="programming__image"></div>
					<div className="programming__button">
						<Link to="/programowanie">
							<button className="programming__choose">PROGRAMOWANIE</button>
						</Link>
					</div>
				</section>
			</div>
		</>
	);
};

export default StartingPage;
