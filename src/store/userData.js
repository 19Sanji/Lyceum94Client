import { makeAutoObservable } from "mobx";

class userData {
  constructor() {
    makeAutoObservable(this);
  }
  UserIsAdmin = false;
  UserIsAuth = false;
  StorageUserData = {};

  AuthUser(user) {
    this.UserIsAuth = true;
    sessionStorage.setItem("user", JSON.stringify(user));
  }

  GetUser() {
    this.StorageUserData = sessionStorage.getItem("user");
  }

  LogOut() {
    this.UserIsAuth = false;
    sessionStorage.removeItem("user");
    // sessionStorage.removeItem("UserData");
    this.StorageUserData = {};
    console.log("Разлогинились");
  }
}

export default new userData();
