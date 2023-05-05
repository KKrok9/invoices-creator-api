import React from "react";
import styles from "../../styles/Form.module.css";
import CustomInput from "../custom-components/CustomInput";
import CustomButton from "../custom-components/CustomButton";
const Form = () => {
  return (
    <div className={styles["form-container"]}>
      <form className={styles["form"]}>
        <h1 className={styles["form-header"]}>ADD INVOICE FORM</h1>
        <div className={styles["form-1st--row"]}>
          <CustomInput label="Tax ID"></CustomInput>
          <CustomInput label="Company Name"></CustomInput>
          <CustomInput label="Address"></CustomInput>
        </div>
        <div className={styles["form-2nd--row"]}>
          <CustomInput label="Price per unit"></CustomInput>
          <CustomInput label="Quantity"></CustomInput>
          <CustomInput label="Price gross"></CustomInput>
        </div>
        <div className={styles["form-3rd--row"]}>
          <CustomButton label="SEND"></CustomButton>
        </div>
      </form>
    </div>
  );
};
export default Form;
