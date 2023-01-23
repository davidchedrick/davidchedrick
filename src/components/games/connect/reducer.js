import { didWin, genEmptyState } from "./connectFunctions";

export function reducer(state, action) {
	switch (action.type) {
		case "restart":
			return genEmptyState();
		case "move":
			const relevantCol = state.board[action.colIndex];
			const colIsFull = relevantCol[0] != null;
			if (state.isGameOver || colIsFull) return state;

			const { board, currentPlayer } = state;
			const boardClone = [...board];
			const colClone = [...relevantCol];

			const rowIndex = colClone.lastIndexOf(null);
			colClone[rowIndex] = currentPlayer;
			boardClone[action.colIndex] = colClone;

			const didWinVertical = didWin(
				rowIndex,
				action.colIndex,
				1,
				0,
				boardClone,
				currentPlayer
			);
			const didWinHorizontal = didWin(
				rowIndex,
				action.colIndex,
				0,
				1,
				boardClone,
				currentPlayer
			);
			const didWinDiagonal =
				didWin(
					rowIndex,
					action.colIndex,
					1,
					1,
					boardClone,
					currentPlayer
				) ||
				didWin(
					rowIndex,
					action.colIndex,
					-1,
					1,
					boardClone,
					currentPlayer
				);

			const winner =
				didWinVertical || didWinHorizontal || didWinDiagonal
					? currentPlayer
					: null;
			const isBoardFull = boardClone.every(column =>
				column.every(value => value != null)
			);

			return {
				board: boardClone,
				currentPlayer: state.currentPlayer === 1 ? 2 : 1,
				winner,
				isGameOver: winner != null || isBoardFull,
			};
		default:
			throw new Error("Unexpected action type");
	}
}
