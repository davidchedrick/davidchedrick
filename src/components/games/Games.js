import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import connectGif from "../../images/connectGame.gif";
import "./Games.css";

function Games() {
	return (
		<div className="games-container">
			<Card
				style={{ width: "20rem" }}
				className="game-card"
			>
				<Card.Img
					variant="top"
					src={connectGif}
				/>
				<Card.Body>
					<Card.Title>Connect Game</Card.Title>
					<Card.Text>Connect dots in a row....</Card.Text>

					<Link
						to="/connect-game"
						className="link-button"
					>
						<button>PLAY</button>
					</Link>
				</Card.Body>
			</Card>
		</div>
	);
}

export default Games;
