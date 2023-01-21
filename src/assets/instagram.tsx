import * as React from "react";
import { SVGProps } from "react";

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)" fill={props.fill || "#000"}>
      <path d="M16.5 0h-9A7.5 7.5 0 0 0 0 7.5v9A7.5 7.5 0 0 0 7.5 24h9a7.5 7.5 0 0 0 7.5-7.5v-9A7.5 7.5 0 0 0 16.5 0Zm5.25 16.5a5.256 5.256 0 0 1-5.25 5.25h-9a5.256 5.256 0 0 1-5.25-5.25v-9A5.256 5.256 0 0 1 7.5 2.25h9a5.256 5.256 0 0 1 5.25 5.25v9Z" />
      <path d="M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm0 9.75A3.755 3.755 0 0 1 8.25 12 3.754 3.754 0 0 1 12 8.25 3.754 3.754 0 0 1 15.75 12 3.755 3.755 0 0 1 12 15.75ZM18.45 6.35a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6Z" />
    </g>
  </svg>
);

export default InstagramIcon;
