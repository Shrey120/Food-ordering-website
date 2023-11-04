import React, { useState } from "react";
import Menu from "./MenuApi";
import Card from "./Card";
import Header from "./Header";

const uniqueList = [
  ...new Set(
    Menu.map((curele) => {
      return curele.category;
    })
  ),
  "All",
];

export default function Restraunt() {
  const [menu, setmenu] = useState(Menu);
  const [list, setlist] = useState(uniqueList);

  const filteritem = (category) => {
    const updatedlist = Menu.filter((curele) => {
      return curele.category === category;
    });
    category === "All" ? setmenu(Menu) : setmenu(updatedlist);
  };

  return (
    <>
      <Header
        filteritem={filteritem}
        list={list}
        id={Menu.id}
      />
      <Card
        menu={menu}
        id={Menu.id}
      />
    </>
  );
}
