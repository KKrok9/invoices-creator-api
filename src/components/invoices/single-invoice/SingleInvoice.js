import React from "react";
import styles from "../../../styles/SingleInvoice.module.css";
import CustomButton from "../../custom-components/CustomButton";
import VisibilityIcon from "@mui/icons-material/Visibility";

const SingleInvoice = (props) => {
  return (
    <div className={styles["single-invoice--container"]}>
      <div className={styles["single-invoice--items__column"]}>
        <p>Company Name</p>
        <p>{props.company_name}</p>
      </div>
      <div className={styles["single-invoice--items__column"]}>
        <p>Addres</p>
        <p>{props.address}</p>
      </div>
      <div className={styles["single-invoice--items__column"]}>
        <p>Price gross</p>
        <p>{props.price_gross}</p>
      </div>
      <div className={styles["single-invoice--items__column"]}>
        <CustomButton label="View" endIcon={<VisibilityIcon />}></CustomButton>
      </div>
    </div>
  );
};
export default SingleInvoice;
