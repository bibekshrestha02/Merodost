class Auth {
  constructor(history, token) {
    this.history = history;
    this.token = token;
  }
  login = () => {
    localStorage.setItem("token", this.token);
    return this.history.push("/admin");
  };
  isAuthenticate = () => {
    const token = localStorage.getItem("token");
    return token;
    // return false;
  };

  //   handleAuth = () => {
  //     localStorage.setItem("token", this.token);
  //     return this.history.push("/");
  //   };
  LogOut = () => {
    localStorage.removeItem("token");
    return this.history.replace("/");
  };
}

export default Auth;
