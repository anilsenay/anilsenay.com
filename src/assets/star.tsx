import * as React from "react";
import { SVGProps } from "react";

const StarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 .281a.844.844 0 0 1 .757.47l2.117 4.292 4.737.689a.844.844 0 0 1 .468 1.439l-3.427 3.341.809 4.716a.843.843 0 0 1-1.224.89L9 13.89l-4.237 2.228a.845.845 0 0 1-1.224-.889l.81-4.718L.92 7.17a.844.844 0 0 1 .468-1.44l4.737-.688L8.243.751A.844.844 0 0 1 9 .282Z"
      fill="#FFB801"
    />
  </svg>
);

export default StarIcon;
