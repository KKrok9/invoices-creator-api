import React from "react";
import TextField from "@mui/material/TextField";

const InputStyles = {
  margin: "2rem",
  "& .MuiInputBase-input": {
    height: "0.9rem",
  },
};

const CustomInput = (props) => {
  const { label, readOnlyMode, hasError, min, ...rest } = props;
  const readOnly = readOnlyMode ? true : false;
  const error = hasError ? true : false;
  const inputProps = { readOnly, ...rest };
  if (typeof min !== "undefined") {
    inputProps.min = min;
  }
  return (
    <TextField
      label={label}
      variant="outlined"
      inputProps={inputProps}
      error={error}
      {...rest}
      sx={InputStyles}
    >
      {label}
    </TextField>
  );
};

export default CustomInput;
