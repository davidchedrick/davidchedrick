import { Card, Col, Container, Row } from "react-bootstrap";
import "./project.css";
function ProjectCard({ text, list, img, link, title }) {
	const page = link !== "";

	return (
		<Container className="m-4 d-flex">
			<Card>
				<Row className="m-0">
					<h1>{title}</h1>
				</Row>
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
								<span>{text}</span>
							</Col>
							<Col>{list}</Col>
						</Row>
					</Col>

					{page ? (
						<button
							href={link}
							size="lg"
							className="card-button"
						>
							Enter Site
						</button>
					) : null}
				</Row>
			</Card>
		</Container>
	);
}

export default ProjectCard;
