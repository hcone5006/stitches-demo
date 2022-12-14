import { styled } from "@stitches/react";

export const Avatar = styled("img", {
  display: "inline-block",
  marginBottom: "10px",
  // base styles
  variants: {
    size: {
      small: {
        width: "25px",
        height: "25px",
      },
      large: {
        width: "50px",
        height: "50px",
      },
    },
    align: {
      center: {
        margin: "0 auto",
        marginBottom: "10px",
      },
    },
  },
});