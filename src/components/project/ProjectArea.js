import { Container, Row } from "react-bootstrap";
import ChoreList from "./projects/ChoreList";
import Blogging from "./projects/Blogging";
import BodhiSpot from "./projects/BodhiSpot";
import CatsGalore from "./projects/CatsGalore";
import CutieCats from "./projects/CutieCats";

function ProjectArea() {
	const projects = [
		<CatsGalore />,
		<BodhiSpot />,
		<Blogging />,
		<ChoreList />,
		<CutieCats />,
	];

	return (
		<Container>
			{projects.map((project, index) => (
				<Row key={index}>{project}</Row>
			))}
		</Container>
	);
}

export default ProjectArea;
