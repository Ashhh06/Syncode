import { motion } from 'framer-motion';

export const Button = ({ 
  children, 
  onClick, 
  disabled, 
  variant = 'primary',
  type = 'button',
  className = '',
  ...props 
}) => {
  const variants = {
    primary: 'bg-gradient-primary text-text-primary hover:shadow-lg hover:shadow-primary',
    secondary: 'bg-bg-tertiary text-text-primary border border-white/10 hover:bg-bg-elevated',
    ghost: 'bg-transparent text-text-secondary hover:bg-bg-tertiary hover:text-text-primary',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`
        px-6 py-3 rounded-md font-medium text-sm
        transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
};