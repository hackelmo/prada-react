import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { addOrUpdateCart, getCart, removeCart } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

export default function useCart() {
  const { uid } = useAuthContext();
  const queryclient = useQueryClient();

  const cartQuery = useQuery(["carts", uid], () => getCart(uid));

  const addCart = useMutation(
    ({ uid, product }) => {
      return addOrUpdateCart(uid, product);
    },
    {
      onSuccess: () => queryclient.invalidateQueries(["carts", uid]),
    }
  );

  const deleteCart = useMutation(({ uid, id }) => removeCart(uid, id), {
    onSuccess: () => queryclient.invalidateQueries(["carts", uid]),
  });

  return { cartQuery, addCart, deleteCart };
}
