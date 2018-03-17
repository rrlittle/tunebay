import React from "react";
import Youtube from "react-youtube";

export const PreviewPane = ({ activeResult }) => {
  const { start = 30, id, end, setDuration } = activeResult;
  const opts = {
    height: "158px",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };
  if (start) opts.start = start;
  if (end) opts.end = end;
  return (
    <Youtube
      videoId={id}
      opts={opts}
      onReady={e => {
        console.log(e.target);
        console.log("getDuration", e.target.getDuration());
      }}
    />
  );
};
