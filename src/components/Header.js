import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import { Toggle } from "./toggle/Toggle";

function Header() {
	return (
		<>
			<HeaderDiv>
				<NavLink
					exact
					to="/"
				>
					<span className="title">David Chedrick.</span>
				</NavLink>

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
	text-decoration: none;
	display: flex;
	flex-direction: row;
	padding: 20px;
	justify-content: space-between;
	margin: 20px;
	font-size: 50px;
	color: #da1598;
`;

export default Header;
