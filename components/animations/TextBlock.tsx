type TextBlockProps = {
  active: boolean;
  align: "left" | "right";
  title: string;
};

export default function TextBlock({ active, align, title }: TextBlockProps) {
  return (
    <div
      className={`
        absolute top-1/2 -translate-y-1/2
        transition-all duration-500 ease-out
        ${align === "left" ? "left-12" : "right-12"}
        ${
          active
            ? "opacity-100 translate-x-0"
            : align === "left"
            ? "-translate-x-10 opacity-0"
            : "translate-x-10 opacity-0"
        }
      `}
    >
      <h2 className="text-4xl font-bold">{title}</h2>
    </div>
  );
}
