import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/slices/cart-slice";
function Homepage() {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  function handleAddToCart(item) {
    dispatch(addToCart(item));
  }
  function removeAddToCart(item) {
    dispatch(removeFromCart(item));
    console.log("Removed from cart", item.id);
  }
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setProducts(data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  if (loading) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <Circles
          height={"120"}
          width={"120"}
          color="red"
          visible={true}
        ></Circles>
      </div>
    );
  }
  return (
    <div className="bg-indigo-100  px-12 py-10 flex gap-4 flex-wrap justify-center items-center">
      {products && products.length > 0 ? (
        products.map((item) => (
          <div
            key={item.id}
            className=" bg-white px-4 py-2 height-[350px] w-[350px] flex flex-col items-center justify-center gap-4"
          >
            <div className="h-[200px] w-[200px]">
              <img
                className="object-cover h-full w-[80%]"
                src={item.image}
                alt=""
              />
            </div>
            <div>
              <div className="flex flex-col gap-2 items-center justify-center">
                <h1 className="text-xl font-bold " alt={item.title}>
                  {item.title.slice(0, 25)}....
                </h1>
                <span className="text-red-400 font-bold text-lg">
                  ${item.price}
                </span>
              </div>
            </div>
            <button
              className="bg-indigo-400 px-4 py-2 rounded-lg hover:bg-orange-400"
              onClick={(e) => {
                e.preventDefault();
                {
                  cart.some((addedItems) => addedItems.id === item.id)
                    ? removeAddToCart(item)
                    : handleAddToCart(item);
                }
              }}
            >
              {cart.some((addedItems) => addedItems.id === item.id)
                ? "Remove from cart"
                : "Add to cart"}
            </button>
          </div>
        ))
      ) : (
        <div>No products to show............</div>
      )}
    </div>
  );
}

export default Homepage;
