import addButton from "../../../assets/images/add__button.svg";

export default function ProfileAddButton(props) {
	const { onOpen } = props;

	return (
		<button
			aria-label="Add Card"
			className="main__profile-add-button"
			id="addButton"
			onClick={onOpen}
		>
			<img
				className="main__profile-add-button-img"
				src={addButton}
				alt="add button"
			/>
		</button>
	);
}
