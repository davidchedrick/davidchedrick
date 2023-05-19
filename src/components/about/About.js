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
									Hello! I am David Chedrick, a Software
									Engineer from Austin, TX, with hands-on
									experience in full-stack web development. My
									journey into software development was honed
									at Flatiron School's intensive 60-week Full
									Stack Software Engineering program. Here, I
									developed, tested, and maintained a range of
									projects, gaining an understanding of the
									entire development life cycle.
									<br />
									<br />
									My portfolio includes interactive web
									applications, single-page sites, and social
									apps, all showcasing my skills in front-end
									and back-end development, as well as RESTful
									design principles.
									<br />
									<br />
									<h4>TECHNICAL SKILLS</h4> ●{" "}
									<strong>Front-end:</strong> JavaScript,
									React, Next.js, HTML, CSS, Jest, Apollo
									Client
									<br />● <strong>Back-end:</strong> Ruby,
									Rails, PostgreSQL, MongoDB, Keystone.js,
									GraphQL, SQLite, Active Record
									<br />● <strong>Styling:</strong> Bootstrap,
									Material-UI, Styled-Components
								</Card.Text>
							</Card.Body>
						</Col>
						<Col className="image-col">
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
