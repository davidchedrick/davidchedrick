import React, { useRef, useEffect, useState } from "react";
import { truckSpec, obstacleSpec } from "./gameObjects";
const GameCanvas = () => {
	const canvasRef = useRef(null);
	const [truck, setTruck] = useState({ truckSpec });
	const [obstacle, setObstacle] = useState({ obstacleSpec });

	useEffect(() => {
		const drawTruck = ctx => {
			ctx.fillStyle = "#000";
			ctx.fillRect(truck.x, truck.y, truck.width, truck.height);
		};

		const drawObstacle = ctx => {
			ctx.fillStyle = "#f00";
			ctx.fillRect(
				obstacle.x,
				obstacle.y,
				obstacle.width,
				obstacle.height
			);
		};

		const moveTruck = () => {
			setTruck(prevState => ({
				...prevState,
				velocity: prevState.velocity + prevState.gravity,
				y: prevState.y + prevState.velocity,
			}));

			if (truck.y > 140) {
				setTruck(prevState => ({ ...prevState, y: 140, velocity: 0 }));
			}
		};

		// const moveObstacle = () => {
		// 	setObstacle(prevState => ({
		// 		...prevState,
		// 		x: prevState.x - prevState.speed,
		// 	}));

		// 	if (obstacle.x < -obstacle.width) {
		// 		setObstacle(prevState => ({ ...prevState, x: 800 }));
		// 	}
		// };

		const collisionDetection = () => {
			if (
				truck.x < obstacle.x + obstacle.width &&
				truck.x + truck.width > obstacle.x &&
				truck.y < obstacle.y + obstacle.height &&
				truck.y + truck.height > obstacle.y
			) {
				// alert("Game Over");
				setTruck({ truckSpec });
				setObstacle({ obstacleSpec });
			}
		};

		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");

		const clearCanvas = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
		};

		const gameLoop = () => {
			clearCanvas();
			drawTruck(ctx);
			drawObstacle(ctx);
			moveTruck();
			// moveObstacle();
			collisionDetection();
			requestAnimationFrame(gameLoop);
		};

		gameLoop();
	}, [truck, obstacle]);

	useEffect(() => {
		const handleKeyDown = event => {
			if (event.code === "Space") {
				setTruck(prevState => ({
					...prevState,
					velocity: -prevState.jumpStrength,
				}));
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);

	return (
		<canvas
			ref={canvasRef}
			width={800}
			height={200}
		/>
	);
};

export default GameCanvas;
