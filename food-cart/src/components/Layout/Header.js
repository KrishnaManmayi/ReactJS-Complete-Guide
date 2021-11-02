import React, { Fragment } from "react";
import headerImg from "./../../assets/header1.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <Fragment>
      <div className={styles.nav}>
        <header>ReactMeals</header>
        <HeaderCartButton onClick={props.onShowCart} />
      </div>
      <div className={styles.imageContainer}>
        <img src={headerImg} alt="header" />
      </div>
    </Fragment>
  );
}

export default Header;
