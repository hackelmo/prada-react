import React from "react";

export default function NewProduct() {
  return (
    <form className="flex flex-col w-full items-center gap-4">
      <h2>새로운 제품 등록</h2>
      <img src="" alt="제품이미지" />
      <input type="file" />
      <input type="" placeholder="제품명" />
      <input type="number" placeholder="가격" />
      <input type="" placeholder="카테고리" />
      <input type="" placeholder="제품 설명" />
      <input type="" placeholder="옵션명(콤마(,)로 구분)" />
      <button className="text-">제품 등록하기</button>
    </form>
  );
}
