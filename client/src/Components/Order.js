import React, { useContext } from "react";
import { Cartcontext } from "../Context/CartContext";

import { AiOutlineCloseCircle } from "react-icons/ai";
export default function Order() {
  let data = [];
  const { addHandler, menu, itemprice, onCheckout } = useContext(Cartcontext);
  return (
    <>
      <div
        className="overlay-container-main"
        onClick={() => addHandler()}></div>
      <div className="overlay-container-data">
        <div className="table">
          <div
            className="cross"
            onClick={addHandler}>
            <AiOutlineCloseCircle />
          </div>
          <table>
            <tbody>
              <tr className="table-col">
                <th>Image</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>

              {menu.map((ele, id) => {
                if (ele.quantity > 0) {
                  data.push(ele);
                  return (
                    <tr
                      key={id}
                      className="table-col">
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
            </tbody>
            <tfoot>
              <tr>
                <th
                  className="total"
                  colSpan="3">
                  Total :
                </th>
                <td>{itemprice}</td>
              </tr>
            </tfoot>
          </table>
          <button
            onClick={() => onCheckout(data)}
            className="checkout">
            Order
          </button>
        </div>
      </div>
    </>
  );
}
