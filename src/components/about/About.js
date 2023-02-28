import { Card, Col, Container, Row } from "react-bootstrap";
import daivdHead from "./aboutImages/pink-head.png";
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
									Full Stack Developer with a unique skill set
									in web development, business management,
									retail, labor, and music performance.
									Proficient in JavaScript, React, Ruby on
									Rails, HTML, and CSS. Experienced with
									business management, training, coaching, and
									optimizing productivity. Gained hands-on
									experience in designing and implementing web
									applications throughout the entire
									development life cycle, utilizing agile
									methodologies and cross-functional teamwork.
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
