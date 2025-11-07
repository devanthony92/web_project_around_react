import { useEffect } from "react";

export default function Card(props) {
	const { onOpen, onDelete } = props;
	const { name, link, isLiked } = props.card;

	useEffect(() => {
		//console.log("componente montado");

		return () => {
			//console.log("componente desmontado");
		};
	}, []);

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
				<button aria-label="Like card" type="button" className="card__like" />
			</div>
		</li>
	);
}
