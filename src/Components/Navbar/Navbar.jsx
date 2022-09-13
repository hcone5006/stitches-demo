import { styled } from "@stitches/react";
import "./Navbar.css";

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
      light: {
        backgroundColor: "#F5f5f5",
        color: "#000",
      },
      primary: {
        backgroundColor: "#2196f3",
        color: "#fff",
      },
      dark: {
        backgroundColor: "#009688",
        color: "#fff",
      },
    },
  },
});

export const Navbar = (props) => {
  return (
    <StyledNavbar {...props}>
      { props.children }
    </StyledNavbar>
  )
};
