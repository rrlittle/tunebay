import React from "react";
import { Segment } from "semantic-ui-react";
import { SearchItem } from "./SearchItem";
import { observer, inject } from "mobx-react";

export const SearchList = inject("searchesStore")(
	observer(({ searchesStore }) => (
		<Segment basic style={{ padding: 0 }}>
			{searchesStore.searches.map(search => (
				<SearchItem
					key={search.id}
					searchItem={search}
					defaultOpen={search.defaultOpen}
				/>
			))}
		</Segment>
	))
);
