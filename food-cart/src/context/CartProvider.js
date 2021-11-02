import React, { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (currentState, action) => {
  if (action.type === "ADD") {
    let itemIndex = -1;
    const existing = currentState.items.some((item, index) => {
      itemIndex = index;
      return item.id === action.item.id;
    });
    if (!existing) {
      const updatedItems = currentState.items.concat(action.item);
      const updatedTotalAmount =
        currentState.totalAmount + action.item.price * action.item.amount;

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    } else {
      //Update amount of existing item
      const existingItem = currentState.items.find(
        (item) => item.id === action.item.id
      );
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      const updatedTotalAmount =
        currentState.totalAmount + action.item.price * action.item.amount;
      let updatedItems = [...currentState.items];
      updatedItems[itemIndex] = updatedItem;

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
  }
  if (action.type === "REMOVE") {
    let itemIndex = -1;
    const existing = currentState.items.some((item, index) => {
      itemIndex = index;
      return item.id === action.id;
    });
    const existingItem = currentState.items[itemIndex];

    if (!existing) {
      return;
    }

    const updatedTotalAmount = currentState.totalAmount - existingItem.price;
    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = currentState.items.filter((item) => item.id !== action.id);
    } else {
      updatedItems = [...currentState.items];
      updatedItems[itemIndex].amount -= 1;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchAction] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = (item) => {
    dispatchAction({ type: "ADD", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
