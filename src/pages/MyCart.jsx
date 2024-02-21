import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../store/slices/cart-slice";

function MyCart() {
  const [cartAmount, setCartAmount] = useState(0);
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state);
  useEffect(() => {
    setCartAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  console.log(cart, cartAmount);
  function removeAddToCart(item) {
    dispatch(removeFromCart(item));
    console.log("Removed from cart", item.id);
  }
  return (
    <div className="flex gap-10 flex-wrap bg-indigo-50  relative p-20 ">
      {cart && cart.length > 0 ? (
        <div className="flex justify-center items-center gap-10 flex-wrap">
          {cart.map((item) => (
            <div
              className="flex gap-4 rounded-lg justify-center items-center flex-col p-4 bg-white"
              key={item.id}
            >
              <div className="w-[200px] h-[200px]">
                <img
                  className="object-contain w-full h-full"
                  src={item.image}
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-lg font-bold">
                  {item.title.slice(0, 20)}....
                </p>
                <p className="text-lg text-red-500 font-bold">${item.price}</p>
                <p></p>
                <button
                  className="bg-indigo-400 px-4 py-2 rounded-lg hover:bg-orange-400"
                  onClick={(e) => {
                    e.preventDefault();
                    removeAddToCart(item);
                  }}
                >
                  Remove from cart
                </button>
              </div>
            </div>
          ))}
          <div className="absolute right-10 flex flex-col gap-3 bottom-10 bg-white px-4 py-2">
            <h3 className="text-indigo-600 font-extrabold text-3xl">
              Your cart Summary
            </h3>
            <p className="text-lg font-sans">Total Items : {cart.length}</p>
            <p className="text-lg font-sans">Total Amount : {cartAmount}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="text-3xl font-serif text-indigo-600 font-extrabold">
            Cart is Empty
          </h1>
          <button className="bg-blue-600 px-6 py-3 rounded-lg font-bold text-white ">
            <Link to={"/"}>Shop Now</Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default MyCart;
