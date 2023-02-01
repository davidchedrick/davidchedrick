import { Link } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import Social from "./social/Social";
import { Toggle } from "./toggle/Toggle";

function Header() {
	return (
		<>
			<Social />
			<HeaderDiv>
				<Link
					style={{ textDecoration: "none" }}
					to="/"
				>
					<span className="title">David Chedrick.</span>
				</Link>
				<Toggle />
			</HeaderDiv>
			<Nav />
		</>
	);
}

const HeaderDiv = styled.div`
	font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
		"Lucida Sans", Arial, sans-serif;
	text-align: center;
	/* text-decoration: none; */
	display: flex;
	flex-direction: row;
	padding: 0px;
	margin: 0px;
	justify-content: space-between;
	margin: 20px;
	font-size: 50px;
	color: #da1598;
	@media (max-width: 700px) {
		display: flex;
		flex-direction: column-reverse;
		font-size: 3em;
		padding: 0px;
	}
`;

export default Header;
