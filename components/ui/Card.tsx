import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition hover:border-blue-500 hover:shadow-2xl">
      {children}
    </div>
  );
}