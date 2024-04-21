import { useEffect } from "react";

const Timer = ({ setIsTimeOver, seconds, setSeconds }) => {
	useEffect(() => {
		let interval;
		if (seconds > 0) {
			interval = setInterval(() => {
				setSeconds(prevSeconds => Math.max(0, prevSeconds - 1)); // Ensure seconds doesn't go negative
			}, 1000);
		} else {
			setIsTimeOver(true);
		}

		return () => clearInterval(interval);
	}, [seconds, setIsTimeOver]);

	return <div className="timer">Time: {seconds} </div>;
};

export default Timer;
