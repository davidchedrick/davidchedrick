import { Container, Row } from "react-bootstrap";
import ChoreList from "../../pages/ChoreList";
import Blogging from "../../pages/Blogging";
import BodhiSpot from "../../pages/BodhiSpot";
import CatsGalore from "../../pages/CatsGalore";
import CutieCats from "../../pages/CutieCats";

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
