interface SvgProps {
  color?: string;
}

export function OrderIcon({ color }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke={color} strokeWidth="2">
        <rect width="14" height="17" x="5" y="4" rx="2" />
        <path strokeLinecap="round" d="M9 9h6m-6 4h6m-6 4h4" />
      </g>
    </svg>
  );
}
