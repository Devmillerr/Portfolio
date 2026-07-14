type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[1100px] px-6 lg:px-0 ${className}`}
    >
      {children}
    </div>
  );
}