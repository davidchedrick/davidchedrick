import styled from "styled-components";
import { Toggle } from "./Toggle";

function Header({ setIsActive }) {
	// function handleToggle() {
	// 	setIsActive(current => !current);
	// }

	return (
		<HeaderDiv>
			<span>David Chedrick.</span>
			{/* <ToggleStyle>
				<label className="switch">
					<input
						type="checkbox"
						onClick={handleToggle}
					/>
					<span className="slider"></span>
				</label>
			</ToggleStyle> */}
			<Toggle />
		</HeaderDiv>
	);
}

const HeaderDiv = styled.div`
	font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
		"Lucida Sans", Arial, sans-serif;
	text-align: center;
	text-decoration: underline;
	display: flex;
	flex-direction: row;
	padding: 20px;
	justify-content: space-between;
	margin: 20px;
	font-size: 50px;
`;

const ToggleStyle = styled.div`
	.switch {
		font-size: 17px;
		position: relative;
		display: inline-block;
		width: 3.5em;
		height: 2em;
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgb(0, 0, 0);
		transition: 0.4s;
		border-radius: 30px;
	}

	.slider:before {
		position: absolute;
		content: "";
		height: 1.4em;
		width: 1.4em;
		border-radius: 20px;
		left: 0.3em;
		bottom: 0.3em;
		background-color: rgb(250, 062, 250);
		transition: 0.4s;
	}

	input:checked + .slider:before {
		transform: translateX(1.5em);
	}

	.slider::after {
		width: 20px;
		height: 20px;
		left: 20%;
		top: 10%;
		border-radius: 50%;
		position: absolute;
		content: "";
		background-color: rgb(0, 0, 0);
		transition: ease 0.4s;
	}

	input:checked + .slider::after {
		left: 80%;
		width: 0px;
		height: 0px;
	}
`;

export default Header;
