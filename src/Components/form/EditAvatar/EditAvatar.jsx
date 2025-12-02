import { useState, useContext } from "react";
import { CurrentUserContext } from "../../../context/CurrentUserContext";

export default function EditAvatar({ props }) {
	const handleClosePopup = props;
	const userContext = useContext(CurrentUserContext);
	const { currentUser, handleUpdateAvatar } = userContext;
	const [avatar, setAvatar] = useState(currentUser.avatar);

	const handleChangeAvatar = (e) => {
		setAvatar(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		handleUpdateAvatar({ avatar });
		handleClosePopup();
	};

	return (
		<form
			name="edit-avatar-form"
			className="popup__form"
			id="edit-avatar-form"
			noValidate
			onSubmit={handleSubmit}
		>
			<label>
				<input
					name="edit-avatar"
					id="edit-avatar"
					type="text"
					className="popup__input "
					placeholder="Link para la foto de perfil"
					required
					value={avatar}
					onChange={handleChangeAvatar}
				/>
				<span id="inputAddTitle-error" className="inputAddTitle-error">
					Error
				</span>
			</label>

			<button type="submit" id="save-edit-avatar" className="button">
				Guardar
			</button>
		</form>
	);
}
