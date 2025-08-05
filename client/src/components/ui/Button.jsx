const Button = ({
  type = "button",
  children,
  onClick,
  className = "",
  gradient = false,
}) => {
  const baseClasses = "btn w-full text-white font-medium transition";
  const gradientClasses = gradient
    ? "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 border-none shadow-md"
    : "bg-blue-600 hover:bg-blue-700 border-none";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${gradientClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
