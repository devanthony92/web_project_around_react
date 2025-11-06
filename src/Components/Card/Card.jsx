export default function Card(props) {
	const { onOpen } = props;
	const { name, link, isLiked } = props.card;

	return (
		<li className="card" onClick={onOpen}>
			<img className="card__img" src={link} />
			<button aria-label="Delete card" type="button" className="card__delete" />
			<div className="card__description">
				<h3 className="card__name">{name}</h3>
				<button aria-label="Like card" type="button" className="card__like" />
			</div>
		</li>
	);
}
