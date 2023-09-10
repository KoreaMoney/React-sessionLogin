/**
 * @brief 사용자 페이지
 * @author Kim Dowon
 * @Date 23.09.08.
 */
import React from "react";
import { useNavigate } from "react-router-dom";

const Client = () => {
  const navigate = useNavigate();

  function handleMoveToHome() {
    const timeoutTimestamp = Date.now() + 30 * 60 * 1000;
    sessionStorage.setItem("timeoutTimestamp", timeoutTimestamp.toString());
    navigate("/home");
  }
  return (
    <div>
      <h1>사용자 페이지 입니다</h1>
      <button onClick={handleMoveToHome}>홈으로 이동</button>
    </div>
  );
};

export default Client;
