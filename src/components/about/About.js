import { Card, Col, Container, Row } from "react-bootstrap";
import daivdHead from "./aboutImages/david-head.png";
import "./About.css";

export default function About() {
	return (
		<>
			<Container className="m-4">
				<Card className="m-5 p-2">
					<Row className="m-0"></Row>
					<Row>
						<Col className="rounded float-start">
							<Card.Body>
								<Card.Text>
									{" "}
									As a Full Stack Developer with a diverse
									background in web development, business
									management, retail, labor, and music
									performance, I have a unique skill set that
									allows me to approach projects from multiple
									angles. My technical expertise includes
									JavaScript, React, Ruby on Rails, Active
									Record, HTML, and CSS. In addition, I have
									strong skills in management, training,
									coaching, and optimizing productivity. I am
									dedicated to continuous growth, development,
									and engagement.
								</Card.Text>
							</Card.Body>
						</Col>
						<Col className="rounded float-end image-div">
							<Card.Img
								variant=""
								src={daivdHead}
								className="about-image"
							/>
						</Col>
					</Row>
				</Card>
			</Container>
		</>
	);
}
