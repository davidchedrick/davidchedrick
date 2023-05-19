import { useEffect, useMemo, useState } from "react";
import Card from "./Card";
import "./memoryGame.css";
import Timer from "./Timer";

const cardSet = ["red", "orange", "yellow", "green", "blue", "purple"];

function MemoryGame() {
	const timerCount = 60;
	const [cards, setCards] = useState([]);
	const [selectedCards, setSelectedCards] = useState([]);
	const [matchedCards, setMatchedCards] = useState([]);
	const [seconds, setSeconds] = useState(timerCount);
	const [isWinner, setIsWinner] = useState(false);
	const [isTimeOver, setIsTimeOver] = useState(false);

	const doubledCards = useMemo(() => [...cardSet, ...cardSet], [cardSet]);

	useEffect(() => {
		restartGame();
	}, []);

	useEffect(() => {
		if (matchedCards.length === doubledCards.length) {
			setIsWinner(true);
		}
	}, [matchedCards, doubledCards]);

	const handleCardClick = index => {
		if (selectedCards.length === 0) {
			setSelectedCards([index]);
		} else if (selectedCards.length === 1) {
			setSelectedCards([...selectedCards, index]);
			if (cards[index].color === cards[selectedCards[0]].color) {
				setMatchedCards([...matchedCards, cards[index].color]);
			}
		} else {
			setSelectedCards([index]);
		}
	};

	const restartGame = () => {
		const shuffledCards = doubledCards
			.map(card => ({ color: card, id: Math.random() }))
			.sort(() => 0.5 - Math.random());
		setCards(shuffledCards);
		setSelectedCards([]);
		setMatchedCards([]);
		setIsTimeOver(false);
		setSeconds(timerCount);
	};

	return (
		<div className="memory-container">
			<Timer
				seconds={seconds}
				setSeconds={setSeconds}
				setIsTimeOver={setIsTimeOver}
			/>
			{isWinner === true && (
				<h1>
					<div className="heart">❤️</div>
					You WIN!!!
					<div className="heart">❤️</div>
				</h1>
			)}
			{isTimeOver === true && (
				<h1>
					<div className="heart">💔</div>
					Time over...
					<div className="heart">💔</div>
				</h1>
			)}
			<div className="card-container">
				{cards.map((card, index) => (
					<Card
						key={card.id}
						color={card.color}
						isFlipped={
							selectedCards.includes(index) ||
							matchedCards.includes(card.color)
						}
						handleClick={() => handleCardClick(index)}
					/>
				))}
			</div>
			<button onClick={restartGame}>Restart Game</button>
		</div>
	);
}

export default MemoryGame;
