import React, { useState, useEffect, useCallback } from "react";
import styles from "../../styles/Form.module.css";
import CustomInput from "../custom-components/CustomInput";
import CustomButton from "../custom-components/CustomButton";
import SendIcon from "@mui/icons-material/Send";
import { isEmpty } from "../../utils/Validation";

const Form = ({ invoices, setInvoices }) => {
  const initialFormValues = {
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
  };

  const [values, setValues] = useState(initialFormValues);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormSubmit, setIsFormSubmit] = useState(false);
  const [clickCounter, setClickCounter] = useState(0);

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

  const handleErrorChange = (fieldName, hasError) => {
    setValues((prevValues) => ({
      ...prevValues,
      [fieldName]: {
        ...prevValues[fieldName],
        has_error: hasError,
      },
    }));
  };

  const checkErrors = () => {
    if (clickCounter > 0) {
      handleErrorChange("tax_id", isEmpty(values.tax_id.value));
      handleErrorChange("company_name", isEmpty(values.company_name.value));
      handleErrorChange("address", isEmpty(values.address.value));
      handleErrorChange("price_per_unit", isEmpty(values.price_per_unit.value));
      handleErrorChange("quantity", isEmpty(values.quantity.value));
    }
  };

  useEffect(() => {
    checkErrors();
  }, [clickCounter]);

  const checkFormValidity = useCallback(() => {
    if (
      values.tax_id.has_error === false &&
      values.company_name.has_error === false &&
      values.address.has_error === false &&
      values.price_per_unit.has_error === false &&
      values.quantity.has_error === false
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [
    values.tax_id.has_error,
    values.company_name.has_error,
    values.address.has_error,
    values.price_per_unit.has_error,
    values.quantity.has_error,
  ]);
  useEffect(() => {
    checkFormValidity();
  }, [checkFormValidity]);

  const handlePriceGrossChange = () => {
    const pricePerUnit = values.price_per_unit.value;
    const quantity = values.quantity.value;

    if (pricePerUnit && quantity) {
      setValues((prevValues) => ({
        ...prevValues,
        price_gross: {
          ...prevValues.price_gross,
          value: pricePerUnit * quantity,
        },
      }));
    }
  };

  const resetFormValues = () => {
    setValues(initialFormValues);
  };

  useEffect(() => {
    if (values.price_per_unit.value !== "" && values.quantity.value !== "") {
      handlePriceGrossChange();
    }
  }, [values.price_per_unit.value, values.quantity.value]);

  useEffect(() => {
    if (isFormValid && isFormSubmit) {
      const newInvoice = {
        tax_id: values.tax_id.value,
        company_name: values.company_name.value,
        address: values.address.value,
        price_per_unit: values.price_per_unit.value,
        quantity: values.quantity.value,
        price_gross: values.price_gross.value,
      };
      setInvoices((prevInvoices) => [...prevInvoices, newInvoice]);
      resetFormValues();
    }
  }, [isFormValid]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setClickCounter(clickCounter + 1);
    setIsFormSubmit(true);
  };

  return (
    <div className={styles["form-container"]}>
      <form className={styles["form"]} onSubmit={handleSubmit}>
        <h1 className={styles["form-header"]}>ADD INVOICE</h1>
        <div className={styles["form-1st--row"]}>
          <CustomInput
            label={values.tax_id.label}
            value={values.tax_id.value}
            onChange={handleChange("tax_id")}
            hasError={values.tax_id.has_error}
          ></CustomInput>
          <CustomInput
            label={values.company_name.label}
            value={values.company_name.value}
            onChange={handleChange("company_name")}
            hasError={values.company_name.has_error}
          ></CustomInput>
          <CustomInput
            label={values.address.label}
            value={values.address.value}
            onChange={handleChange("address")}
            hasError={values.address.has_error}
          ></CustomInput>
        </div>
        <div className={styles["form-2nd--row"]}>
          <CustomInput
            label={values.price_per_unit.label}
            value={values.price_per_unit.value}
            onChange={handleChange("price_per_unit")}
            hasError={values.price_per_unit.has_error}
            type="number"
            min="0"
          ></CustomInput>
          <CustomInput
            label={values.quantity.label}
            value={values.quantity.value}
            type="number"
            onChange={handleChange("quantity")}
            hasError={values.quantity.has_error}
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
