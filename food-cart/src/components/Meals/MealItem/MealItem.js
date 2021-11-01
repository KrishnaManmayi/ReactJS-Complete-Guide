import React from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

function MealItem(props) {
  const meal = props.meal;
  return (
    <div className={styles.mealItem}>
      <div className={styles.mealDescription}>
        <span id={styles.name}>{meal.name}</span>
        <span id={styles.description}>{meal.description}</span>
        <span id={styles.price}>${meal.price}</span>
      </div>
      <div>
        <MealItemForm id={meal.id} />
      </div>
    </div>
  );
}

export default MealItem;
