import React, { useState } from "react";
import "./style.css";

export default function Card({ menu }) {
  return (
    <>
      <section className="all-card-container">
        {menu.map((element, id) => {
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
                <span className="card-tag">Order Now</span>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
