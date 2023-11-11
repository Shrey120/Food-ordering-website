import React, { useContext, useState } from "react";
import Menu from "./MenuApi";
import Card from "./Card";
import Header from "./Header";
import Order from "../Components/Order";
import { Cartcontext } from "../Context/CartContext";

export default function Restraunt() {
  const { overlay } = useContext(Cartcontext);

  return (
    <>
      {overlay && <Order />}
      <Header />
      <Card />
    </>
  );
}
