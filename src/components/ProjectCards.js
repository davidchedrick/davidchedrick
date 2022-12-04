import { Button, Card, Col, Container, Row } from "react-bootstrap";

function ProjectCard({ text, list, img, link, title }) {
	const page = link !== "";

	return (
		<Container className="m-4">
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
							/>
						</Card.Body>
					</Col>
					<Col className="rounded float-end">
						<Row>
							<Col>
								<span>{text}</span>
							</Col>
							<Col>{list}</Col>
						</Row>
					</Col>
				</Row>
				<Row className="m-0">
					{page ? (
						<Button
							href={link}
							size="lg"
						>
							Enter Site
						</Button>
					) : null}
				</Row>
			</Card>
		</Container>
	);
}

export default ProjectCard;
