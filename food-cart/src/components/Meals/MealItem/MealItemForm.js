import React, { useRef } from "react";
import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";

function MealItemForm(props) {
  const inputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(inputRef.current.value);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          defaultValue: "1",
          min: "1",
          max: "5",
          step: "1",
        }}
      />
      <button type="submit">+Add</button>
    </form>
  );
}

export default MealItemForm;
