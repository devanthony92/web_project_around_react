import { useState, useContext } from "react";
import { CurrentUserContext } from "../../../context/CurrentUserContext";

export default function NewCard({ props }) {
	const handleClosePopup = props;
	const { handleAddPlaceSubmit } = useContext(CurrentUserContext);
	const [cardName, setCardName] = useState("");
	const [cardLink, setCardLink] = useState("");

	const handleChangeName = (e) => {
		setCardName(e.target.value);
	};
	const handleChangeLink = (e) => {
		setCardLink(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		handleAddPlaceSubmit({ name: cardName, link: cardLink });
		handleClosePopup();
	};
	return (
		<form
			name="card-form"
			className="popup__form"
			id="new-card-form"
			noValidate
		>
			<label>
				<input
					name="card-name"
					id="card-name"
					type="text"
					className="popup__input popup__input-name"
					placeholder="Titulo"
					required
					minLength="2"
					maxLength="30"
					value={cardName}
					onChange={handleChangeName}
				/>
				<span id="inputAddTitle-error" className="inputAddTitle-error">
					Error
				</span>
			</label>
			<label>
				<input
					name="link"
					id="card-link"
					className="popup__input popup__input-about"
					placeholder="Enlace a la imagen"
					required
					type="url"
					value={cardLink}
					onChange={handleChangeLink}
				/>
				<span id="inputAddlink-error" className="inputAddlink-error">
					Error
				</span>
			</label>
			<button
				id="save-card-form"
				type="submit"
				className="button"
				onClick={handleSubmit}
			>
				Crear
			</button>
		</form>
	);
}
