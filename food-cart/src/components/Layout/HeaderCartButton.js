import React, { useContext } from "react";
import cartImg from "./../../assets/cart-fill.svg";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../context/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const totalItems = cartCtx.items.reduce((prev, current) => {
    return prev + current.amount;
  }, 0);
  return (
    <button className={styles.button} onClick={props.onClick}>
      <img src={cartImg} alt="cart icon" />
      Your Cart
      <span className={styles.badge}>{totalItems}</span>
    </button>
  );
};

export default HeaderCartButton;
