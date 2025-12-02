export default function RemoveCard(props) {
	const { title, confirmDelete, id } = props;

	return (
		<>
			<div className="dialog dialog__confirm">
				<button
					className="button"
					type="submit"
					id="deleteConfirmationButton"
					onClick={() => {
						confirmDelete(id);
					}}
				>
					Si
				</button>
			</div>
		</>
	);
}
