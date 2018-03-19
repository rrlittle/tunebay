import React from "react";
import { colDefs as defaultColDefs } from "./colDefs";
import { Grid } from "../common";
import "ag-grid/dist/styles/ag-grid.css";
import "ag-grid/dist/styles/theme-fresh.css";
import { QueueStore } from "./stores/QueueStore";

const containerStyle = {
	height: "100%",
	width: "100%",
	position: "absolute",
	display: "flex",
	flexDirection: "column",
	flex: 1
};

const gridStyle = {
	flex: 1
};

export class QueuePage extends React.Component {
	state = {
		store: new QueueStore()
	};
	render() {
		const { store } = this.state;
		return (
			<div style={containerStyle}>
				<div style={gridStyle}>
					<Grid colDefs={defaultColDefs} getRows={store.getRows} />
				</div>
			</div>
		);
	}
}
