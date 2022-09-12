import { styled } from "@stitches/react";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "10px",
  backgroundColor: "white",

  variants: {
    size: {
      sm: {
        width: "75%",
        marginLeft: "auto",
        marginRight: "auto"
      },
      lg: {
        width: "100%",
      },
    },
    align: {
      center: {
        alignItems: "center",
      },
      left: {
        alignItems: "flex-start",
      },
      right: {
        alignItems: "flex-end",
      },
    },
  },
});