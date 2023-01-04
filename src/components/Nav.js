import { NavLink } from "react-router-dom";

export default function Nav() {
	return (
		<ul>
			<NavLink
				exact
				to="/userArea"
			>
				<i className="bi bi-gear p-0 "></i>
			</NavLink>
		</ul>
	);
}
