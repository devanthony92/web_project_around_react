import Header__logo from "../../assets/Header.png";
import "../../Styles/Header.css";

export default function Header() {
	return (
		<header className="header">
			<img
				src={Header__logo}
				className="header__logo"
				alt="Around the US logo"
			/>
		</header>
	);
}
