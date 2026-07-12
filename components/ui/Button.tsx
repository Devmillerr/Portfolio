"use client";

import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
  ...props
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-blue-600 hover:bg-blue-500 text-white"
      : "border border-zinc-700 hover:border-blue-500 text-white";

  return (
    <button
      {...props}
      className={`rounded-xl px-6 py-3 transition duration-300 font-semibold ${styles}`}
    >
      {children}
    </button>
  );
}