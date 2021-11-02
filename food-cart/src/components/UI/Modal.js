import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onClick} className={styles.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const portal = document.getElementById("overlays");

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClickBackdrop} />,
        portal
      )}
      ;
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portal
      )}
      ;
    </Fragment>
  );
}

export default Modal;
