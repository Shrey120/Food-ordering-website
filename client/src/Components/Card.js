import React, { useContext } from "react";
import "./style.css";
import { Cartcontext } from "../Context/CartContext";

export default function Card() {
  const { menu, increament, decreament, addHandler, itemcat } =
    useContext(Cartcontext);

  return (
    <>
      <section className="main-card-container">
        {menu.map((element, id) => {
          if (element.category === itemcat || itemcat === "All")
            return (
              <div
                className="card-container"
                key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-num">{element.id}</span>
                    <span className="card-type">{element.category}</span>
                    <h1 className="card-heading">{element.name}</h1>
                    <span className="card-description">
                      {element.description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img
                    src={element.image}
                    alt="images"
                    className="card-img"></img>
                </div>

                <div className="order">
                  <div className="addtocart">
                    <button
                      onClick={() => increament(element)}
                      className="btn-order">
                      +
                    </button>
                    <input
                      className="btn-order input"
                      placeholder={element.quantity}
                    />
                    <button
                      onClick={() => decreament(element)}
                      className="btn-order">
                      -
                    </button>
                  </div>
                  <span
                    onClick={() => addHandler()}
                    className="card-tag">
                    Order Now
                  </span>
                </div>
              </div>
            );
        })}
      </section>
    </>
  );
}
