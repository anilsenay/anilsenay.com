import * as React from "react";
import { SVGProps } from "react";

const FigmaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={62}
    height={62}
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M32 31.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0Z"
        fill="#1ABCFE"
      />
      <path
        d="M13 50.5a9.5 9.5 0 0 1 9.5-9.5H32v9.5a9.5 9.5 0 1 1-19 0Z"
        fill="#0ACF83"
      />
      <path d="M32 3v19h9.5a9.5 9.5 0 1 0 0-19H32Z" fill="#FF7262" />
      <path
        d="M13 12.5a9.5 9.5 0 0 0 9.5 9.5H32V3h-9.5a9.5 9.5 0 0 0-9.5 9.5Z"
        fill="#F24E1E"
      />
      <path
        d="M13 31.5a9.5 9.5 0 0 0 9.5 9.5H32V22h-9.5a9.5 9.5 0 0 0-9.5 9.5Z"
        fill="#A259FF"
      />
    </g>
    <path
      d="M31 30.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0ZM12 49.5a9.5 9.5 0 0 1 9.5-9.5H31v9.5a9.5 9.5 0 1 1-19 0Z"
      stroke="#fff"
      strokeWidth={3.5}
    />
    <path
      d="M31 2v19h9.5a9.5 9.5 0 1 0 0-19H31ZM12 11.5a9.5 9.5 0 0 0 9.5 9.5H31V2h-9.5a9.5 9.5 0 0 0-9.5 9.5ZM12 30.5a9.5 9.5 0 0 0 9.5 9.5H31V21h-9.5a9.5 9.5 0 0 0-9.5 9.5Z"
      stroke="#fff"
      strokeWidth={3.5}
    />
  </svg>
);

export default FigmaIcon;
