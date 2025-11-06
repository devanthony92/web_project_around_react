export default function EditAvatar() {
	return (
		<form
			name="edit-avatar-form"
			className="popup__form"
			id="edit-avatar-form"
			noValidate
		>
			<label>
				<input
					name="edit-avatar"
					id="edit-avatar"
					type="text"
					className="popup__input "
					placeholder="Link para la foto de perfil"
					required
				/>
				<span id="inputAddTitle-error" className="inputAddTitle-error">
					Error
				</span>
			</label>

			<button type="submit" id="save-edit-avatar" class="button">
				Guardar
			</button>
		</form>
	);
}
