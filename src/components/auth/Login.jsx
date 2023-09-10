/**
 * @brief 섹션 로그인 진행
 * @author Kim Dowon
 * @Date 23.09.10.
 */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/index.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [sessionTimeout, setSessionTimeout] = useState(null);

  let navigate = useNavigate();

  // session 로그인 진행
  const handleLogin = (event) => {
    event.preventDefault();

    const validUsername = "admin" || "client";
    const validPassword = "admin" || "client";
    setUsername(validUsername);
    setPassword(validPassword);

    if (username === "admin" && password === "admin") {
      const timeoutTimestamp = Date.now() + 30 * 60 * 1000;
      sessionStorage.setItem("admin", "true");
      sessionStorage.setItem("timeoutTimestamp", timeoutTimestamp.toString());
      setLoginStatus("관리자 입니다");
      navigate("/home");
    } else if (username === "client" && password === "client") {
      const timeoutTimestamp = Date.now() + 30 * 60 * 1000;
      sessionStorage.setItem("client", "true");
      sessionStorage.setItem("timeoutTimestamp", timeoutTimestamp.toString());
      setLoginStatus("사용자 입니다");
      navigate("/home");
    } else {
      setLoginStatus("아이디 또는 비밀번호가 틀렸습니다.");
    }

    resetSessionTimeout();
  };
  // session 만료
  const resetSessionTimeout = () => {
    if (sessionTimeout) {
      clearTimeout(sessionTimeout);
    }
    const timeoutId = setTimeout(() => {
      setLoginStatus("세션이 만료되었습니다. 다시 로그인하세요.");
      sessionStorage.clear();
      navigate("/");
    }, 30 * 60 * 1000); // 30 minutes
    setSessionTimeout(timeoutId);
  };

  // 다시 부르기
  useEffect(() => {
    resetSessionTimeout();
  }, [username, password]);

  return (
    <div className="login">
      <h1>Session storage_Login</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="username" className="idPw">
          ID
        </label>
        <input
          className="input"
          type="text"
          id="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />

        <label htmlFor="password" className="idPw">
          Password
        </label>
        <input
          className="input"
          type="password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit" className="loginBtn">
          Login
        </button>
      </form>

      <div>{loginStatus}</div>
    </div>
  );
};

export default Login;
