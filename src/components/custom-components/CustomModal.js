import React from "react";
import styles from "../../styles/CustomModal.module.css";

const CustomModal = (props) => {
  const onClose = props.onClose;

  const handleClose = () => {
    onClose();
  };

  return (
    <div className={styles["modal-overlay"]}>
      <div className={styles["modal-content"]}>
        <div className={styles["modal-header--content"]}>
          <h1>Invoice details</h1>
          <button className={styles["close-button"]} onClick={handleClose}>
            &times;
          </button>
        </div>
        <div className={styles["modal-content--row"]}>
          <p>Tax ID: {props.tax_id}</p>
        </div>
        <div className={styles["modal-content--row"]}>
          <p>Company Name: {props.company_name}</p>
        </div>
        <div className={styles["modal-content--row"]}>
          <p>Company address: {props.address} </p>
        </div>
        <div className={styles["modal-content--row"]}>
          <p>Price per unit: {props.price_per_unit}$</p>
        </div>
        <div className={styles["modal-content--row"]}>
          <p>Quantity: {props.quantity}</p>
        </div>
        <div className={styles["modal-content--row"]}>
          <p>Price gross: {props.price_gross}$</p>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
