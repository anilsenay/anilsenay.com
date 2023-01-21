import * as React from "react";
import { SVGProps } from "react";

const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M22.27 0H1.73A1.73 1.73 0 0 0 0 1.73v20.54C0 23.224.775 24 1.73 24h20.54A1.73 1.73 0 0 0 24 22.27V1.73A1.73 1.73 0 0 0 22.27 0ZM8.512 18.14H5.59V9.349h2.923v8.793ZM7.052 8.148h-.02c-.98 0-1.614-.675-1.614-1.518 0-.863.653-1.52 1.653-1.52s1.615.657 1.634 1.52c0 .843-.634 1.518-1.653 1.518Zm11.999 9.994h-2.922v-4.704c0-1.182-.423-1.989-1.48-1.989-.808 0-1.289.544-1.5 1.07-.077.187-.096.45-.096.712v4.91H10.13s.039-7.967 0-8.792h2.923v1.245c.388-.6 1.083-1.451 2.633-1.451 1.923 0 3.365 1.256 3.365 3.957v5.042Z"
        fill={props.fill || "#000"}
      />
    </g>
  </svg>
);

export default LinkedinIcon;
