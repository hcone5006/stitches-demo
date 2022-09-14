import { styled } from "@stitches/react";
import "./Button.css";

export const StyledButton = styled("button", {
  // base styles
  display: "block",
  border: "none",
  borderRadius: "5px",
  color: "white",

  variants: {
    size: {
      small: {
        fontSize: "13px",
        height: "25px",
        paddingRight: "10px",
        paddingLeft: "10px",
      },
      large: {
        fontSize: "15px",
        height: "35px",
        paddingLeft: "15px",
        paddingRight: "15px",
      },
    },
    variant: {
      primary: {
        backgroundColor: "#2196f3",
        border: "1px solid #fff",
        "&:hover": {
          backgroundColor: "#64b5f6",
        },
      },
      secondary: {
        backgroundColor: "transparent",
        border: "1px solid #000",
        color: "inherit",
        "&:hover": {
          backgroundColor: "rgba(0,0,0,0.1)",
        },
      },
      tertiary: {
        backgroundColor: "transparent",
        // border: "1px solid #000",
        color: "inherit",
        "&:hover": {
          backgroundColor: "rgba(0,0,0,0.1)",
        },
      },
      danger: {
        backgroundColor: "#f44336",
        "&:hover": {
          backgroundColor: "#ef9a9a",
        },
      },
      success: {
        backgroundColor: "#4caf50",
        color: "white",
        "&:hover": {
          backgroundColor: "#a5d6a7",
        },
      },
    },
  },
});

export const Button = (props) => <StyledButton {...props}>{props.label}</StyledButton>;
