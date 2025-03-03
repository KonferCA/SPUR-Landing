import React from "react";
import { cn } from "../../utils"; // Ensure this exists
import { getButtonStyles } from "./Button.styles";
import type { ButtonStylesProps } from "./Button.styles";

/**
 * Button Props
 */
type ButtonProps = ButtonStylesProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
    link?: string;
    newtab?: boolean;
    norel?: boolean;
  };

/**
 * Flexible Button Component
 */
const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  iconPosition = "left",
  link,
  newtab,
  norel,
  intent,
  className,
  onClick,
  ...buttonProps
}) => {
  const buttonContent = (
    <>
      {icon && iconPosition === "left" && <span>{icon}</span>}
      {children && <span>{children}</span>}
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </>
  );

  if (link) {
    return (
      <a
        href={link}
        target={newtab ? "_blank" : "_self"}
        rel={norel ? "noreferrer" : undefined}
        className={cn(getButtonStyles({ intent, className }))}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      className={cn(getButtonStyles({ intent, className }))}
      onClick={onClick}
      {...buttonProps} // Pass only valid button props
    >
      {buttonContent}
    </button>
  );
};

export { Button };
