import React from "react";

export default function MyYouTubePlayer({ postVideoUrl }) {

    const [url, setUrl] = React.useState("");

    React.useEffect(() => {
      let isMounted = true;
  
      if (isMounted) {
        if (postVideoUrl) {
          const tempArr = postVideoUrl.split("&");
          const tempStr = tempArr.shift();
  
          const tempArr2 = tempStr.split("=");
          const myNewUrl = tempArr2.pop();
          setUrl(myNewUrl);
        }
      } else {
        setUrl("");
      }
  
      return () => {
        isMounted = false;
      };
    }, [postVideoUrl]);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube-nocookie.com/embed/" + url}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
