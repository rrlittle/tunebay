import { observable, action, useStrict } from "mobx";
import { SearchStore } from "./SearchStore";

useStrict(true);

export class SearchesStore {
	api_key = process.env.REACT_APP_YOUTUBE_API_KEY;
	api_domain = process.env.REACT_APP_API_HOST || "http://localhost:3001";
	@observable searches = [];

	constructor() {
		this.fetchSearches();
	}

	@action
	fetchSearches = () => {
		fetch(`${this.api_domain}/searches`)
			.then(resp => resp.json())
			.then(
				action(data => {
					this.searches.replace(
						data.map(search => new SearchStore({ parent: this, ...search }))
					);
				})
			);
	};

	@action
	addSearch = query => {
		// actually do a post and operate on the return. there may be duplicates in which case it will fail
		fetch(`${this.api_domain}/searches`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ query })
		})
			.then(resp => resp.json())
			.then(
				action(data => {
					this.searches.push(
						new SearchStore({
							parent: this,
							triggerSearch: true,
							defaultOpen: true,
							...data
						})
					);
				})
			);
	};

	@action
	deleteSearch = search => {
		//  actually make a post to the server
		fetch(`${this.api_domain}/searches/${search.id}`, {
			method: "DELETE"
		}).then(
			action(resp => {
				if (resp.ok) this.searches.remove(search);
			})
		);
	};
}
