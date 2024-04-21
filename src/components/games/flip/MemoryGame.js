import { useEffect, useState, useCallback } from "react";
import Card from "./Card";
import "./memoryGame.css";
import Timer from "./Timer";
import { useMemo } from "react";

const CARD_COLORS = ["red", "orange", "yellow", "green", "blue", "purple"];

function MemoryGame() {
	const [gameStarted, setGameStarted] = useState(false);
	const [gameWon, setGameWon] = useState(false);
	const [gameOver, setGameOver] = useState(false);
	const [timerSeconds, setTimerSeconds] = useState(60);
	const [shuffledCards, setShuffledCards] = useState([]);
	const [selectedCardIndexes, setSelectedCardIndexes] = useState([]);

	const doubledCards = useMemo(() => [...CARD_COLORS, ...CARD_COLORS], []);

	const restartGame = useCallback(() => {
		const shuffledWithIds = doubledCards
			.map(color => ({ color, id: Math.random() }))
			.sort(() => 0.5 - Math.random());
		setShuffledCards(shuffledWithIds);
		setSelectedCardIndexes([]);
		setGameWon(false);
		setGameOver(false);
		setTimerSeconds(60);
	}, [doubledCards]);

	useEffect(() => {
		if (!gameStarted) return;
		restartGame();
	}, [gameStarted, restartGame]);

	const handleCardClick = cardIndex => {
		if (gameOver || gameWon) return;

		const newSelectedIndexes = [...selectedCardIndexes];
		if (newSelectedIndexes.length === 0) {
			newSelectedIndexes.push(cardIndex);
		} else if (newSelectedIndexes.length === 1) {
			newSelectedIndexes.push(cardIndex);
			const firstCardColor = shuffledCards[newSelectedIndexes[0]].color;
			if (firstCardColor === shuffledCards[cardIndex].color) {
				setGameWon(
					shuffledCards.length === selectedCardIndexes.length + 1
				); // Check for win
			} else {
				setTimeout(() => setSelectedCardIndexes([]), 1000); // Briefly reveal both cards
			}
		} else {
			// Only allow selecting one card at a time
			newSelectedIndexes.length = 0;
			newSelectedIndexes.push(cardIndex);
		}
		setSelectedCardIndexes(newSelectedIndexes);
	};

	return (
		<div className="memory-container">
			<Timer
				seconds={timerSeconds}
				setSeconds={setTimerSeconds}
				setGameOver={setGameOver}
			/>
			{gameWon && (
				<h1>
					<div className="heart">❤️</div>
					You WIN!!!
					<div className="heart">❤️</div>
				</h1>
			)}
			{gameOver && (
				<h1>
					<div className="heart"></div>
					Time over...
					<div className="heart"></div>
				</h1>
			)}
			<div className="card-container">
				{shuffledCards.map((card, index) => (
					<Card
						key={card.id}
						color={card.color}
						isFlipped={
							selectedCardIndexes.includes(index) || gameWon
						}
						handleClick={() => handleCardClick(index)}
					/>
				))}
			</div>
			<button
				onClick={() => setGameStarted(true)}
				disabled={gameStarted}
			>
				{gameStarted ? "Restart Game" : "Start Game"}
			</button>
		</div>
	);
}

export default MemoryGame;
