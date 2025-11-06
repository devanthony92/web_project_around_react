import perfilPhoto from "../../../assets/images/image.jpg";
import photoEdit from "../../../assets/images/Vector.png";

export default function ProfilePhoto(props) {
	const { onOpen } = props;

	return (
		<div className="main__profile-photo-container">
			<img
				id="avatar"
				className="main__profile-photo"
				src={perfilPhoto}
				alt="profile photo"
			/>

			<div
				className="main__profile-photo-edit"
				onClick={onOpen}
				aria-label="Edit Avatar"
			>
				<img
					id="edit-avatar"
					className="main__profile-photo-edit-icon"
					src={photoEdit}
					alt="edit icon"
				/>
			</div>
		</div>
	);
}
