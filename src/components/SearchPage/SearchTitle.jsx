import React from "react";
import { Button, Grid, Icon } from "semantic-ui-react";
import "./title.css";

export const SearchTitle = ({ searchItem, setOpen }) => {
  const { query, updateQuery } = searchItem;
  return (
    <Grid stackable>
      <Grid.Row style={{ padding: 0 }}>
        <Grid.Column width={14} verticalAlign="middle">
          <span style={{ width: "5%" }}>
            <Icon name="dropdown" onClick={() => setOpen()} />
          </span>
          <input
            className="SearchTitle"
            value={query}
            onChange={e => updateQuery(e.target.value)}
          />
        </Grid.Column>
        <Grid.Column verticalAlign="middle" width={2} floated="right">
          <Button.Group floated="right">
            <Button
              disabled={true}
              primary
              onClick={() => setOpen(true)}
              icon="search"
            />
            <Button
              disabled={true}
              content="Download"
              onClick={() =>
                alert("Download should delete this thing and move it to queue")
              }
            />
          </Button.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
