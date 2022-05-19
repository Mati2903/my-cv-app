import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

function HomeButton() {
	let navigate = useNavigate();

	function handleClick() {
		navigate("/");
	}

	return (
		<button className="back__button" onClick={handleClick}>
			<IoIosArrowBack />
			Strona główna
		</button>
	);
}

export default HomeButton;
