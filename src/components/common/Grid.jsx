import React from "react";
import { AgGridReact } from "ag-grid-react";

export class Grid extends React.Component {
	constructor(props) {
		super(props);
		const { getRows = () => {} } = props;
		this.getRows = getRows.bind(this);
	}
	render() {
		const {
			sorting,
			filtering,
			paginate,
			getRowNodeId = d => d.id,
			colDefs = []
		} = this.props;

		return (
			<div
				style={{ width: "100%", height: "100%" }}
				className="fullHeightContainer ag-fresh"
			>
				<AgGridReact
					onGridReady={params => params.api.setDatasource(this)}
					pagination={!!paginate}
					enableServerSideSorting={!!sorting}
					enableServerSideFilter={!!filtering}
					rowModelType={"infinite"}
					getRowNodeId={getRowNodeId}
					columnDefs={colDefs}
				/>
			</div>
		);
	}
}
