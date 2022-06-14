import React from "react";
import axios from "axios";
import "../styles/Comments.css";
import { Button } from "react-bootstrap";
import TextareaAutosize from "react-textarea-autosize";
import userData from "../store/userData";

function Comments({ postId }) {
  const [myArea, setMyArea] = React.useState("");
  const [thisUserId, setThisUserId] = React.useState();
  const [commentArray, setCommentArray] = React.useState([]);

  async function LoadComments() {
    await axios
      .post("http://localhost:3001/post_page/get_comment", {
        postId: postId,
      })
      .then((res) => {
        setCommentArray(res.data);
      });
  }

  React.useEffect(() => {
    const sessionStorageUserData = JSON.parse(sessionStorage.getItem("user"));
    setThisUserId(sessionStorageUserData[0].id_пользователя);
    LoadComments();
  }, [postId]);

  return (
    <div className="comments_content row">
      <div className="comments col-12">
        <table>
          <tbody>
            {commentArray.map((comment) => {
              let CommentDate = comment.Дата.split("T").shift().split("-");
              return (
                <tr className="myComment" key={comment.id_комментария}>
                  <td>
                    <div className="myComment_name_and_date">
                      <div className="myComment_name">
                        <span>
                          {comment.Фамилия} {comment.Имя} {comment.Отчество}
                        </span>
                      </div>
                      <div className="myComment_date">
                        <span className="">
                          {+CommentDate[2] +
                            1 +
                            "." +
                            CommentDate[1] +
                            "." +
                            CommentDate[0]}
                        </span>
                      </div>
                    </div>

                    <div className="myComment_text">
                      <span>{comment.Текст}</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="new_comment col-12">
        <TextareaAutosize
          onChange={(e) => {
            setMyArea(e.target.value);
          }}
          placeholder={"Комментарий"}
          value={myArea}
          className="myArea2"
        />

        <Button
          onClick={async () => {
            await axios.post("http://localhost:3001/post_page/new_comment", {
              postId: postId,
              myArea: myArea,
              thisUserId: thisUserId,
            });
            setMyArea("");
          }}
        >
          Отправить
        </Button>
      </div>
    </div>
  );
}

export default Comments;
