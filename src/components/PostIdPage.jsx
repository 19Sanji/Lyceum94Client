import React from "react";
import axios from "axios";
import "react-bootstrap";
import "../styles/PostIdPage.css";
import Comments from "./Comments";
import MyYouTubePlayer from "./MyYouTubePlayer";

function PostIdPage() {
  const [myPost, setMyPost] = React.useState([]);
  const [postId, setPostId] = React.useState();
  const [postTitle, setPostTitle] = React.useState();
  const [postText, setPostText] = React.useState();
  const [idPost, setIdPost] = React.useState();
  const [myRender, setMyRender] = React.useState(false);
  const [postImg, setPostImg] = React.useState();
  const [postVideoUrl, setPostVideoUrl] = React.useState();
  const [videoVisibility, setVideoVisibility] = React.useState(true);

  async function LoadPost() {
    await axios
      .post("http://localhost:3001/post_page", {
        idPost: idPost,
      })
      .then((result) => {
        setMyPost(result.data);
      });
    if (myPost) {
      setMyRender(true);
    } else {
      setMyRender(false);
    }
  }

  React.useEffect(async () => {
    let isMounted = true;

    if (isMounted) {
      const thisUrl = window.location.href;
      const tempId = thisUrl.split("/").pop();
      setIdPost(tempId);
      if (idPost) {
        LoadPost();
      }
      console.log(myPost);
      if (myPost) {
        setPostId(myPost[0].id_поста);
        setPostTitle(myPost[0].Заголовок);
        setPostText(myPost[0].Текст);
        setPostImg(myPost[0].Ссылка_на_изображение);
        setPostVideoUrl(myPost[0].Ссылка_на_YouTube);
        if (myPost[0].Ссылка_на_YouTube !== "") {
          setVideoVisibility(true);
        } else {
          setVideoVisibility(false);
        }
      }
    } else {
      setMyPost([]);
      setPostId();
      setPostTitle();
      setPostText();
      setIdPost();
      setMyRender(false);
      setPostImg();
      setPostVideoUrl();
      setVideoVisibility(true);
    }

    return () => {
      isMounted = false;
    };
  }, [idPost, myRender]);

  return (
    <div className="row">
      <div className="post_content col-10">
        <h3>{postTitle}</h3>
        <div className="myImgDiv">
          <img
            className="myImg"
            src={"http://localhost:3001/image/" + postImg}
          />
        </div>
        <div className="myVideo" hidden={!videoVisibility}>
          <MyYouTubePlayer postVideoUrl={postVideoUrl} />
        </div>
        <div>{postText}</div>
      </div>
      <div className="comments col-10">
        <Comments postId={postId} />
      </div>
    </div>
  );
}

export default PostIdPage;
