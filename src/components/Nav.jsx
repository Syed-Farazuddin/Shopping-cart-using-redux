import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingBasket, FaHome } from "react-icons/fa";
function Nav() {
  return (
    <div className="py-4 cursor-pointer  px-8 bg-indigo-300 flex items-center justify-between">
      <div>
        <h1 className="font-extrabold text-lime-900 font-serif text-2xl hover:text-indigo-950">
          <Link to={"/"}>Shopping cart using Redux</Link>
        </h1>
      </div>
      <div className="flex items-center gap-2 justify-around">
        <ul className="flex justify-around items-center gap-5 text-2xl  text-lime-900 font-extrabold ">
          <Link to={"/"}>
            <li className="hover:text-indigo-950">
              <FaHome />
            </li>
          </Link>
          <Link to={"/cart"}>
            <li className="hover:text-indigo-950">
              <FaShoppingBasket />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
