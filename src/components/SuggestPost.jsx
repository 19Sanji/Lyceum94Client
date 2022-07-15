import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/SuggestPost.css";

export default function SuggestPost({ data }) {
  let navigate = useNavigate();

  React.useEffect(() => {
    let isMounted = true;

    if (isMounted) {
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="suggestPostContent">
      <table className="table">
        <tr>
          <td className="td1">{data.Заголовок}</td>
          <td className="td2">
            {data.Фамилия} {data.Имя} {data.Отчество}
          </td>
          <td className="td3">
            <Button
              onClick={() => {
                navigate(`/post_page/${data.id_поста}`);
              }}
            >
              Подробнее
            </Button>
            <Button
              onClick={async () => {
                await axios
                  .post("http://localhost:3001/admin/accept_suggest_post", {
                    idAcceptPost: data.id_поста,
                  })
                  .then((res) => {
                    console.log(res.data);
                  });
              }}
            >
              Добавить
            </Button>
            <Button
              onClick={async () => {
                await axios
                  .delete("http://localhost:3001/admin/delete_suggest_posts", {
                    data: { idDeletePost: data.id_поста },
                  })
                  .then((res) => {
                    console.log(res.data);
                  });
              }}
            >
              Удалить
            </Button>
          </td>
        </tr>
      </table>
    </div>
  );
}
