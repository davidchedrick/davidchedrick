import { Card, Col, Container, Row } from "react-bootstrap";
import "./project.css";

function ProjectCard({ text, list, img, link, title }) {
	const isPageAvailable = link !== "";

	return (
		<Container className="m-4 d-flex">
			<Card>
				<Card.Title className="m-1">
					<h1>{title}</h1>
				</Card.Title>
				<Row>
					<Col className="rounded float-start">
						<Card.Body>
							<Card.Img
								variant="top"
								src={img}
								className="img-fluid"
							/>
						</Card.Body>
					</Col>
				</Row>
				<Row className="m-0">
					<Col className="rounded float-end">
						<Row>
							<Col>
								<Card.Text>{text}</Card.Text>
							</Col>
							<Col>{list}</Col>
						</Row>
					</Col>

					{isPageAvailable ? (
						<a
							href={link}
							target="_blank"
							rel="noopener noreferrer"
						>
							<button className="card-button">Enter Site</button>
						</a>
					) : null}
				</Row>
			</Card>
		</Container>
	);
}

export default ProjectCard;
