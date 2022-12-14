import { styled } from "@stitches/react";

export const Input = styled("input", {
  display: "block",
  marginBottom: "10px",

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
  },
});