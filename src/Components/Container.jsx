import { styled } from "@stitches/react";

export const Container = styled("section", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  // padding: "10px",
  backgroundColor: "white",

  variants: {
    size: {
      small: {
        width: "75%",
        marginLeft: "auto",
        marginRight: "auto"
      },
      large: {
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
    spacing: {
      none: {
        paddingTop: "0",
        paddingBottom: "0",
      },
      small: {
        paddingTop: "40px",
        paddingBottom: "40px",
      },
      large: {
        paddingTop: "80px",
        paddingBottom: "80px",
      }
    }
  },
});