import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function PostItems(props) {
  const [deleteBtn, setDeleteBtn] = React.useState(true);
  const [textReplacement, setTextReplacement] = React.useState(
    props.post.Текст
  );
  const [postDate, setPostDate] = React.useState("");

  function GoToIdPage() {
    navigate(`/post_page/${props.post.id_поста}`);
  }

  let navigate = useNavigate();
  React.useEffect(() => {
    const sessionStorageUserData = JSON.parse(sessionStorage.getItem("user"));
    if (sessionStorageUserData[0].Статус === "Администратор") {
      setDeleteBtn(false);
    } else {
      setDeleteBtn(true);
    }

    if (props.post.Текст.length > 500) {
      let myWord = "";
      for (let i = 0; i < 500; i++) {
        myWord += props.post.Текст[i];
      }
      myWord += " ...";
      setTextReplacement(myWord);
    }
    let tempPostDate = props.post.Дата_публикации.split("T").shift().split("-");
    setPostDate(
      (+tempPostDate[2] + 1 )+ "." + tempPostDate[1] + "." + tempPostDate[0]
    );
  }, []);

  return (
    <div className="post">
      <img
        className="postPhoto"
        src={"http://localhost:3001/image/" + props.post.Ссылка_на_изображение}
      />
      <div className="postContent">
        <div className="postTitle">
          <h3>{props.post.Заголовок}</h3>
        </div>

        <div className="postBody">{textReplacement}</div>
        <div className="postDate">Дата: {postDate}</div>
        <div className="postAuthor">
          Автор: {props.post.Фамилия} {props.post.Имя} {props.post.Отчество}
        </div>
        <div className="postBtns">
          <Button onClick={GoToIdPage}> Открыть</Button>

          <Button
            hidden={deleteBtn}
            onClick={async () => {
              await axios
                .delete(`http://localhost:3001/post_list/`, {
                  data: { postId: props.post.id_поста },
                })
                .then((res) => {
                  alert(res.data);
                  if (res.data === "Пост успешно удален") {
                    props.setMyRender(!props.myRender);
                  }
                });
            }}
          >
            Удалить
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PostItems;
