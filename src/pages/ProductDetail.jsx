import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/ui/Button";
import { useAuthContext } from "../context/AuthContext";
import useCart from "../hooks/useCart";

export default function ProductDetail() {
  const { uid } = useAuthContext();
  const {
    state: {
      product: { category, image, id, options, desc, price, title },
    },
  } = useLocation();
  const [success, setSuccess] = useState();

  const {
    addCart: { mutate },
  } = useCart();

  const [selected, setSelected] = useState(options && options[0]);

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };
  const handleClick = () => {
    const product = { id, price, image, title, option: selected, quantity: 1 };
    mutate(
      { uid, product },
      {
        onSuccess: () => {
          setSuccess(true);
          setTimeout(() => {
            setSuccess(null);
          }, 4000);
        },
      }
    );
  };

  return (
    <>
      <p className="mx-12 mt-4 text-gray-700">{category}</p>
      {success && (
        <div className="w-full text-center ">
          장바구니 등록이 성공했습니다✅
        </div>
      )}
      <section className="flex flex-col lg:flex-row p-4">
        <img className="w-full px-4 basis-5/12" src={image} alt={title} />
        <div className="w-full basis-7/12 flex flex-col p-4">
          <h2 className="text-3xl font-bold py-2">{title}</h2>
          <p className="text-2xl font-bold py-2  border-b border-gray-400">
            ₩{price}
          </p>

          <p className="py-4 text-lg">{desc}</p>
          <div className="flex items-center">
            <label htmlFor="select" className="font-bold">
              옵션 :
            </label>
            <select
              className="p-2 m-4 flex-1 border-2 border-dashed outline-none"
              id="select"
              onChange={handleSelect}
              value={selected}
            >
              {options &&
                options.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
            </select>
          </div>
          <Button text="장바구니에 추가" onClick={handleClick} />
        </div>
      </section>
    </>
  );
}
