import React from "react";
import { Grid } from "semantic-ui-react";
import { PreviewPane } from "./PreviewPane";
import { ControlsPane } from "./ControlsPane";
import { ResultsPane } from "./ResultsPane";
import { observer } from "mobx-react";

export const SearchItemContent = observer(({ searchItem }) => (
  <Grid>
    {searchItem.activeResult ? (
      <Grid.Row>
        <Grid.Column width={4}>
          <PreviewPane
            activeResult={searchItem.activeResult}
            searchItem={searchItem}
          />
        </Grid.Column>
        <Grid.Column width={12} floated="right">
          <Grid.Row style={{ borderBottom: "1px solid #ccc" }}>
            <ControlsPane searchItem={searchItem} />
          </Grid.Row>
          <Grid.Row>
            <ResultsPane searchItem={searchItem} />
          </Grid.Row>
        </Grid.Column>
      </Grid.Row>
    ) : (
      <Grid.Row>
        <ResultsPane searchItem={searchItem} />
      </Grid.Row>
    )}
  </Grid>
));
