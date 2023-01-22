import * as React from "react";
import { SVGProps } from "react";

const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={36}
    height={36}
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 13.05 6.75 18.3a.72.72 0 0 1-.525.225.72.72 0 0 1-.525-.225.72.72 0 0 1-.225-.525c0-.2.075-.375.225-.525L10.95 12 5.7 6.75a.72.72 0 0 1-.225-.525c0-.2.075-.375.225-.525a.72.72 0 0 1 .525-.225c.2 0 .375.075.525.225L12 10.95l5.25-5.25a.72.72 0 0 1 .525-.225c.2 0 .375.075.525.225a.72.72 0 0 1 .225.525.72.72 0 0 1-.225.525L13.05 12l5.25 5.25a.72.72 0 0 1 .225.525.72.72 0 0 1-.225.525.72.72 0 0 1-.525.225.72.72 0 0 1-.525-.225L12 13.05Z"
      fill={props.fill || "#000"}
    />
  </svg>
);

export default CloseIcon;
