import { styled } from "@stitches/react";
import "./Navbar.css";
import { Box } from "../../Components/Box";
import { Logo } from "../../Components/Logo.jsx";
import LogoPath from "../../logo.svg";
import { Button } from "../../Components/Button/Button.jsx";


export const StyledNavbar = styled("div", {
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
      <Box direction="row" align="center" space="none">
        <Logo src={LogoPath} alt="app logo" size="small" />
        <span className="app-name">App-Demo</span>
      </Box>
      {props.children}
      {/* <nav>
        <NavLink to="/" className="nav-links">Home</NavLink>
        <NavLink to="chart" className="nav-links">Chart</NavLink>
      </nav> */}
      <Button size="small" variant="primary" label="Login" onClick={props.loginOnClick} />
    </StyledNavbar>
  )
};
