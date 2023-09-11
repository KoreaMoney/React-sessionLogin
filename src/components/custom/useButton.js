import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isAdminCheck } from "../../recoil";

export const useButton = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const adminStatus = useRecoilState(isAdminCheck);

  let navigate = useNavigate();

  const onChangeTitle = () => {
    if (adminStatus) {
      setTitle(["Admin", "사용자"]);
    } else {
      setTitle("사용자");
    }
  };

  const handleMoveToPage = () => {
    if (title === "Admin") {
      navigate("/admin");
    } else {
      navigate("/client");
    }
  };
  return [title, onChangeTitle, handleMoveToPage];
};
