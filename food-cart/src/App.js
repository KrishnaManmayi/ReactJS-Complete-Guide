import React, { Fragment, useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);
  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <Fragment>
      {showCart && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Meals />
    </Fragment>
  );
}

export default App;
