import addButton from "../../assets/add__button.svg";

export default function ProfileAddButton() {
	return (
		<button className="main__profile-add-button" id="addButton">
			<img
				className="main__profile-add-button-img"
				src={addButton}
				alt="add button"
			/>
		</button>
	);
}
