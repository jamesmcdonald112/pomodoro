import React from "react";

type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger" | "neutral";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
};

export default function BaseButton({
  children,
  "aria-label": ariaLabel,
  variant = "neutral",
  size = "md",
  type = "button",
  disabled,
  isLoading = false,
  ...rest
}: BaseButtonProps) {
  const variantStyles: Record<typeof variant, string> = {
    primary: "bg-primary-light dark:bg-primary-dark",
    secondary: "bg-secondary-light dark:bg-secondary-dark",
    danger: "bg-danger-light dark:bg-danger-dark",
    neutral: "bg-neutral-light dark:bg-neutral-dark",
  };
  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      type={type}
      aria-label={ariaLabel}
      disabled={disabled || isLoading}
      className={`
        w-full md:min-w-[120px] md:w-auto
        text-white
        border border-white rounded-lg
        hover:scale-105 focus:scale-105
        focus:outline-none focus:ring-2 focus:ring-blue-400
        transition-transform duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantStyles[variant]}
        ${sizeStyles[size]}
      `}
      {...rest}
    >
      {isLoading ? <span>Loading...</span> : children}
    </button>
  );
}
