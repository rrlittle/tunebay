import React from "react";
import { Button, Grid, Icon } from "semantic-ui-react";
import { TitleInput } from "../common";
import { observer, inject } from "mobx-react";

export const SearchTitle = inject("searchesStore")(
  observer(({ searchItem, setOpen, searchesStore }) => {
    const { deleteSearch } = searchesStore;
    const {
      query,
      updateQuery,
      queryValid,
      queryDirty,
      doSearch,
      activeResult,
      readyToSearch,
      readyToDownload,
      download
    } = searchItem;

    const localDoSearch = () => {
      setOpen(true);
      doSearch();
    };
    const localDoDownload = () => {
      download();
    };
    return (
      <Grid stackable>
        <Grid.Row style={{ padding: 0 }}>
          <Grid.Column width={13} verticalAlign="middle">
            <span style={{ width: "5%" }}>
              <Icon name="dropdown" onClick={() => setOpen()} />
            </span>
            <TitleInput
              value={query}
              onKeyPress={e => {
                if (e.key === "Enter") {
                  if (readyToSearch) localDoSearch();
                  else if (readyToDownload) localDoDownload();
                }
              }}
              onChange={(e, { value }) => updateQuery(value)}
            />
          </Grid.Column>
          <Grid.Column
            style={{ minWidth: 100 }}
            verticalAlign="middle"
            floated="right"
            width={3}
          >
            <Button.Group>
              <Button
                disabled={!readyToSearch}
                primary
                onClick={localDoSearch}
                icon="search"
              />
              <Button
                disabled={!readyToDownload}
                positive
                icon="download"
                onClick={() => localDoDownload()}
              />

              <Button
                negative
                icon="trash"
                onClick={() => deleteSearch(searchItem)}
              />
            </Button.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  })
);
