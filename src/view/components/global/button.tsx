"use client";

import { ButtonHTMLAttributes } from "react";
import { useFormStatus } from "react-dom";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
}

export function Button({ content, ...props }: ButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} {...props}>
      {pending ? "Carregando..." : content}
    </button>
  );
}
