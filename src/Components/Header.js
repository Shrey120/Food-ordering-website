import React, { useContext } from "react";
import "./style.css";
import { Cartcontext } from "../Context/CartContext";
import { BsCart } from "react-icons/bs";
export default function Header() {
  const { addHandler, quant, filteritem } = useContext(Cartcontext);
  return (
    <>
      <nav className="navbar">
        <div className="btn-grp">
          <button
            className="btn"
            onClick={() => filteritem("Breakfast")}>
            BreakFast
          </button>
          <button
            className="btn"
            onClick={() => filteritem("Lunch")}>
            Lunch
          </button>
          <button
            className="btn"
            onClick={() => filteritem("Dinner")}>
            Dinner
          </button>
          <button
            className="btn"
            onClick={() => filteritem("Evening")}>
            Evening
          </button>
          <button
            className="btn"
            onClick={() => filteritem("All")}>
            All
          </button>
        </div>
        <button
          className="cart-btn"
          onClick={() => addHandler()}>
          <div className="subscript">{quant}</div>
          <BsCart />
        </button>
      </nav>
    </>
  );
}
