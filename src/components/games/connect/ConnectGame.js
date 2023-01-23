import { useReducer } from "react";
import { genEmptyState } from "./connectFunctions";
import { reducer } from "./reducer";
import Column from "./Column";
import "./connectGame.css";

function ConnectGame() {
	const [{ board, winner, isGameOver, currentPlayer }, dispatchBoard] =
		useReducer(reducer, genEmptyState());

	return (
		<div className="gameContainer">
			<div className="playerDisplay">
				{winner === null && <h1>Player {currentPlayer} GO!</h1>}
				{winner != null && (
					<h1>
						<div className="heart">❤️</div> Player {winner} Wins{" "}
						<div className="heart">❤️</div>
					</h1>
				)}
			</div>

			{!winner ? (
				<div className="board">
					{board.map((colEntries, colIndex) => {
						const onClickCol = () => {
							dispatchBoard({ type: "move", colIndex });
						};

						return (
							<Column
								key={colIndex}
								entries={colEntries}
								onClick={onClickCol}
							/>
						);
					})}
				</div>
			) : (
				<div className="button-container">
					{isGameOver && (
						<button
							onClick={() => {
								dispatchBoard({ type: "restart" });
							}}
						>
							START
						</button>
					)}
				</div>
			)}
		</div>
	);
}

export default ConnectGame;
