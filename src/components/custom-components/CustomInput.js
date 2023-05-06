import React from "react";
import TextField from "@mui/material/TextField";

const InputStyles = {
  margin: "2rem",
  "& .MuiInputBase-input": {
    height: "0.9rem",
  },
};

const CustomInput = (props) => {
  const { label, readOnlyMode, ...rest } = props;
  const readOnly = readOnlyMode ? true : false;
  return (
    <TextField
      label={label}
      variant="outlined"
      inputProps={{ readOnly }}
      {...rest}
      sx={InputStyles}
    >
      {label}
    </TextField>
  );
};

export default CustomInput;
