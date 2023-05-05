import React from "react";
import styles from "../../styles/Invoices.module.css";
const Invoices = () => {
  return (
    <div className={styles["invoices-container"]}>
      <div className={styles["invoices-wrapper"]}>
        <h1 className={styles["invoices-header"]}>ALL YOUR INVOICES</h1>
      </div>
    </div>
  );
};
export default Invoices;
