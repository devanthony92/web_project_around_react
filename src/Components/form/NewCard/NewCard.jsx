export default function NewCard() {
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
				/>
				<span id="inputAddlink-error" className="inputAddlink-error">
					Error
				</span>
			</label>
			<button
				disabled
				id="save-card-form"
				type="submit"
				className="button button_disabled"
			>
				Crear
			</button>
		</form>
	);
}
