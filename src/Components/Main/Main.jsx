import { useState } from "react";
import ProfileAddButton from "./Profile/ProfileAddButton";
import ProfilePhoto from "./Profile/ProfilePhoto";
import ProfileInfo from "./Profile/ProfileInfo";
import Popup from "./Popup/Popup";
import NewCard from "../form/NewCard/NewCard";
import EditAvatar from "../form/EditAvatar/EditAvatar";
import EditProfile from "../form/EditProfile/EditProfile";
import Card from "../Card/Card";

export default function Main() {
	const [popup, setPopup] = useState(null);
	const newCardPopup = { title: "Nuevo Lugar", children: <NewCard /> };
	const user = { title: "Editar Perfil", children: <EditProfile /> };
	const avatar = { title: "Cambiar foto de perfil", children: <EditAvatar /> };
	const cards = [
		{
			isLiked: false,
			_id: "5d1f0611d321eb4bdcd707dd",
			name: "Yosemite Valley",
			link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
			owner: "5d1f0611d321eb4bdcd707dd",
			createdAt: "2019-07-05T08:10:57.741Z",
		},
		{
			isLiked: false,
			_id: "5d1f064ed321eb4bdcd707de",
			name: "Lake Louise",
			link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
			owner: "5d1f0611d321eb4bdcd707dd",
			createdAt: "2019-07-05T08:11:58.324Z",
		},
	];
	function handleOpenPopup(popup) {
		setPopup(popup);
	}
	function handleClosePopup() {
		setPopup(null);
	}
	return (
		<main className="main">
			<div className="main__container">
				<ProfilePhoto onOpen={() => handleOpenPopup(avatar)} />
				<ProfileInfo onOpen={() => handleOpenPopup(user)} />
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
						onOpen={() => handleOpenPopup(imagen)}
					/>
				))}
			</ul>
		</main>
	);
}
