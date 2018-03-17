import React from "react";
import Youtube from "react-youtube";
import { observer } from "mobx-react";

export const PreviewPane = observer(({ activeResult, searchItem }) => {
  const { id } = activeResult;
  const { playFrom, playTo, setDuration, durationSet } = searchItem;
  const opts = {
    height: "158px",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1 // cause to start automatically
    }
  };
  if (playFrom) opts.playerVars.start = playFrom;
  if (playTo) opts.playerVars.end = playTo;
  return (
    <Youtube
      key={`${id}${playTo}${playFrom}`}
      videoId={id}
      opts={opts}
      onReady={e => !durationSet && setDuration(0, e.target.getDuration())}
    />
  );
});
