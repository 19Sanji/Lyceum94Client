import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import { observer } from "mobx-react-lite";
import "../store/userData";
import userData from "../store/userData";

function NavBar(userIsAuth) {
  const [LogoutLinkVisible, setLogoutLinkVisible] = React.useState(true);
  const [LoginLinkVisible, setLoginLinkVisible] = React.useState(false);
  const [PostListLinkVisible, setPostListLinkVisible] = React.useState(true);

  const [isAdmin, setIsAdmin] = React.useState(false);

  React.useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      const sessionStorageUserData = JSON.parse(sessionStorage.getItem("user"));
      if (sessionStorageUserData) {
        setLoginLinkVisible(true);
        setLogoutLinkVisible(false);
        setPostListLinkVisible(false);

        if (sessionStorageUserData[0].Статус === "Администратор") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      } else {
        setLoginLinkVisible(false);
        setLogoutLinkVisible(true);
        setPostListLinkVisible(true);

        setIsAdmin(false);
      }
    } else {
      setLogoutLinkVisible(true);
      setLoginLinkVisible(false);
      setPostListLinkVisible(true);
    }

    return () => {
      isMounted = false;
    };
  }, [userIsAuth, userData.UserIsAuth, userData.StorageUserData]);

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      <div className="navbar__links">
        <Link to="/admin" hidden={!isAdmin}>
          Страница Администратора
        </Link>
        <Link to="/posts" hidden={PostListLinkVisible}>
          Посты
        </Link>
        <Link to="/gallery">Галерея достижений</Link>
        <Link to="/login" hidden={LoginLinkVisible}>
          Вход
        </Link>
        <Link to="/registration">Регистрация</Link>
        <Link
          to="/"
          onClick={() => {
            userData.LogOut();
          }}
          hidden={LogoutLinkVisible}
        >
          Выход
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
