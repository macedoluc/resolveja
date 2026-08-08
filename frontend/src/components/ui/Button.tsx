interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
  }
  
  function Button({ children, variant = "primary" }: ButtonProps) {
    const baseStyles =
      "px-6 py-3 rounded-lg font-semibold transition duration-300";
  
    const variants = {
      primary:
        "bg-blue-600 text-white hover:bg-blue-700",
      secondary:
        "border border-gray-300 text-gray-900 hover:bg-gray-100",
    };
  
    return (
      <button className={`${baseStyles} ${variants[variant]}`}>
        {children}
      </button>
    );
  }
  
  export default Button;