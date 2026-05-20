import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "pill-outline";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-main-yellow)] text-[var(--color-main-dark)] hover:brightness-95",
  outline:
    "bg-transparent text-[var(--color-main-dark)] border-[3px] border-[var(--color-main-dark)] hover:bg-[var(--color-main-dark)] hover:text-white",
  "pill-outline":
    "bg-transparent text-[var(--color-main-dark)] border border-[var(--color-main-dark)] rounded-full hover:bg-[var(--color-main-dark)] hover:text-white",
};

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`px-8 py-3 rounded-2xl font-semibold text-lg transition cursor-pointer ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
