import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col text-center justify-center h-screen gap-10">
      <h1 className="text-5xl font-bold">404</h1>
      <div className="flex flex-col text-sm gap-2">
        <h3 className="font-bold">페이지를 찾을 수 없습니다</h3>
        <p>
          찾고있는 페이지를 찾을 수 없습니다. 사이트를 계속 탐색하려면
          홈페이지로 돌아가십시오.
        </p>
      </div>
      <Link to="/">
        <Button text="돌아가기" />
      </Link>
    </section>
  );
}
