interface BadgeProps {
  text: string;
}

export default function Badge({ text }: BadgeProps) {
  return (
    <span className="rounded-full bg-blue-600/20 px-4 py-2 text-sm text-blue-400">
      {text}
    </span>
  );
}