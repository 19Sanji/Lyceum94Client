import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import "../store/userData";
import userData from "../store/userData";
import "../styles/Login.css";

const Login = observer(() => {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [ErrorSpan, setErrorSpan] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    userData.LogOut();
  }, []);

  async function Go() {
    await axios
      .post("http://localhost:3001/login", {
        login,
        password,
      })
      .then((res) => {
        if (res.data[0]) {
          userData.AuthUser(res.data);
          setErrorSpan("");
          setLogin("");
          setPassword("");
          navigate("/");
        } else {
          setErrorSpan("Пользователь не найден");
        }
      });
  }

  return (
    <div className="log_div">
      <form className="log_form">
        <h3>Введите логин и пароль</h3>
        <span>{ErrorSpan}</span>
        <input
          placeholder="Введите логин"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Введите пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <Button onClick={Go}>Войти</Button>
      </form>
    </div>
  );
});
export default Login;
