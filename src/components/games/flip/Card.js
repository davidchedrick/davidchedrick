// import "./memoryGame.css";

// function Card({ card, index, handleCardClick, showCards }) {
// 	let showCard;

// 	return (
// 		<div
// 			onClick={() => handleCardClick(card, index)}
// 			className={`flip-card ${card} hidden`}
// 		></div>
// 	);
// }

// export default Card;

function Card({ card, onFlip }) {
	const handleClick = () => {
		if (!card.isFlipped && !card.isMatched) {
			onFlip(card);
		}
	};

	return (
		<div
			className={`Card ${
				card.isFlipped || card.isMatched ? "flipped" : ""
			}`}
			onClick={handleClick}
		>
			<div className="front" />
			<div className="back">{card.value}</div>
		</div>
	);
}

export default Card;
