import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import "../styles/AdminPage.css";
import NewPost from "./NewPost";
import SuggestPost from "./SuggestPost";

function AdminPage() {
  const [noSuggestPostVisibility, setNoSuggestPostVisibility] =
    React.useState(false);

  const [suggestPosts, setSuggestPosts] = React.useState([]);

  async function GetSuggestPosts() {
    await axios
      .get("http://localhost:3001/admin/get_suggest_posts")
      .then((res) => {
        setSuggestPosts(res.data);
      });
    console.log(suggestPosts);
  }

  React.useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      GetSuggestPosts();
      if (suggestPosts.length === 0) {
        setNoSuggestPostVisibility(true);
      } else {
        setNoSuggestPostVisibility(false);
      }
    } else {
      setNoSuggestPostVisibility(false);
      setSuggestPosts([]);
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="admin_page_all row">
      <div className="admin_page col-10">
        <div className="new_post col-12">
          <NewPost />
        </div>

        <div className="suggest_post col-12">
          <span hidden={noSuggestPostVisibility}>Нет предложенных постов</span>
          <h2>Предложенные посты</h2>

          <table className="table">
            <thead>
              <tr className="myTr">
                <th className="td1">Название поста</th>
                <th className="td2">Автор поста</th>
                <th className="td3"></th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
          {suggestPosts.map((item, i) => (
            <SuggestPost data={item} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default AdminPage;
