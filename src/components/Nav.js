import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

export default function Nav() {
	return (
		<NavStyles>
			<StyledLink to="about">About</StyledLink>
			<StyledLink to="/">Projects</StyledLink>
			<StyledLink to="games">Games</StyledLink>
			<StyledLink to="contact">Contact</StyledLink>
			<button
				className="invisable-button"
				disabled
			>
				{""}
			</button>
		</NavStyles>
	);
}

const MOBILE_BREAKPOINT = 700;
const LARGE_SCREEN_BREAKPOINT = 2900;

const StyledLink = styled(RouterLink)`
	padding: 1rem 3rem;
	display: flex;
	align-items: center;
	position: relative;
	text-transform: uppercase;
	font-weight: 800;
	font-size: 1.2em;
	background: none;
	border: 0;
	text-decoration: none;
	cursor: pointer;
	color: var(--blue);
	-webkit-text-stroke: 0.5px white;

	@media (max-width: ${MOBILE_BREAKPOINT}px) {
		font-size: 14px;
		padding: 0 10px;
	}

	&:before {
		content: "";
		width: 2px;
		background: var(--pink);
		height: 100%;
		left: 0;
		position: absolute;
		transform: skew(-20deg);
		top: 0;
		bottom: 0;
	}

	&:after {
		height: 2px;
		background: var(--pink);
		content: "";
		width: 0;
		position: absolute;
		transform: translateX(-50%);
		transition: width 0.4s;
		transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
		left: 50%;
		margin-top: 2rem;
	}

	&:hover,
	&:focus {
		outline: none;
		text-decoration: none;
		&:after {
			width: calc(100% - 60px);
		}
	}
`;

const NavStyles = styled.ul`
	margin: 0;
	padding: 0;
	display: flex;
	font-size: 2rem;
	border-top: 1px solid var(--pink);
	border-bottom: 1px solid var(--pink);
	width: 100%;
	justify-content: space-evenly;

	@media (max-width: ${LARGE_SCREEN_BREAKPOINT}px) {
		font-size: 1.5rem;
	}

	.invisable-button {
		background: transparent;
		border: none !important;
		font-size: 0;
	}
`;
