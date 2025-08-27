import * as React from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: 'ctaPrimary' | 'ctaSecondary' | 'ghost';
};

const base =
  'inline-flex items-center justify-center rounded-md font-semibold px-6 py-3 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

const variants = {
  ctaPrimary:
    'bg-[var(--lead-gold)] text-black hover:bg-yellow-400 focus-visible:ring-[var(--lead-gold)] ring-offset-white',
  ctaSecondary:
    'bg-white text-black hover:bg-gray-200 focus-visible:ring-gray-300 ring-offset-[var(--lead-navy)]',
  ghost:
    'bg-transparent text-white hover:bg-white/10 focus-visible:ring-white ring-offset-[var(--lead-navy)]'
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, variant = 'ctaPrimary', className = '', children, ...props }, ref) => {
    const cls = [base, variants[variant], className].join(' ');
    if (asChild) {
      return (
        <span className={cls}>
          {children}
        </span>
      );
    }
    return (
      <button ref={ref} className={cls} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export default Button;
