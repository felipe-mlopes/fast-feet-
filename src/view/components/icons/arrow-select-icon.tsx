import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGPathElement> {
  side: "top" | "down";
}

export function ArrowSelectIcon({ side }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={`${side === "top" ? "rotate-180" : ""} hover:cursor-pointer`}
    >
      <path fill="#6F6C80" fillRule="evenodd" d="m6 7l6 6l6-6l2 2l-8 8l-8-8z" />
    </svg>
  );
}
