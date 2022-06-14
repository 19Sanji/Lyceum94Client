import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import "../styles/Registration.css";

export default function Registration() {
  const [surname, setSurname] = React.useState("");
  const [name, setName] = React.useState("");
  const [patronymic, setPatronymic] = React.useState("");
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [ErrorSpan, setErrorSpan] = React.useState("");
  const [ButtonState, setButtonState] = React.useState(true);

  React.useEffect(() => {
    if (
      surname.length !== 0 &&
      name.length !== 0 &&
      patronymic.length !== 0 &&
      login.length !== 0 &&
      password.length !== 0
    ) {
      setButtonState(false);
    } else {
      setButtonState(true);
    }
  }, [surname, name, patronymic, login, password]);

  async function Go() {
    await axios
      .post("http://localhost:3001/registration", {
        surname,
        name,
        patronymic,
        login,
        password,
      })
      .then(function (response) {
        setErrorSpan(response.data);
        setSurname("");
        setName("");
        setPatronymic("");
        setLogin("");
        setPassword("");
      });
  }

  return (
    <div>
      <div className="reg_div">
        <div className="reg_form">
          <h3>Вступай в наши ряды!</h3>
          <span>{ErrorSpan}</span>
          <input
            placeholder="Введите Вашу Фамилию"
            value={surname}
            onChange={(e) => {
              setSurname(e.target.value);
            }}
          ></input>
          <input
            placeholder="Введите Ваше Имя"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
          <input
            placeholder="Введите Ваше Отчество"
            value={patronymic}
            onChange={(e) => {
              setPatronymic(e.target.value);
            }}
          ></input>
          <input
            placeholder="Введите Ваш Логин"
            value={login}
            onChange={(e) => {
              setLogin(e.target.value);
            }}
          ></input>
          <input
            type="password"
            placeholder="Введите Ваш Пароль"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <Button onClick={Go} disabled={ButtonState}>
            {" "}
            Зарегистрироваться
          </Button>
        </div>
      </div>
    </div>
  );
}
