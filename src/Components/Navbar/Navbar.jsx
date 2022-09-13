import { styled } from "@stitches/react";

export const StyledNavbar = styled("nav", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
  backgroundColor: "white",
  borderBottom: "1px solid #e6e6e6",
  // base styles
  variants: {
    size: {
      small: {
        width: "100%",
        height: "50px",
      },
      large: {
        width: "100%",
        height: "60px",
      },
    },
    bg: {
      primary: {
        backgroundColor: "#2196f3",
        "&:hover": {
          backgroundColor: "#64b5f6",
        },
      },
      secondary: {
        backgroundColor: "#009688",
        "&:hover": {
          backgroundColor: "#4db6ac",
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
        "&:hover": {
          backgroundColor: "#a5d6a7",
        },
      },
    },
  },
});

export const Navbar = (props) => <StyledNavbar {...props}>{ props.children }</StyledNavbar>;
