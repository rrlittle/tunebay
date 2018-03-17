import React from "react";
import { Segment } from "semantic-ui-react";
import { Result } from "./Result";
import { observer } from "mobx-react";

export const ResultsPane = observer(({ searchItem }) => {
  const { setActiveResult, activeResult } = searchItem;
  return (
    <Segment
      basic
      style={{
        width: "100%",
        height: "100px",
        overflowY: "scroll",
        padding: 0
      }}
    >
      {searchItem.results.map(result => (
        <Result
          key={result.id}
          result={result}
          setActiveResult={setActiveResult}
          active={result === activeResult}
        />
      ))}
    </Segment>
  );
});
