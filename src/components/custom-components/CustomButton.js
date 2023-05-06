import React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const CustomButton = (props) => {
  const { label, ...rest } = props;
  const ButtonStyles = {
    width: "40%",
    height: "50%",
    fontSize: "large",
    backgroundColor: "#0085EC",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.2s ease-in-out",
    fontWeight: "bold",
    color: "black",
    letterSpacing: "0.2rem",
    ":hover": {
      color: "white",
      backgroundColor: "#006BEC",
      transform: "translateY(-1px)",
    },
  };
  return (
    <Button sx={ButtonStyles} {...rest}>
      {label}
    </Button>
  );
};

export default CustomButton;
