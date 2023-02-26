import React from "react";
import { getCart } from "../api/firebase";
import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../context/AuthContext";
import CartItem from "../components/CartItem";
import PriceCard from "../components/PriceCard";
import Button from "../components/ui/Button";

const SHIPPING = 3000;

export default function MyCart() {
  const { uid } = useAuthContext();
  const { isLoading, data: products } = useQuery(["carts"], () => getCart(uid));

  if (isLoading) return <p>Loading..</p>;

  const hasProduct = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce((prev, c) => prev + parseInt(c.price) * c.quantity, 0);
  return (
    <section className="p-8 flex flex-col">
      <p className="text-xl font-bold text-center pb-4 border-b border-gray-300">
        내 장바구니
      </p>
      {!hasProduct && <p>장바구니에 상품이 없습니다</p>}
      {hasProduct && (
        <>
          <ul className="border-b border-gray-300 mb-8 p-4 px-8">
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} uid={uid} />
              ))}
          </ul>
          <div className="flex justify-between items-center px-2 md:px-8 lg:px-1 mb-6">
            <PriceCard text="상품 총액" price={totalPrice} />
            <div className="shrink-0">+</div>
            <PriceCard text="배송액" price={SHIPPING} />
            <div className="shrink-0">=</div>
            <PriceCard text="총가격" price={totalPrice + SHIPPING} />
          </div>
          <Button text="주문하기" />
        </>
      )}
    </section>
  );
}
