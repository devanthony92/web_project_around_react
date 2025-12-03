export default function ImagePopup({ props }) {
	const { link, name } = props;

	return (
		<>
			<img className="popup__image_full" src={link} alt="" />
			<h3 className="popup__nameImage">{name}</h3>
		</>
	);
}
