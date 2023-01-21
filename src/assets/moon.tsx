import * as React from "react";
import { SVGProps } from "react";

const MoonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={50}
    height={50}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M45.43 26.017c.58.01 1.072.477 1.052 1.057-.104 2.984-.678 5.873-2.347 8.37A17 17 0 1 1 28.947 9.034c.571-.036 1.034.443 1.041 1.016.036 2.582.527 9.263 4.512 12.451 3.809 3.047 8.778 3.483 10.93 3.517ZM15.368 10.242C12.475 9.017 11.1 7.688 9.777 4.659a.314.314 0 0 0-.57-.007c-1.397 2.988-2.77 4.33-5.568 5.576a.314.314 0 0 0-.008.567c3.097 1.492 4.402 2.885 5.59 5.551.108.243.459.246.572.006 1.262-2.676 2.632-4.02 5.596-5.545a.313.313 0 0 0-.021-.563Z"
      fill={props.fill || "#fff"}
    />
  </svg>
);

export default MoonIcon;
