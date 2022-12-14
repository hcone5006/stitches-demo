import { styled } from "@stitches/react";

export const Paragraph = styled("p", {
  paddingBottom: "15px",

  variants: {
    size: {
      small: {
        fontSize: "1rem",
        fontWeight: "400",
        lineHeight: "1.2rem"
      },
      large: {
        fontSize: "2.2rem",
        fontWeight: "600",
        lineHeight: "2.5rem"
      },
    },
    align: {
      center: {
        textAlign: "center",
      },
      left: {
        textAlign: "left",
      },
      right: {
        textAlign: "right",
      },
    },
  },
});