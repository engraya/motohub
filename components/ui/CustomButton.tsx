"use client";

import Image from "next/image";
import type { CustomButtonProps } from "@/types/ui";

const VARIANTS = {
  primary:
    "inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
  secondary:
    "inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-border text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
  ghost:
    "inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-muted hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
};

const Button = ({
  isDisabled,
  btnType,
  containerStyles,
  textStyles,
  title,
  rightIcon,
  handleClick,
  variant,
  isLoading,
}: CustomButtonProps) => {
  const resolvedClass = variant
    ? VARIANTS[variant]
    : `custom-btn ${containerStyles ?? ""}`;

  return (
    <button
      disabled={isDisabled || isLoading}
      type={btnType ?? "button"}
      className={resolvedClass}
      onClick={handleClick}
      aria-disabled={isDisabled || isLoading}
    >
      {isLoading ? (
        <>
          <svg
            className="w-4 h-4 animate-spin"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          {title}
        </>
      ) : (
        <>
          {!variant && <span className={`flex-1 ${textStyles ?? ""}`}>{title}</span>}
          {variant && title}
          {rightIcon && (
            <div className="relative w-6 h-6">
              <Image src={rightIcon} alt="" fill className="object-contain" aria-hidden="true" />
            </div>
          )}
        </>
      )}
    </button>
  );
};

export default Button;
