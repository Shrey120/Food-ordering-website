import React, { useContext } from "react";
import { Cartcontext } from "../Context/CartContext";

import { AiOutlineCloseCircle } from "react-icons/ai";
export default function Order() {
  const { addHandler, menu, itemprice } = useContext(Cartcontext);
  return (
    <>
      <div
        className="overlay-container-main"
        onClick={() => addHandler()}></div>
      <div className="overlay-container-data">
        <div
          className="cross"
          onClick={addHandler}>
          <AiOutlineCloseCircle />
        </div>
        <table className="table">
          <tr className="table-col">
            <th>Image</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          {menu.map((ele) => {
            if (ele.quantity > 0) {
              return (
                <tr className="table-col">
                  <td>
                    <img
                      src={ele.image}
                      className="cart-image"
                    />
                  </td>
                  <td>{ele.name}</td>
                  <td>{ele.quantity}</td>
                  <td>{ele.price}</td>
                </tr>
              );
            }
          })}
          <tfoot>
            <tr>
              <th
                className="total"
                colspan="3">
                Total :
              </th>
              <td>{itemprice}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}
