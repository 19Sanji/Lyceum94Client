import React from "react";
import PostItems from "./PostItems";
import axios from "axios";
import "react-bootstrap";
import { Button } from "react-bootstrap";
import "../styles/PostList.css";
import userData from "../store/userData";
import arrowDown from "../img/ArrowDown.png";
import TextareaAutosize from "react-textarea-autosize";

function PostList() {
  const [posts, setPosts] = React.useState([]);
  const [myRender, setMyRender] = React.useState(false);

  const [myTitle, setMyTitle] = React.useState("");
  const [myArea, setMyArea] = React.useState("");
  const [myFile, setMyFile] = React.useState();
  const [myVideoUrl, setMyVideoUrl] = React.useState("");
  const [thisUserId, setThisUserId] = React.useState();

  const [formVisibility, setFormVisibility] = React.useState(true);

  const [postAuthor, setPostAuthor] = React.useState([]);

  async function LoadPosts() {
    await axios.get("http://localhost:3001/post_list").then((result) => {
      setPosts(result.data);
    });
    console.log(posts);
  }

  async function SubmitFunc(e) {
    e.preventDefault();
    //---------------
    let formData = new FormData();

    formData.append("myTitle", myTitle);
    formData.append("myArea", myArea);
    formData.append("postImg", myFile);
    formData.append("thisUserId", thisUserId);
    formData.append("myVideoUrl", myVideoUrl);

    await axios.post(
      "http://localhost:3001/post_list/add_suggest_post",
      formData,
      {
        headers: { "Content-type": "multipart/form-data" },
      }
    );
    //---------------
    setMyFile();
    setMyTitle("");
    setMyArea("");
    setMyVideoUrl("");
  }

  React.useEffect(async () => {
    const sessionStorageUserData = JSON.parse(sessionStorage.getItem("user"));
    setThisUserId(sessionStorageUserData[0].id_пользователя);
    LoadPosts();
  }, [myRender]);
  return (
    <div className="row">
      <div className="suggest_post col-10">
        <div className="suggest_post_title">
          <h4>Предложить пост</h4>
          <button
            className="arrowDown"
            onClick={() => {
              setFormVisibility(!formVisibility);
            }}
          >
            <img src={arrowDown} />
          </button>
        </div>
        <div className="myForm" hidden={formVisibility}>
          <form className="myForm_content">
            <span>Введите заголовок поста</span>
            <input
              className="myInput_suggest_post"
              value={myTitle}
              onChange={(event) => setMyTitle(event.target.value)}
              placeholder="Введите заголовок поста"
            ></input>
            <span>Введите текст поста</span>
            <TextareaAutosize
              className="myArea_suggest_post"
              type="text"
              placeholder="Введите текст поста"
              value={myArea}
              onChange={(e) => {
                setMyArea(e.target.value);
              }}
            ></TextareaAutosize>

            <span>Введите ссылку на видео</span>
            <input
              className="myInput_suggest_post"
              value={myVideoUrl}
              onChange={(event) => setMyVideoUrl(event.target.value)}
              placeholder="Введите ссылку на видео"
            ></input>

            <input
              type="file"
              accept="image/jpeg"
              onChange={(e) => {
                setMyFile(e.target.files[0]);
              }}
            />

            <div className="myBtn_suggest_post">
              <Button type="submit" onClick={SubmitFunc}>
                Добавить
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="Posts col-10">
        <div className="myH1">
          <h3>Список постов</h3>
        </div>
        <div className="myPosts">
          {posts.map((post) => (
            <PostItems
              post={post}
              key={post.id_поста}
              myRender={myRender}
              setMyRender={setMyRender}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostList;
