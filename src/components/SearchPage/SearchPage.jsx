import React from "react";
import { Container } from "semantic-ui-react";
import { SearchAdd } from "./SearchAdd";
import { SearchList } from "./SearchList";
import { Provider } from "mobx-react";
import { SearchesStore } from "./stores/SearchesStore";

export class SearchPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			store: new SearchesStore()
		};
	}

	render() {
		const { store } = this.state;
		const { addSearch } = store;
		return (
			<Provider searchesStore={store}>
				<Container>
					<SearchAdd addSearch={addSearch} />
					<SearchList />
				</Container>
			</Provider>
		);
	}
}
