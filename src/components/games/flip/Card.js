const Card = ({ color, isFlipped, handleClick }) => (
	<div
		className={`flip-card ${isFlipped ? color : "hidden"}`}
		onClick={handleClick}
	/>
);

export default Card;
