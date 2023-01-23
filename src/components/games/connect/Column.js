function Column({ entries, onClick }) {
	return (
		<div
			className="column"
			onClick={onClick}
		>
			{entries.map((entry, rowIndex) => {
				return (
					<div
						key={rowIndex}
						className="tile"
					>
						{entry != null && (
							<div className={`player player-${entry}`} />
						)}
					</div>
				);
			})}
		</div>
	);
}

export default Column;
