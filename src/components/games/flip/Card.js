const Card = ({ color, isFlipped, handleClick }) => {
	return (
		<div
			className={`flip-card ${isFlipped ? color : "hidden"}`}
			onClick={handleClick}
		/>
	);
};

export default Card;
