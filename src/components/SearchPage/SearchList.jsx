import React from "react";
import { Segment } from "semantic-ui-react";
import { SearchItem } from "./SearchItem";
import { observer } from "mobx-react";

export const SearchList = observer(({ searchStore }) => (
	<Segment basic style={{ padding: 0 }}>
		{searchStore.searches.map(search => (
			<SearchItem
				key={search.id}
				searchItem={search}
				defaultOpen={search.defaultOpen}
			/>
		))}
	</Segment>
));
