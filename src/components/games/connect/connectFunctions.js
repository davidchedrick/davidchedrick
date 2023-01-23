const NUM_COL = 7;
const NUM_ROW = 6;
const NUM_TO_WIN = 4;

export function didWin(
	startingRow,
	startingCol,
	rowIncrement,
	colIncrement,
	board,
	currentPlayer
) {
	let numInARow = 0;
	let currRow = startingRow;
	let currCol = startingCol;
	while (
		currCol < NUM_COL &&
		currRow < NUM_ROW &&
		board[currCol][currRow] === currentPlayer
	) {
		numInARow++;
		currRow += rowIncrement;
		currCol += colIncrement;
	}

	currRow = startingRow - rowIncrement;
	currCol = startingCol - colIncrement;
	while (
		currCol >= 0 &&
		currRow >= 0 &&
		board[currCol][currRow] === currentPlayer
	) {
		numInARow++;
		currRow -= rowIncrement;
		currCol -= colIncrement;
	}

	return numInARow >= NUM_TO_WIN;
}

export function genEmptyState() {
	return {
		board: new Array(NUM_COL)
			.fill(null)
			.map(_ => new Array(NUM_ROW).fill(null)),
		currentPlayer: 1,
		winner: null,
		inGameOver: false,
	};
}
