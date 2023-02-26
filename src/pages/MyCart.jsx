import React from "react";
import { getCart } from "../api/firebase";
import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../context/AuthContext";
import CartItem from "../components/CartItem";
import PriceCard from "../components/PriceCard";

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
    <section>
      <p>내 장바구니</p>
      {!hasProduct && <p>장바구니에 상품이 없습니다</p>}
      {hasProduct && (
        <>
          <ul>
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} uid={uid} />
              ))}
          </ul>
          <div>
            <PriceCard text="상품 총액" price={totalPrice} />
            +
            <PriceCard text="3000" price={SHIPPING} />
            =
            <PriceCard text="총가격" price={totalPrice + SHIPPING} />
          </div>
        </>
      )}
    </section>
  );
}
