import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import BodyOutline from "../components/outlines/BodyOutline";
import NavOutline from "../components/outlines/NavOutline";
import Button from "../components/ui/Button";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen">
      <NavOutline>
        <Link to="/" className="mx-auto">
          <img
            width={100}
            alt="프라다"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Prada-Logo.svg/1280px-Prada-Logo.svg.png"
          />
        </Link>
      </NavOutline>
      <section className="flex flex-col text-center h-screen gap-10 bg-black text-white pt-52">
        <h1 className="text-5xl font-extrabold">404</h1>
        <div className="flex flex-col text-sm gap-2 px-4 text-bold">
          <h3 className="font-extrabold text-lg">페이지를 찾을 수 없습니다</h3>
          <p className="pt-1 flex-wrap">
            찾고있는 페이지를 찾을 수 없습니다. 사이트를 계속 탐색하려면
            홈페이지로 돌아가십시오.
          </p>
        </div>
        <Link to="/">
          <Button text="돌아가기" />
        </Link>
      </section>
    </div>
  );
}
