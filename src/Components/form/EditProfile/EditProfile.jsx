import { useState, useContext } from "react";
import { CurrentUserContext } from "../../../context/CurrentUserContext";

export default function EditProfile({ props }) {
	const handleClosePopup = props;
	const userContext = useContext(CurrentUserContext);
	const { currentUser, handleUpdateUser } = userContext;
	const [userName, setUserName] = useState(currentUser.name);
	const [userAbout, setUserAbout] = useState(currentUser.about);

	const handleChangeName = (e) => {
		setUserName(e.target.value);
	};
	const handleChangeAbout = (e) => {
		setUserAbout(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleUpdateUser({ name: userName, about: userAbout });
		handleClosePopup();
	};

	return (
		<form
			name="edit-form"
			className="popup__form"
			id="edit-form"
			noValidate
			onSubmit={handleSubmit}
		>
			<label>
				<input
					name="edit-name"
					id="edit-name"
					type="text"
					className="popup__input popup__input-name"
					placeholder="Nombre"
					required
					minLength="2"
					maxLength="40"
					value={userName}
					onChange={handleChangeName}
				/>
				<span id="inputAddTitle-error" className="inputAddTitle-error">
					Error
				</span>
			</label>

			<label>
				<input
					name="edit-about"
					id="edit-about"
					className="popup__input popup__input-about"
					placeholder="Descripción"
					required
					type="text"
					minLength="2"
					maxLength="200"
					value={userAbout}
					onChange={handleChangeAbout}
				/>
				<span id="inputAddlink-error" className="inputAddlink-error">
					Error
				</span>
			</label>
			<button type="submit" className="button " id="formEditButtonSave">
				Guardar
			</button>
		</form>
	);
}
