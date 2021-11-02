import React, { useContext, useEffect, useState } from "react";
import cartImg from "./../../assets/cart-fill.svg";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../context/cart-context";

const HeaderCartButton = (props) => {
  const [buttonHighlighted, setButtonHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalItems = cartCtx.items.reduce((prev, current) => {
    return prev + current.amount;
  }, 0);

  const buttonClasses = `${styles.button} ${
    buttonHighlighted ? styles.bump : ""
  }`;

  useEffect(() => {
    if (totalItems > 0) {
      setButtonHighlighted(true);
    }

    const timer = setTimeout(() => {
      setButtonHighlighted(false);
    }, 300);

    return () => {
      //cleanup
      clearTimeout(timer);
    };
  }, [totalItems]);

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <img src={cartImg} alt="cart icon" />
      Your Cart
      <span className={styles.badge}>{totalItems}</span>
    </button>
  );
};

export default HeaderCartButton;
