import { styled } from "@stitches/react";

export const Box = styled("div", {
  display: "flex",
  justifyContent: "center",

  variants: {
    direction: {
      col: {
        flexDirection: "column",
      },
      row: {
        flexDirection: "row",
      }
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
    border: {
        none: { 
            border: "none"
        },
        solid: {
            border: "solid 1px #e6e6e6"
        }
    },
    space: {
      none: {
        padding: 0,
      },
      small: {
        padding: "15px",
      }
    }
  },
});