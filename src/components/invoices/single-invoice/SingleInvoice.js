import React, { useState } from "react";
import styles from "../../../styles/SingleInvoice.module.css";
import CustomButton from "../../custom-components/CustomButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CustomModal from "../../custom-components/CustomModal";

const SingleInvoice = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleViewClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
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
        <p>{props.price_gross}$</p>
      </div>
      <div className={styles["single-invoice--items__column"]}>
        <CustomButton
          label="View"
          endIcon={<VisibilityIcon />}
          onClick={handleViewClick}
        ></CustomButton>
      </div>
      {isModalOpen && (
        <CustomModal
          onClose={handleCloseModal}
          tax_id={props.tax_id}
          company_name={props.company_name}
          address={props.address}
          price_per_unit={props.price_per_unit}
          quantity={props.quantity}
          price_gross={props.price_gross}
        ></CustomModal>
      )}
    </div>
  );
};
export default SingleInvoice;
