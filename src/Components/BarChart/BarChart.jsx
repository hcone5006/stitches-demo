import React from 'react';
// import { styled } from "@stitches/react";
import "./BarChart.css";
import * as d3 from 'd3';

// export const StyledBarChart = styled("div",  {
//   display: 'block',

//   // variants: {
//   //   size: {
//   //     small: {
//   //       width: "600px",
//   //     },
//   //     large: {
//   //       width: "100%",
//   //     }
//   //   }
//   // }
// });

export const BarChart = (props) => {
  return (
    <>
      <svg
        style={{
          height: 500,
          width: "100%",
          marginRight: "0px",
          marginLeft: "0px",
        }}
      >
        <g className="plot-area" />
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </>
  )
};