import React, { useState } from "react";
import { uploadeImage } from "../api/uploader";
import Button from "../components/ui/Button";
import { addNewProduct } from "../api/firebase";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();
  const queryclient = useQueryClient();

  const { isLoading, error, data, mutate } = useMutation(
    ({ product, url }) => {
      addNewProduct(product, url);
    },
    {
      onSuccess: () => {
        queryclient.invalidateQueries(["products"]);
      },
    }
  );

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      files && setFile(files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    uploadeImage(file) //
      .then((url) => {
        mutate(
          { product, url },
          {
            onSuccess: () => {
              setSuccess(true);
              setTimeout(() => {
                setSuccess(null);
              }, 4000);
            },
          }
        );
      })
      .finally(() => setIsUploading(false));
  };

  return (
    <section className="w-full text-center">
      <h2 className="text-2xl font-bold my-4">새로운 제품 등록</h2>
      {success && <p className="my-2">✅ 성공적으로 제품이 등록되었습니다!</p>}
      {file && (
        <img
          className="w-96 mx-auto mb-2"
          src={URL.createObjectURL(file)}
          alt="제품이미지"
        />
      )}
      <form className="flex flex-col px-12" onSubmit={handleSubmit}>
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
