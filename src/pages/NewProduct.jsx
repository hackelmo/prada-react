import React, { useState } from "react";
import { uploadeImage } from "../api/uploader";
import Button from "../components/ui/Button";
import { addNewProduct } from "../api/firebase";

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      files && setFile(files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };

  const handleSubmit = (e) => {
    setIsUploading(true);
    e.preventDefault();
    uploadeImage(file) //
      .then((url) => {
        addNewProduct(product, url);
      })
      .then(() => {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(null);
        }, 4000);
      })
      .finally(() => setIsUploading(false));
  };

  return (
    <section>
      <h2>새로운 제품 등록</h2>
      {success && <p>✅ 성공적으로 제품이 등록되었습니다!</p>}
      {file && <img src={URL.createObjectURL(file)} alt="제품이미지" />}
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="file"
          accept="image/*"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          placeholder="제품명"
          //null이나 undefined면 뒤로간다
          value={product.title ?? ""}
          required
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="가격"
          value={product.price ?? ""}
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="카테고리"
          value={product.category ?? ""}
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="desc"
          placeholder="제품 설명"
          value={product.desc ?? ""}
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="options"
          placeholder="옵션명(콤마(,)로 구분)"
          value={product.options ?? ""}
          required
          onChange={handleChange}
        />
        <Button
          text={isUploading ? "업로드 중..." : "제품 등록하기"}
          disabled={isUploading}
        />
      </form>
    </section>
  );
}
