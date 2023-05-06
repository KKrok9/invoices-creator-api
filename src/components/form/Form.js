import React, { useState, useEffect } from "react";
import styles from "../../styles/Form.module.css";
import CustomInput from "../custom-components/CustomInput";
import CustomButton from "../custom-components/CustomButton";
import SendIcon from "@mui/icons-material/Send";
const Form = ({ invoices, setInvoices }) => {
  const [values, setValues] = useState({
    tax_id: {
      label: "Tax ID",
      has_error: "",
      value: "",
    },
    company_name: {
      label: "Company Name",
      has_error: "",
      value: "",
    },
    address: {
      label: "Address",
      has_error: "",
      value: "",
    },
    price_per_unit: {
      label: "Price per unit",
      has_error: "",
      value: "",
    },
    quantity: {
      label: "Quantity",
      has_error: "",
      value: "",
    },
    price_gross: {
      label: "Price gross",
      has_error: "",
      value: "",
    },
  });

  const handleChange = (fieldName) => (event) => {
    const { value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [fieldName]: {
        ...prevValues[fieldName],
        value: value,
      },
    }));
  };

  const handlePriceGrossChange = () => {
    setValues((prevValues) => ({
      ...prevValues,
      price_gross: {
        ...prevValues.price_gross,
        value: values.price_per_unit.value * values.quantity.value,
      },
    }));
  };

  useEffect(() => {
    handlePriceGrossChange();
  }, [values.price_per_unit.value, values.quantity.value]);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const newInvoice = {
      tax_id: values.tax_id.value,
      company_name: values.company_name.value,
      address: values.address.value,
      price_per_unit: values.company_name.value,
      quantity: values.quantity.value,
      price_gross: values.price_gross.value,
    };
    setInvoices((prevInvoices) => [...prevInvoices, newInvoice]);
  };

  return (
    <div className={styles["form-container"]}>
      <form className={styles["form"]} onSubmit={formSubmitHandler}>
        <h1 className={styles["form-header"]}>ADD INVOICE FORM</h1>
        <div className={styles["form-1st--row"]}>
          <CustomInput
            label={values.tax_id.label}
            value={values.tax_id.value}
            onChange={handleChange("tax_id")}
          ></CustomInput>
          <CustomInput
            label={values.company_name.label}
            value={values.company_name.value}
            onChange={handleChange("company_name")}
          ></CustomInput>
          <CustomInput
            label={values.address.label}
            value={values.address.value}
            onChange={handleChange("address")}
          ></CustomInput>
        </div>
        <div className={styles["form-2nd--row"]}>
          <CustomInput
            label={values.price_per_unit.label}
            value={values.price_per_unit.value}
            onChange={handleChange("price_per_unit")}
            type="number"
            min="0"
          ></CustomInput>
          <CustomInput
            label={values.quantity.label}
            value={values.quantity.value}
            type="number"
            onChange={handleChange("quantity")}
            min="0"
          ></CustomInput>
          <CustomInput
            label={values.price_gross.label}
            readOnlyMode={true}
            value={values.price_gross.value}
          ></CustomInput>
        </div>
        <div className={styles["form-3rd--row"]}>
          <CustomButton
            type="submit"
            label="SEND"
            endIcon={<SendIcon />}
          ></CustomButton>
        </div>
      </form>
    </div>
  );
};
export default Form;
