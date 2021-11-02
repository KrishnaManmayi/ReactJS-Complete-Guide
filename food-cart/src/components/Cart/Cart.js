import React from "react";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

function Cart(props) {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
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
        <span>35.62</span>
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
