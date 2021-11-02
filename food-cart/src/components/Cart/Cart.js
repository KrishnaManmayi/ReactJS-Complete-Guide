import React, { useContext } from "react";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import CartContext from "../../context/cart-context";

function Cart(props) {
  const cartCtx = useContext(CartContext);

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartCtx.addItem.bind(null, { ...item, amount: 1 })}
          onRemove={cartCtx.removeItem.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  return (
    <Modal onClickBackdrop={props.onCloseCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
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
