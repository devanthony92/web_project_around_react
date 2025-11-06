import Header__logo from "../../assets/images/Header.png";

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
