import React from "react";
import { Image, Grid } from "semantic-ui-react";
import { observer } from "mobx-react";

export const Result = observer(({ result, setActiveResult, active }) => {
  const { thumbnail, title } = result;
  return (
    <Grid
      style={{
        padding: 0,
        margin: 0,
        background: active ? "#bbb" : "white"
      }}
      onClick={() => setActiveResult(result)}
    >
      <Grid.Column width={1} style={{ padding: 0, margin: 0 }}>
        <Image src={thumbnail} style={{ width: "50px", height: "100%" }} />
      </Grid.Column>
      <Grid.Column
        width={15}
        verticalAlign="middle"
        style={{ padding: 0, margin: 0 }}
      >
        <span style={{ paddingLeft: "1em" }}>{title}</span>
      </Grid.Column>
    </Grid>
  );
});
