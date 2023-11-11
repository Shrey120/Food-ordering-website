import React, { createContext, useState } from "react";
import Menu from "../Components/MenuApi";
import Restraunt from "../Components/Restraunt";
import { loadStripe } from "@stripe/stripe-js";
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

export const Cartcontext = createContext(Menu);

export default function CartcontextProvider() {
  const [menu, setmenu] = useState(Menu);
  const [overlay, setoverlay] = useState(false);
  const [quant, setquant] = useState(0);
  const [itemprice, setitemprice] = useState(0);
  const [itemcat, setitemcat] = useState("All");

  const onCheckout = async (data) => {
    const stripe = await loadStripe(
      "pk_test_51NdCYxSERmmQORdUn0z3ZPr2UAKV1UibQ2wrvVcCAxfNLzCnAPfvTptZnKVK4WE2g5MCoiwcPhncQImwZTMen48j00lZ6rPofp"
    );
    const body = {
      products: data,
    };
    const response = await fetch("http://localhost:7000/api/create-checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };
  const addHandler = () => {
    setoverlay(!overlay);
  };

  const filteritem = (ele) => {
    setitemcat(ele);
  };
  const increament = (curr) => {
    const newList = menu.map((ele) => {
      if (ele.id === curr.id) {
        return { ...ele, quantity: ele.quantity + 1 };
      }
      return ele;
    });
    setmenu(newList);
    setquant(quant + 1);
    setitemprice(itemprice + curr.price);
  };

  const decreament = (curr) => {
    const newList = menu.map((ele) => {
      if (ele.id === curr.id && ele.quantity > 0) {
        return { ...ele, quantity: ele.quantity - 1 };
      }
      return ele;
    });
    setmenu(newList);
    if (curr.quantity > 0) {
      setquant(quant - 1);
      setitemprice(itemprice - curr.price);
    }
  };

  return (
    <>
      <Cartcontext.Provider
        value={{
          menu,
          increament,
          filteritem,
          decreament,
          addHandler,
          overlay,
          quant,
          itemcat,
          itemprice,
          onCheckout,
        }}>
        <Restraunt />
      </Cartcontext.Provider>
    </>
  );
}
