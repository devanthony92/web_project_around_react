import editButton from "../../assets/edit__button.svg";

export default function ProfileInfo() {
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
				<button className="main__profile-edit" id="editButton">
					<img src={editButton} alt="edit button" />
				</button>
			</div>
			<h4 className="main__profile-profesion" id="profileProfesion">
				{user.profession}
			</h4>
		</div>
	);
}
