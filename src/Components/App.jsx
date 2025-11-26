import { useState, useEffect } from "react";

import "../index.css";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import api from "../utils/Api.js";
import { CurrentUserContext } from "../context/CurrentUserContext";
function App() {
	const [currentUser, setCurrentUser] = useState({});
	useEffect(() => {
		const fetchUser = async () => {
			try {
				const userData = await api.getUserInfo();
				setCurrentUser(userData);
			} catch (error) {
				console.error("Error consultando datos del usuario: ", error);
			}
		};
		fetchUser();
	}, []);

	const handleUpdateUser = (data) => {
		(async () => {
			try {
				await api.setUserInfo(data).then((updatedUser) => {
					setCurrentUser(updatedUser);
				});
			} catch (error) {
				console.error("Error actualizando datos del usuario: ", error);
			}
		})();
	};
	return (
		<div className="page__content">
			<CurrentUserContext.Provider value={{ currentUser, handleUpdateUser }}>
				<Header />
				<Main />
				<Footer />
			</CurrentUserContext.Provider>
		</div>
	);
}

export default App;
