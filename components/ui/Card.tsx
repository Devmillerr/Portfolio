import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Card({ children }: Props) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur-xl transition-all duration-300 hover:border-blue-500 hover:-translate-y-2">
      {children}
    </div>
  );
}