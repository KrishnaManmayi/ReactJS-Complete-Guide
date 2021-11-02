import React, { useContext } from "react";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import CartContext from "../../context/cart-context";

function Cart(props) {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx.items);
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClickBackdrop={props.onCloseCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{cartCtx.totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.roundedButton} onClick={props.onCloseCart}>
          Close
        </button>
        <button className={styles.filledButton}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
