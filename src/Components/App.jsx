import { useState, useEffect } from "react";

import "../index.css";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import api from "../utils/Api.js";
import { CurrentUserContext } from "../context/CurrentUserContext";
function App() {
	const [currentUser, setCurrentUser] = useState({});
	const [cards, setCards] = useState([]);
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
	useEffect(() => {
		const fetchCards = async () => {
			try {
				const initialCards = await api.getInitialCards();
				setCards(initialCards);
			} catch (error) {
				console.error("Error consultando datos iniciales: ", error);
			}
		};
		fetchCards();
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

	const handleUpdateAvatar = (data) => {
		(async () => {
			try {
				await api.setUserAvatar(data).then((updatedUser) => {
					setCurrentUser(updatedUser);
				});
			} catch (error) {
				console.error("Error actualizando el avatar: ", error);
			}
		})();
	};
	const handleAddPlaceSubmit = ({ name, link }) => {
		(async () => {
			try {
				const newCard = await api.createNewCard({ name, link });
				setCards([newCard, ...cards]);
			} catch (error) {
				console.error("Error creando nueva tarjeta: ", error);
			}
		})();
	};
	const handleDeletePopup = (id) => {
		(async () => {
			try {
				setCards((prev) => prev.filter((card) => card._id !== id));
				await api.deleteCard(id);
			} catch (error) {
				console.error("Error eliminando la tarjeta: ", error);
			}
		})();
	};
	return (
		<div className="page__content">
			<CurrentUserContext.Provider
				value={{
					currentUser,
					handleUpdateUser,
					handleUpdateAvatar,
					handleAddPlaceSubmit,
					handleDeletePopup,
				}}
			>
				<Header />
				<Main cards={cards} />
				<Footer />
			</CurrentUserContext.Provider>
		</div>
	);
}

export default App;
