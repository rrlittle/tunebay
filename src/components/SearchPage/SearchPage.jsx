import React from "react";
import { Container } from "semantic-ui-react";
import { SearchAdd } from "./SearchAdd";
import { SearchList } from "./SearchList";
import { Provider } from "mobx-react";

export const SearchPage = ({ searchesStore }) => {
	const { addSearch } = searchesStore;
	return (
		<Provider searchesStore={searchesStore}>
			<Container>
				<SearchAdd addSearch={addSearch} />
				<SearchList searchStore={searchesStore} />
			</Container>
		</Provider>
	);
};
