import React from "react";
import cartImg from "./../../assets/cart-fill.svg";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      <img src={cartImg} alt="cart icon" />
      Your Cart
      <span className={styles.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
