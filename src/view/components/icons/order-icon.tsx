import { SVGProps } from "react";

export function OrderIcon(props: SVGProps<SVGPathElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g fill="none" strokeWidth="2" {...props}>
        <rect width="14" height="17" x="5" y="4" rx="2" />
        <path strokeLinecap="round" d="M9 9h6m-6 4h6m-6 4h4" />
      </g>
    </svg>
  );
}
