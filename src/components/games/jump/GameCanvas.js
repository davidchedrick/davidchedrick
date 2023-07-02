import { useRef } from "react";

function GameCanvas() {
	const canvasRef = useRef(null);
	return (
		<canvas
			ref={canvasRef}
			width={800}
			height={200}
		/>
	);
}

export default GameCanvas;
