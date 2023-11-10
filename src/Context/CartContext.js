import React, { createContext, useState } from "react";
import Menu from "../Components/MenuApi";
import Restraunt from "../Components/Restraunt";

export const Cartcontext = createContext(Menu);

export default function CartcontextProvider() {
  const [menu, setmenu] = useState(Menu);
  const [overlay, setoverlay] = useState(false);
  const [quant, setquant] = useState(0);
  const [itemprice, setitemprice] = useState(0);
  const [itemcat, setitemcat] = useState("All");

  const addHandler = () => {
    setoverlay(!overlay);
    console.log(overlay);
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
    setitemprice(itemprice + parseInt(curr.price));
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
      setitemprice(itemprice - parseInt(curr.price));
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
        }}>
        <Restraunt />
      </Cartcontext.Provider>
    </>
  );
}
