import { Card, Container } from "react-bootstrap";
import NameBox from "./NameBox";

export default function CatNames() {
	return (
		<Container>
			<Card>
				<Card.Body>
					<NameBox />
				</Card.Body>
			</Card>
		</Container>
	);
}
