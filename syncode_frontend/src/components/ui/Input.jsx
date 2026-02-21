export const Input = ({ 
    label, 
    type = 'text', 
    placeholder, 
    value, 
    onChange, 
    error,
    disabled,
    className = '',
    ...props 
  }) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-text-secondary mb-2">
            {label}
          </label>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`
            w-full px-4 py-3
            bg-bg-tertiary border rounded-md
            text-text-primary text-sm
            font-ui
            transition-all duration-200
            placeholder:text-text-muted
            focus:outline-none focus:border-info focus:ring-2 focus:ring-info/20
            disabled:opacity-50 disabled:cursor-not-allowed
            ${error ? 'border-error focus:border-error focus:ring-error/20' : 'border-white/10'}
            ${className}
          `}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-error">{error}</p>
        )}
      </div>
    );
  };