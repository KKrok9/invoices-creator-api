import React from "react";
import styles from "../../styles/Invoices.module.css";
import SingleInvoice from "./single-invoice/SingleInvoice";


const Invoices = ({ invoices }) => {
  return (
    <div className={styles["invoices-container"]}>
      <div className={styles["invoices-wrapper"]}>
        <h1 className={styles["invoices-header"]}>ALL YOUR INVOICES</h1>
        <div className={styles["invoices-list"]}>
          {invoices.map((invoice,index) => {
            return (
              <SingleInvoice
                tax_id={invoice.tax_id}
                company_name={invoice.company_name}
                address={invoice.address}
                price_per_unit={invoice.price_per_unit}
                quantity={invoice.quantity}
                price_gross={invoice.price_gross}
                key={index}
              ></SingleInvoice>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Invoices;
