import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>404</h1>
      <p>페이지를 찾을 수 없습니다</p>
      <p>
        찾고있는 페이지를 찾을 수 없습니다. 사이트를 계속 탐색하려면 홈페이지로
        돌아가십시오.
      </p>
      <button onClick={() => navigate("/")}>돌아가기</button>
    </div>
  );
}
