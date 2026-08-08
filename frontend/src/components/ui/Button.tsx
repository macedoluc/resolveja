interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
}

function Button({ children, variant = "primary", href, type = "button" }: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition duration-300";

  const variants = {
    primary:
      "border border-blue-600 bg-blue-600 text-white hover:bg-blue-700",
    secondary:
      "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100",
  };

  const className = `${baseStyles} ${variants[variant]}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
}

export default Button;
