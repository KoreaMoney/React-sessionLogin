/**
 * @brief 관리자 페이지
 * @author Kim Dowon
 * @Date 23.09.08.
 */
import React from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  // function handleMoveToHome() {
  //   const timeoutTimestamp = Date.now() + 30 * 60 * 1000;
  //   sessionStorage.setItem("timeoutTimestamp", timeoutTimestamp.toString());
  //   navigate("/home");
  // }

  function handleMoveToHome() {
    const timeoutTimestamp = Date.now() + 30 * 60 * 1000;
    localStorage.setItem("timeoutTimestamp", timeoutTimestamp.toString());
    navigate("/home");
  }
  return (
    <div>
      <h2>관리자 페이지 입니다</h2>
      <button onClick={handleMoveToHome}>홈으로 이동</button>
    </div>
  );
};

export default Index;
