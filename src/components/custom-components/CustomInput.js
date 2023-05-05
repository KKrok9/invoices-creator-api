import React from "react";
import TextField from "@mui/material/TextField";

const InputStyles = {
  margin: "2rem",
  "& .MuiInputBase-input": {
    height: "0.9rem",
  },
};

const CustomInput = (props) => {
  const { label, ...rest } = props;

  return (
    <TextField label={label} variant="outlined" {...rest} sx={InputStyles}>
      {label}
    </TextField>
  );
};

export default CustomInput;
