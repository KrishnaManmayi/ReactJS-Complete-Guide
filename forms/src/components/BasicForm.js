import useInput from "../hooks/use-input";

const BasicForm = () => {
  const {
    value: enteredFirstName,
    isValid: isFirstNameValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameValueChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInput((firstName) => firstName.trim() !== "");

  const {
    value: enteredLastName,
    isValid: isLastNameValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameValueChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput((lastName) => lastName.trim() !== "");

  const {
    value: enteredEmail,
    isValid: isEmailValid,
    hasError: emailHasError,
    valueChangeHandler: emailValueChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((email) => email.includes("@"));

  let formIsValid = false;

  if (isFirstNameValid && isLastNameValid && isEmailValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(enteredFirstName + " " + enteredLastName + " " + enteredEmail);

    firstNameReset();
    lastNameReset();
    emailReset();
  };

  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredFirstName}
            onChange={firstNameValueChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className="error-text">First name cannot be empty</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={enteredLastName}
            onChange={lastNameValueChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && (
            <p className="error-text">Last name cannot be empty</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailValueChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p className="error-text">Enter a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
