import { useEffect, useState } from "react";
import api from "../../utils/Api";

export default function Card(props) {
	const { onOpen, onDelete } = props;
	const { name, link, isLiked } = props.card;
	const [Like, setIsLiked] = useState(isLiked);

	async function handleCardLike() {
		await api.isLiked(props.card._id, Like);
		setIsLiked(!Like);
	}

	return (
		<li className="card">
			<img className="card__img" src={link} onClick={onOpen} />
			<button
				aria-label="Delete card"
				type="button"
				className="card__delete"
				onClick={onDelete}
			/>
			<div className="card__description">
				<h3 className="card__name">{name}</h3>
				<button
					aria-label="Like card"
					type="button"
					className={`card__like ${Like ? "card__like_active" : ""}`}
					onClick={handleCardLike}
				/>
			</div>
		</li>
	);
}
