import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { observer } from "mobx-react-lite";
import PostList from "./components/PostList";
import NewPost from "./components/NewPost";
import NavBar from "./components/NavBar";
import PostIdPage from "./components/PostIdPage";
import YouTubePlayer from "./components/YouTubePlayer";

import "./styles/App.css";
import "./styles/PostItem.css";
import "./styles/NavBar.css";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Main from "./components/Main";
import AdminPage from "./components/AdminPage";
import GalleryPage from "./components/GalleryPage";
import userData from "./store/userData";
import Footer from "./components/Footer";

const App = observer(() => {
  const [userIsAuth, setUserIsAuth] = React.useState(false);
  React.useEffect(() => {
    if (userData.StorageUserData) {
      console.log("Авторизован");
      setUserIsAuth(true);
    } else {
      console.log("Не авторизован");
      setUserIsAuth(false);
    }
  }, [userData.UserIsAuth, userData.StorageUserData]);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar userIsAuth={userIsAuth} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/posts"
            exact
            element={
              <div>
                <PostList />
              </div>
            }
          />
          <Route path="/post_page/:id" exact element={<PostIdPage />} />
          <Route path="/player" element={<YouTubePlayer />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
});

export default App;
