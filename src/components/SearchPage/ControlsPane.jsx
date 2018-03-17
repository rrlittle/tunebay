import React from "react";
import { RangeInput } from "../common";
import { observer } from "mobx-react";

export const ControlsPane = observer(({ searchItem }) => {
  const { start, playFrom, playTo, end, limitPlay } = searchItem;
  return (
    <RangeInput
      min={start}
      max={end}
      highVal={playTo}
      lowVal={playFrom}
      onChange={limitPlay}
    />
  );
});
