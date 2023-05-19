import React, { useState, useEffect } from "react";

const Timer = ({ setIsTimeOver, restartGame, seconds, setSeconds }) => {
	useEffect(() => {
		let interval;

		if (seconds > 0) {
			interval = setInterval(() => {
				setSeconds(seconds => seconds - 1);
			}, 1000);
		} else {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [seconds]);

	useEffect(() => {
		if (seconds === 0) {
			setIsTimeOver(true);
		}
	}, [seconds]);

	return <div className="timer">Time: {seconds} </div>;
};

export default Timer;
