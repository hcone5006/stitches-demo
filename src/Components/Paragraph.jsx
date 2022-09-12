import { styled } from "@stitches/react";

export const Paragraph = styled("p", {
  paddingBottom: "15px",

  variants: {
    size: {
      sm: {
        fontSize: "1rem",
        fontWeight: "400",
        lineHeight: "1.2rem"
      },
      lg: {
        fontSize: "2.2rem",
        fontWeight: "600",
        lineHeight: "2.5rem"
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