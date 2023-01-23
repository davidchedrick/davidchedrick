import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Games.css";

function Games() {
	return (
		<Container className="games-container">
			<Card style={{ width: "18rem" }}>
				<Card.Img
					variant="top"
					src="holder.js/100px180"
				/>
				<Card.Body>
					<Card.Title>Connect Game</Card.Title>
					<Card.Text>Connect dots in a row....</Card.Text>

					<Link to="/connect-game">
						<Button variant="primary">Play</Button>
					</Link>
				</Card.Body>
			</Card>
		</Container>
	);
}

export default Games;
