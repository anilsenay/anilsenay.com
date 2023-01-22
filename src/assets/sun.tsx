import * as React from "react";
import { SVGProps } from "react";

const SunIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={50}
    height={50}
    fill="none"
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={23.4}
      y={5}
      width={3.2}
      height={5.6}
      rx={1.6}
      fill={props.fill || "#000"}
    />
    <rect
      width={3.2}
      height={5.6}
      rx={1.6}
      transform="matrix(1 0 0 -1 23.4 45)"
      fill={props.fill || "#000"}
    />
    <rect
      x={39.4}
      y={26.6}
      width={3.2}
      height={5.6}
      rx={1.6}
      transform="rotate(-90 39.4 26.6)"
      fill={props.fill || "#000"}
    />
    <rect
      x={5}
      y={26.6}
      width={3.2}
      height={5.6}
      rx={1.6}
      transform="rotate(-90 5 26.6)"
      fill={props.fill || "#000"}
    />
    <rect
      x={38.027}
      y={9.8}
      width={3.2}
      height={5.6}
      rx={1.6}
      transform="rotate(49.018 38.027 9.8)"
      fill={props.fill || "#000"}
    />
    <rect
      width={3.2}
      height={5.6}
      rx={1.6}
      transform="scale(1 -1) rotate(49.018 63.636 21.36)"
      fill={props.fill || "#000"}
    />
    <circle cx={25} cy={25} r={11.2} fill={props.fill || "#000"} />
    <rect
      width={3.2}
      height={5.6}
      rx={1.6}
      transform="scale(-1 1) rotate(49.018 -16.697 -8.149)"
      fill={props.fill || "#000"}
    />
    <rect
      x={11.898}
      y={40.688}
      width={3.2}
      height={5.6}
      rx={1.6}
      transform="rotate(-130.982 11.898 40.688)"
      fill={props.fill || "#000"}
    />
  </svg>
);

export default SunIcon;
