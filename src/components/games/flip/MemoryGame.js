import { useEffect, useState } from "react";

import "./memoryGame.css";
import Board from "./Board";

function MemoryGame() {
	const [gameID, setGameID] = useState(0);
	// const [selectedCards, setSelectedCards] = useState([]);
	// const [showCards, setShowCards] = useState([]);
	const [timeLeft, setTimeLeft] = useState(3);

	// const cards = ["red", "orange", "yellow", "green", "blue", "purple"];
	// const set = [...cards, ...cards];

	// useEffect(() => {
	// 	startGame();
	// }, []);

	// function startGame() {}

	const restartGame = () => {
		setGameID(prevID => prevID + 1);
	};

	// function handleCardClick(card, index) {
	// 	const isNotClickable =
	// 		selectedCards.includes(index) ||
	// 		selectedCards.length >= 2 ||
	// 		showCards.includes(index);

	// 	if (isNotClickable) return;

	// 	setSelectedCards([...selectedCards, index]);

	// 	setShowCards(selectedCards);
	// }

	return (
		<div className="memory-container">
			<div className="stats-container">
				<h2>Time Left: {timeLeft}</h2>
			</div>

			<div className="card-container">
				<Board key={gameID} />
				<button onClick={restartGame}>Restart Game</button>

				{/* {set.map((card, index) => {
					return (
						<Card
							key={index}
							card={card}
							index={index}
							handleCardClick={handleCardClick}
							showCards={showCards}
						/>
					);
				})} */}
			</div>
		</div>
	);
}

export default MemoryGame;
