import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import connectGif from "../../images/connectGame.gif";
import "./Games.css";

function Games() {
	const gamesData = [
		{
			title: "Connect Game",
			text: "Connect dots in a row....",
			img: connectGif,
			link: "/connect-game",
		},
		// {
		//     title: "Memory Game",
		//     text: "Flip the cards to find a match....",
		//     img:
		//     link: "/memory-game"
		// },
	];

	return (
		<div className="games-container">
			{gamesData.map((game, index) => (
				<Card
					key={index}
					style={{ width: "20rem" }}
					className="game-card"
				>
					<Card.Img
						variant="top"
						src={game.img}
					/>
					<Card.Body>
						<Card.Title>{game.title}</Card.Title>
						<Card.Text>{game.text}</Card.Text>
						<Link
							to={game.title}
							className={game.text}
						>
							<button>PLAY</button>
						</Link>
					</Card.Body>
				</Card>
			))}
		</div>
	);
}

export default Games;
