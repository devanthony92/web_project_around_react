import perfilPhoto from "../../assets/image.jpg";
import photoEdit from "../../assets/Vector.png";

export default function ProfilePhoto() {
	const profilePhoto = {
		id: "avatar",
		className: "main__profile-photo",
		src: perfilPhoto,
		alt: "profile photo",
	};

	const editButton = {
		id: "avatarEditIcon",
		className: "main__profile-photo-edit-icon",
		src: photoEdit,
		alt: "edit icon",
	};

	return (
		<div className="main__profile-photo-container">
			<img
				id={profilePhoto.id}
				className={profilePhoto.className}
				src={profilePhoto.src}
				alt={profilePhoto.alt}
			/>

			<div className="main__profile-photo-edit">
				<img
					id={editButton.id}
					className={editButton.className}
					src={editButton.src}
					alt={editButton.alt}
				/>
			</div>
		</div>
	);
}
