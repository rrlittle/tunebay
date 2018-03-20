import React from "react";

const SvgLine = ({
	color = "red",
	height = "100%",
	width = "2em",
	vOffset = 10
}) => (
	<svg height={height} width={width}>
		<line
			x1={0}
			y1={vOffset}
			x2={100}
			y2={vOffset}
			style={{ stroke: color, strokeWidth: 4 }}
		/>
	</svg>
);

export const ProgBar = ({ value }) => {
	// if no progress. it hasn't started
	if (!value) return null;

	// 100 ->
	const options = {
		color: value >= 100 ? "green" : "#87d8eb", // light blue indicates in progress
		width: "100%",
		height: "100%",
		width: `${value}%`
	};

	return <SvgLine {...options} />;
};
