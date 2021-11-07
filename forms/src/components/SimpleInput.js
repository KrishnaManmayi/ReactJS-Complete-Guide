import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameInputTouched, setNameInputTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailInputTouched, setEmailInputTouched] = useState(false);

  const nameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = nameInputTouched && !nameIsValid;

  const emailIsValid = enteredEmail.trim() !== "" && enteredEmail.includes("@");
  const emailInputIsInvalid = emailInputTouched && !emailIsValid;

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setNameInputTouched(true);
  };

  const emailInputBlurHandler = (event) => {
    setEmailInputTouched(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setNameInputTouched(true);
    setEmailInputTouched(true);

    if (!nameIsValid || !emailIsValid) {
      return;
    }

    setEnteredName("");
    setNameInputTouched(false);

    setEnteredEmail("");
    setEmailInputTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your e-mail</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
