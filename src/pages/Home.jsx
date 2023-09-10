/**
 * @brief 메인 페이지
 * @author Kim Dowon
 * @Date 23.09.10.
 */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/index.css";

const Home = () => {
  const [sessionUserRole, setSessionUserRole] = useState(null);
  const [sessionTimeout, setSessionTimeout] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState("");

  const navigate = useNavigate();

  // 세션 스토리지에서 사용자 역할을 가져오기
  useEffect(() => {
    const userRole = sessionStorage.getItem("admin")
      ? "Admin"
      : sessionStorage.getItem("client")
      ? "사용자"
      : null;
    setSessionUserRole(userRole);

    // Calculate and update the time remaining
    const timeoutTimestamp = sessionStorage.getItem("timeoutTimestamp");
    if (timeoutTimestamp) {
      const timeoutDate = parseInt(timeoutTimestamp, 10);

      const updateRemainingTime = () => {
        const remainingDate = Math.max(timeoutDate - Date.now(), 0);
        const remainingMinutes = Math.floor(remainingDate / 60000);
        const remainingSeconds = Math.floor((remainingDate % 60000) / 1000);
        setTimeRemaining(`${remainingMinutes}분 ${remainingSeconds}초`);
      };

      updateRemainingTime();

      setSessionTimeout(
        setInterval(() => {
          updateRemainingTime();
        }, 1000)
      );
    }
  }, []);

  // 로그아웃
  const handleSignOut = () => {
    const confirmLogout = window.confirm("로그아웃 하시겠습니까?");
    if (confirmLogout) {
      navigate("/");
      sessionStorage.removeItem("admin");
      sessionStorage.removeItem("client");
      sessionStorage.removeItem("timeoutTimestamp");
      clearInterval(sessionTimeout);
      return;
    }
  };

  // 이동 버튼 클릭 시
  const handleNavigate = (path) => {
    clearInterval(sessionTimeout);
    navigate(path);
  };

  return (
    <div className="home">
      <h1 className="title">Session Home</h1>
      {sessionUserRole && <p>세션이 만료까지 {timeRemaining} 남았습니다.</p>}
      <h3>session storage에 저장된 값을 확인해보세요.</h3>

      <div className="move">
        {sessionUserRole === "Admin" ? (
          <>
            <button onClick={() => handleNavigate("/admin")}>관리자</button>
            <button onClick={() => handleNavigate("/client")}>사용자</button>
          </>
        ) : (
          <button onClick={() => handleNavigate("/client")}>
            {sessionUserRole}
          </button>
        )}
      </div>
      <button onClick={handleSignOut} className="signOut">
        로그아웃
      </button>
    </div>
  );
};

export default Home;
