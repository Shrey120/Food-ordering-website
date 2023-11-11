import React from "react";
import Restraunt from "./Components/Restraunt.js";
import CartcontextProvider from "./Context/CartContext.js";
import Order from "./Components/Order.js";
function App() {
  return (
    <>
      <CartcontextProvider>
        <Restraunt />
      </CartcontextProvider>
    </>
  );
}

export default App;
