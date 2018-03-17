import { observable, action, useStrict } from "mobx";
import { SearchStore } from "./SearchStore";

useStrict(true);

const thumb1 = "https://i.ytimg.com/vi/R8XAlSp838Y/default.jpg";

const default_searches = [
	{
		id: 0,
		query: "Dog wrestling",
		results: [
			{ id: "eUkSTnUK_T0", active: false, thumbnail: thumb1, title: "FOOBAR3" },
			{
				id: "2g811Eo7K8U",
				active: true,
				thumbnail: thumb1,
				title: "FOOBAR2"
			},
			{ id: "P_SlAzsXa7E", active: false, thumbnail: thumb1, title: "FOOBAR4" }
		],
		activeResult: "P_SlAzsXa7E"
	},
	{
		id: 1,
		query: "aaaaaaaa"
	}
];

export class SearchesStore {
	api_key = process.env.REACT_APP_YOUTUBE_API_KEY;
	@observable searches = [];

	constructor() {
		this.fetchSearches();
	}

	@action
	fetchSearches = () => {
		this.searches.replace(
			default_searches.map(
				result => new SearchStore({ parent: this, ...result })
			)
		);
	};

	@action
	addSearch = query => {
		// actually do a post and operate on the return. there may be duplicates in which case it will fail
		this.searches.push(
			new SearchStore({
				parent: this,
				id: this.searches.length,
				query,
				triggerSearch: true,
				defaultOpen: true
			})
		);
	};

	@action
	deleteSearch = search => {
		//  actually make a post to the server
		this.searches.remove(search);
	};
}
