type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionTitleProps) {
  return (
    <div
      className={
        align === "left"
          ? "text-left"
          : "text-center"
      }
    >
      <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
        {eyebrow}
      </span>

      <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg leading-8 text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}