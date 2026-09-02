export type Accent = "red" | "blue" | "emerald";

export type Stage = {
  number: string;
  label: string;
  title: string;
  description: string;
  accent: Accent;
  items: string[];
};

