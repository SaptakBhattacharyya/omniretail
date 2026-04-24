const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  icon, 
  fullWidth = false,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-inter font-semibold transition-all active:scale-[0.98] outline-none";
  
  const variants = {
    primary: "bg-primary-container text-on-primary-container hover:brightness-110 shadow-[0_0_15px_rgba(96,165,250,0.2)] hover:shadow-[0_0_25px_rgba(96,165,250,0.4)]",
    secondary: "bg-surface-variant text-on-surface hover:bg-surface-container-high border border-outline-variant",
    outline: "bg-transparent border border-outline-variant text-on-surface hover:bg-surface-variant",
    ghost: "text-zinc-400 hover:text-white hover:bg-zinc-800/50",
    danger: "bg-error/10 text-error border border-error/20 hover:bg-error/20"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm rounded-lg",
    md: "px-4 py-2 text-sm rounded-xl",
    lg: "px-6 py-3.5 text-base rounded-xl",
    icon: "p-2 rounded-lg"
  };

  const classes = `
    ${baseStyles} 
    ${variants[variant] || variants.primary} 
    ${sizes[size] || sizes.md} 
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <button className={classes} {...props}>
      {icon && <span className="material-symbols-outlined text-[18px]">{icon}</span>}
      {children && <span>{children}</span>}
    </button>
  );
};

export default Button;
