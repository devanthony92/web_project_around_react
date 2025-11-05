import { useState } from "react";
import "./Styles/fonts.css";
import "./Styles/Page.css";
import Header from "./Components/Header/Header.jsx";
import Main from "./Components/Main/Main.jsx";
import Elements from "./Components/Elements/Elements.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
	return (
		<div className="page__content">
			<Header />
			<Main />
			<Elements />
			<Footer />
		</div>
	);
}

export default App;
