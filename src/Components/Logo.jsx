import { styled } from "@stitches/react";

export const StyledLogo = styled("img", {
  // display: "inline-block",
  // marginBottom: "10px",

  variants: {
    size: {
      small: {
        width: "80px",
        height: "80px",
        // paddingRight: "10px",
        // paddingLeft: "10px",
      },
      large: {
        width: "100px",
        height: "100px",
        // paddingLeft: "15px",
        // paddingRight: "15px",
      },
    },
  },
});

export const Logo = (props) => (
  <StyledLogo {...props}/>
);
