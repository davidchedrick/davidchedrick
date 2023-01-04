import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Nav() {
	return (
		<NavStyles>
			<NavLink
				exact
				to="/about"
			>
				About
			</NavLink>
			<NavLink
				exact
				to="/"
			>
				Projects
			</NavLink>
			{/* <NavLink
				exact
				to="/about"
			>
				Games
			</NavLink>
			<NavLink
				exact
				to="/about"
			>
				Contact
			</NavLink> */}
			<button
				className="invisable-button"
				disabled
			>
				{""}
			</button>
		</NavStyles>
	);
}

const NavStyles = styled.ul`
	margin: 0;
	padding: 0;
	display: flex;
	/* justify-self: end; */
	font-size: 2rem;

	a,
	button {
		padding: 1rem 3rem;
		display: flex;
		align-items: center;
		position: relative;
		text-transform: uppercase;
		font-weight: 800;
		font-size: 1em;
		background: none;
		border: 0 0;
		text-decoration: none;

		/* @media (max-width: 700px) {
			font-size: 10px;
			padding: 0 10px;
		} */
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
			/* @media (max-width: 700px) {
				width: calc(100% - 10px);
			} */
		}
	}
	@media (max-width: 2900px) {
		border-top: 1px solid var(--pink);
		border-bottom: 1px solid var(--pink);
		width: 100%;
		justify-content: space-evenly;
		font-size: 1.5rem;
	}

	.invisable-button {
		background: transparent;
		border: none !important;
		font-size: 0;
	}
`;
