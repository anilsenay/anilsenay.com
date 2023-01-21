import * as React from "react";
import { SVGProps } from "react";

const GithubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M22.39 6.27a11.947 11.947 0 0 0-4.367-4.367C16.184.83 14.177.293 12 .293c-2.177 0-4.185.537-6.023 1.61A11.946 11.946 0 0 0 1.609 6.27C.536 8.11 0 10.116 0 12.293c0 2.615.763 4.966 2.289 7.055 1.526 2.088 3.497 3.533 5.914 4.335.281.052.49.016.625-.109a.611.611 0 0 0 .203-.469l-.008-.843c-.005-.532-.008-.995-.008-1.39l-.36.062c-.228.042-.517.06-.866.054a6.618 6.618 0 0 1-1.086-.109 2.428 2.428 0 0 1-1.047-.468 1.983 1.983 0 0 1-.688-.961l-.156-.36a3.906 3.906 0 0 0-.492-.796c-.224-.292-.45-.49-.68-.594l-.109-.078a1.143 1.143 0 0 1-.203-.188.856.856 0 0 1-.14-.219c-.032-.073-.006-.133.077-.18.084-.047.235-.07.454-.07l.312.047c.208.042.466.166.773.375.308.208.56.479.758.812.24.427.529.753.867.977.339.224.68.336 1.024.336.343 0 .64-.026.89-.078.25-.052.485-.13.703-.235.094-.698.35-1.234.766-1.61a10.705 10.705 0 0 1-1.602-.28 6.377 6.377 0 0 1-1.468-.61 4.205 4.205 0 0 1-1.258-1.047c-.333-.416-.607-.964-.82-1.64-.214-.678-.32-1.459-.32-2.344 0-1.26.411-2.334 1.234-3.219-.386-.948-.35-2.01.11-3.187.301-.094.75-.024 1.343.21.594.235 1.028.436 1.305.602.276.167.497.308.664.422.969-.27 1.969-.406 3-.406 1.03 0 2.031.135 3 .406l.594-.375c.406-.25.885-.479 1.437-.687.552-.209.974-.266 1.266-.172.468 1.177.51 2.24.125 3.187.822.886 1.234 1.959 1.234 3.219 0 .885-.107 1.669-.32 2.351-.214.683-.49 1.23-.828 1.641-.339.412-.76.758-1.266 1.039a6.388 6.388 0 0 1-1.469.61c-.474.124-1.007.218-1.601.281.541.469.812 1.208.812 2.219v3.296c0 .187.065.344.196.469.13.124.335.161.617.109 2.417-.802 4.388-2.247 5.914-4.336C23.237 17.26 24 14.907 24 12.293c0-2.177-.538-4.184-1.61-6.023Z"
        fill="#000"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default GithubIcon;
