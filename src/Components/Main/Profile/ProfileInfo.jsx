import editButton from "../../../assets/images/edit__button.svg";

export default function ProfileInfo(props) {
	const { onOpen } = props;
	const user = {
		name: "Jacques Cousteau",
		profession: "Explorador",
	};

	return (
		<div className="main__profile-info">
			<div className="main__profile-title">
				<h2 className="main__profile-name" id="profileName">
					{user.name}
				</h2>
				<button
					aria-label="Edit Profile"
					className="main__profile-edit"
					id="editButton"
					onClick={onOpen}
				>
					<img src={editButton} alt="edit button" />
				</button>
			</div>
			<h4 className="main__profile-profesion" id="profileProfesion">
				{user.profession}
			</h4>
		</div>
	);
}
