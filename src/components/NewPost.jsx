import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import "react-bootstrap";
import userData from "../store/userData";
import TextareaAutosize from "react-textarea-autosize";
import "../styles/AdminPage.css";

function NewPost() {
  const [myTitle, setMyTitle] = React.useState("");
  const [myArea, setMyArea] = React.useState("");
  const [myFile, setMyFile] = React.useState();
  const [thisUserId, setThisUserId] = React.useState();
  const [myVideoUrl, setMyVideoUrl] = React.useState("");

  async function submit_func(e) {
    e.preventDefault();
    console.log(myFile);
    let formData = new FormData();

    formData.append("postTitle", myTitle);
    formData.append("postText", myArea);
    formData.append("postImg", myFile);
    formData.append("thisUserId", thisUserId);
    formData.append("myVideoUrl", myVideoUrl);

    await axios.post("http://localhost:3001/admin/add_new_post", formData, {
      headers: { "Content-type": "multipart/form-data" },
    });
    // .then((data) => console.log(data));

    setMyTitle("");
    setMyArea("");
    setMyFile();
  }

  React.useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      const sessionStorageUserData = JSON.parse(sessionStorage.getItem("user"));
      setThisUserId(sessionStorageUserData[0].id_пользователя);
    }
    else{
      setMyTitle("");
      setMyArea("");
      setMyFile();
      setThisUserId();
      setMyVideoUrl("");
    }

    return () => {
      isMounted = false;

    };
  }, []);

  return (
    <div className="NewPost">
      <h2>Добавить новый пост</h2>
      <form className="NewPostForm">
        <input
          className="myInput"
          value={myTitle}
          onChange={(event) => setMyTitle(event.target.value)}
          placeholder="Введите заголовок поста"
        ></input>
        <TextareaAutosize
          className="myArea"
          type="text"
          placeholder={"Текст поста"}
          value={myArea}
          onChange={(e) => {
            setMyArea(e.target.value);
          }}
        ></TextareaAutosize>
        <input
          className="myInput"
          value={myVideoUrl}
          onChange={(event) => setMyVideoUrl(event.target.value)}
          placeholder="Введите ссылку на видео"
        ></input>
        <span>Выберите изображение</span>
        <input
          type="file"
          accept="image/jpeg"
          onChange={(e) => {
            setMyFile(e.target.files[0]);
          }}
        />
        <Button type="submit" onClick={submit_func}>
          Добавить
        </Button>
      </form>
    </div>
  );
}

export default NewPost;
