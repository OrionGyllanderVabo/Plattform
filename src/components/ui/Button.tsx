import React from 'react';

// Props interface
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: React.ReactNode;
}

// Spinner component för loading state
const Spinner = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <svg
      className={`animate-spin ${sizeClasses[size]}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      disabled = false,
      children,
      className = '',
      type = 'button',
      onClick,
      ...props
    },
    ref
  ) => {
    // Base styles (gäller alla knappar)
    const baseStyles = `
      inline-flex items-center justify-center gap-2
      font-medium rounded-md
      transition-all duration-200 ease-in-out
      focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
      min-h-[44px] min-w-[44px]
    `.trim().replace(/\s+/g, ' ');

    // Variant styles
    const variantStyles = {
      primary: `
        bg-gradient-to-r from-[#FF6B35] to-[#FF8E53]
        text-white font-semibold
        shadow-[0_4px_12px_rgba(255,107,53,0.25)]
        hover:shadow-[0_6px_20px_rgba(255,107,53,0.35)]
        hover:-translate-y-0.5
        active:translate-y-0
        active:shadow-[0_2px_8px_rgba(255,107,53,0.25)]
      `,
      secondary: `
        bg-transparent
        border-2 border-ocean
        text-ocean font-semibold
        hover:bg-sky
        active:bg-sky/80
      `,
      outline: `
        bg-transparent
        border-2 border-light
        text-charcoal font-medium
        hover:border-steel
        active:border-charcoal
      `,
      ghost: `
        bg-transparent
        text-ocean font-medium
        hover:underline hover:decoration-2 hover:underline-offset-4
        active:text-ocean/80
      `,
    };

    // Size styles
    const sizeStyles = {
      sm: 'py-3 px-5 text-sm',
      md: 'py-4 px-8 text-base',
      lg: 'py-5 px-10 text-lg',
    };

    // Kombinera alla styles
    const buttonClasses = `
      ${baseStyles}
      ${variantStyles[variant]}
      ${sizeStyles[size]}
      ${className}
    `.trim().replace(/\s+/g, ' ');

    // Accessibility attributes
    const ariaProps = {
      'aria-disabled': disabled || loading,
      'aria-busy': loading,
      ...(loading && { 'aria-label': 'Laddar...' }),
    };

    return (
      <button
        ref={ref}
        type={type}
        className={buttonClasses}
        disabled={disabled || loading}
        onClick={onClick}
        {...ariaProps}
        {...props}
      >
        {loading && <Spinner size={size} />}
        <span className={loading ? 'opacity-75' : ''}>
          {loading ? 'Laddar...' : children}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
