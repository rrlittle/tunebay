import React from "react";
import { Container } from "semantic-ui-react";
import { SearchAdd } from "./SearchAdd";
import { SearchList } from "./SearchList";

export const SearchPage = ({ searchesStore }) => {
  return (
    <Container>
      <SearchAdd searchesStore={searchesStore} />
      <SearchList searchStore={searchesStore} />
    </Container>
  );
};
