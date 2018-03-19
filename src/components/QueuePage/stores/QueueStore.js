export class QueueStore {
	id = 0;

	makes = ["Toyota", "Ford", "Porsche"];
	models = ["Celica", "Mondeo", "Boxter"];
	maxprice = 65000;

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
		const newRows = [];
		for (this.id = startRow; this.id < endRow; this.id++) {
			const model = this.models[Math.floor(Math.random() * this.models.length)];
			const make = this.makes[Math.floor(Math.random() * this.makes.length)];
			const price = Math.floor(Math.random() * this.maxprice);
			newRows.push({ id: this.id, make, model, price });
		}

		successCallback(newRows);
	};
}
