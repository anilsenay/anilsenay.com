import * as React from "react";
import { SVGProps } from "react";

const RightArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m13 4.5 5.5 5.5m0 0L13 15.5m5.5-5.5h-17"
      stroke={props.fill || "#000"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default RightArrow;
