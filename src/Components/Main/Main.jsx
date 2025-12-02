import { useState, useEffect, useContext } from "react";
import ProfileAddButton from "./Profile/ProfileAddButton";
import ProfilePhoto from "./Profile/ProfilePhoto";
import ProfileInfo from "./Profile/ProfileInfo";
import Popup from "./Popup/Popup";
import NewCard from "../form/NewCard/NewCard";
import EditAvatar from "../form/EditAvatar/EditAvatar";
import EditProfile from "../form/EditProfile/EditProfile";
import Card from "../Card/Card";
import ImagePopup from "../ImagePopup/ImagePopup";
import RemoveCard from "../RemoveCard/RemoveCard";
import { CurrentUserContext } from "../../context/CurrentUserContext";

export default function Main({ cards }) {
	const [popup, setPopup] = useState(null);
	const { currentUser, handleDeletePopup } = useContext(CurrentUserContext);

	const newCardPopup = {
		title: "Nuevo Lugar",
		children: <NewCard props={handleClosePopup} />,
	};
	const user = {
		title: "Editar Perfil",
		children: <EditProfile props={handleClosePopup} />,
	};
	const avatar = {
		title: "Cambiar foto de perfil",
		children: <EditAvatar props={handleClosePopup} />,
	};

	function handleOpenPopup(popup) {
		setPopup(popup);
	}
	function handleClosePopup() {
		setPopup(null);
	}

	function confirmDelete(id) {
		const removeCard = {
			title: "¿Realmente desea eliminar?",
			children: <RemoveCard confirmDelete={() => handleDelete(id)} />,
			id: id,
		};
		setPopup(removeCard);
	}

	function handleDelete(id) {
		handleDeletePopup(id);
		setPopup(null);
	}
	return (
		<main className="main">
			<div className="main__container">
				<ProfilePhoto
					onOpen={() => handleOpenPopup(avatar)}
					avatar={currentUser.avatar}
				/>
				<ProfileInfo onOpen={() => handleOpenPopup(user)} user={currentUser} />
				<ProfileAddButton onOpen={() => handleOpenPopup(newCardPopup)} />
				{popup && (
					<Popup onClose={handleClosePopup} title={popup.title}>
						{popup.children}
					</Popup>
				)}
			</div>
			<ul className="cards__list">
				{cards.map((card) => (
					<Card
						key={card._id}
						card={card}
						onOpen={() =>
							handleOpenPopup({
								children: <ImagePopup props={card} />,
							})
						}
						onDelete={() => confirmDelete(card._id)}
					/>
				))}
			</ul>
		</main>
	);
}
