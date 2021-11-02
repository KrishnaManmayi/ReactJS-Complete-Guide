import React, { useContext } from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../context/cart-context";

function MealItem(props) {
  const meal = props.meal;
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({ ...meal, amount: +amount });
  };

  return (
    <div className={styles.mealItem}>
      <div className={styles.mealDescription}>
        <span id={styles.name}>{meal.name}</span>
        <span id={styles.description}>{meal.description}</span>
        <span id={styles.price}>${meal.price}</span>
      </div>
      <div>
        <MealItemForm id={meal.id} onAddToCart={addToCartHandler} />
      </div>
    </div>
  );
}

export default MealItem;
