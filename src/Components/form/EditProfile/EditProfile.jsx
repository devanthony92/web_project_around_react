export default function EditProfile() {
	return (
		<form name="edit-form" className="popup__form" id="edit-form" noValidate>
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
					placeholder="Acerca de mí"
					required
					type="text"
					minLength="2"
					maxLength="200"
				/>
				<span id="inputAddlink-error" className="inputAddlink-error">
					Error
				</span>
			</label>
			<button
				disabled
				type="submit"
				class="button button_disabled"
				id="formEditButtonSave"
			>
				Guardar
			</button>
		</form>
	);
}
