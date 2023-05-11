import React, { useState, useEffect } from "react";
import Card from "./Card";

function Board() {
	const [cards, setCards] = useState([]);
	const [flippedCards, setFlippedCards] = useState([]);

	const shuffleCards = cards => {
		for (let i = cards.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[cards[i], cards[j]] = [cards[j], cards[i]];
		}
		return cards;
	};

	const initializeCards = () => {
		const initialCards = [
			...Array.from({ length: 6 }, (_, i) => ({ value: i + 1 })),
			...Array.from({ length: 6 }, (_, i) => ({ value: i + 1 })),
		].map((card, idx) => ({
			...card,
			id: idx,
			isFlipped: false,
			isMatched: false,
		}));

		setCards(shuffleCards(initialCards));
	};

	useEffect(() => {
		initializeCards();
	}, []);

	const onFlip = card => {
		setCards(prevCards =>
			prevCards.map(c =>
				c.id === card.id ? { ...c, isFlipped: true } : c
			)
		);

		setFlippedCards(prevFlipped => [...prevFlipped, card]);
	};

	useEffect(() => {
		if (flippedCards.length === 2) {
			const [card1, card2] = flippedCards;

			if (card1.value === card2.value) {
				setCards(prevCards =>
					prevCards.map(c =>
						c.id === card1.id || c.id === card2.id
							? { ...c, isMatched: true }
							: c
					)
				);
			} else {
				setTimeout(() => {
					setCards(prevCards =>
						prevCards.map(c =>
							c.id === card1.id || c.id === card2.id
								? { ...c, isFlipped: false }
								: c
						)
					);
				}, 1000);
			}
			setFlippedCards([]);
		}
	}, [flippedCards]);

	return (
		<div className="Board">
			{cards.map(card => (
				<Card
					key={card.id}
					card={card}
					onFlip={onFlip}
				/>
			))}
		</div>
	);
}

export default Board;
