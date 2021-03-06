import { api } from "../../../config/domains";
export class QueueStore {
	getRows = ({
		endRow,
		startRow,
		filterModel,
		sortModel,
		successCallback
		// failCallback
	}) => {
		console.log(endRow, startRow, filterModel, sortModel);
		// fetch stuff based on these params!
		fetch(`${api}/queue?_start=${startRow}&_end=${endRow}`)
			.then(resp => resp.json())
			.then(data => {
				successCallback(data.results, data.count);
			});
	};
}
