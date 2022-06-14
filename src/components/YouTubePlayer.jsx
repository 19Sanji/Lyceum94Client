import React from "react";
import YouTube from "react-youtube";

function YouTubePlayer({ postVideoUrl }) {
  const [url, setUrl] = React.useState("");

  React.useEffect(() => {
    if (postVideoUrl) {
      const tempArr = postVideoUrl.split("&");
      const tempStr = tempArr.shift();

      const tempArr2 = tempStr.split("=");
      const myNewUrl = tempArr2.pop();
      setUrl(myNewUrl);
    }

  }, [postVideoUrl]);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };
  function videoOnReady(e) {
    e.target.pauseVideo();
  }
  return (
    <div>
      <YouTube videoId={url} opts={opts} onReady={videoOnReady} />
    </div>
  );
}

export default YouTubePlayer;
