# 🎨 Design System - Component Examples

This document provides React component examples using the design system with Tailwind CSS.

---

## 🎯 Button Components

### Primary Button

```jsx
import React from 'react';

export const ButtonPrimary = ({ children, onClick, disabled, className = '' }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-gradient-primary text-text-primary
        px-6 py-3 rounded-md
        font-medium text-sm
        border-none cursor-pointer
        transition-all duration-200
        shadow-md
        hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary
        active:translate-y-0
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
};
```

### Secondary Button

```jsx
export const ButtonSecondary = ({ children, onClick, disabled, className = '' }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-bg-tertiary text-text-primary
        px-6 py-3 rounded-md
        font-medium text-sm
        border border-border-primary
        cursor-pointer
        transition-all duration-200
        hover:bg-bg-elevated hover:border-border-secondary
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
};
```

### Ghost Button

```jsx
export const ButtonGhost = ({ children, onClick, disabled, className = '' }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-transparent text-text-secondary
        px-6 py-3 rounded-md
        font-medium text-sm
        border-none cursor-pointer
        transition-all duration-200
        hover:bg-bg-tertiary hover:text-text-primary
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
};
```

### Icon Button

```jsx
export const IconButton = ({ icon, onClick, ariaLabel, className = '' }) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`
        p-2 rounded-md
        text-text-secondary
        hover:bg-bg-tertiary hover:text-text-primary
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-info focus:ring-offset-2 focus:ring-offset-bg-secondary
        ${className}
      `}
    >
      {icon}
    </button>
  );
};
```

---

## 📝 Input Components

### Text Input

```jsx
import React, { useState } from 'react';

export const Input = ({ 
  label, 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  error,
  disabled,
  className = '' 
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
          focus:outline-none focus:border-border-accent focus:ring-2 focus:ring-info/20
          disabled:opacity-50 disabled:cursor-not-allowed
          ${error ? 'border-error focus:border-error focus:ring-error/20' : 'border-border-primary'}
          ${className}
        `}
      />
      {error && (
        <p className="mt-1 text-sm text-error">{error}</p>
      )}
    </div>
  );
};
```

### Textarea

```jsx
export const Textarea = ({ 
  label, 
  placeholder, 
  value, 
  onChange, 
  error,
  rows = 4,
  className = '' 
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-text-secondary mb-2">
          {label}
        </label>
      )}
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className={`
          w-full px-4 py-3
          bg-bg-tertiary border rounded-md
          text-text-primary text-sm
          font-ui
          transition-all duration-200
          placeholder:text-text-muted
          focus:outline-none focus:border-border-accent focus:ring-2 focus:ring-info/20
          resize-none
          ${error ? 'border-error focus:border-error focus:ring-error/20' : 'border-border-primary'}
          ${className}
        `}
      />
      {error && (
        <p className="mt-1 text-sm text-error">{error}</p>
      )}
    </div>
  );
};
```

---

## 🃏 Card Components

### Basic Card

```jsx
export const Card = ({ children, className = '', onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`
        bg-bg-elevated border border-border-primary
        rounded-lg p-6
        transition-all duration-300
        ${onClick ? 'cursor-pointer hover:-translate-y-0.5 hover:shadow-lg hover:border-border-secondary' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
```

### Room Card

```jsx
export const RoomCard = ({ room, onJoin, onDelete, isOwner }) => {
  return (
    <Card className="hover:shadow-lg">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-text-primary mb-1">
            {room.name}
          </h3>
          <div className="flex items-center gap-3 text-sm text-text-muted">
            <span className="badge badge-primary">{room.language}</span>
            <span>{new Date(room.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <ButtonPrimary onClick={() => onJoin(room.id)} className="flex-1">
          Join Room
        </ButtonPrimary>
        {isOwner && (
          <IconButton
            icon={<TrashIcon />}
            onClick={() => onDelete(room.id)}
            ariaLabel="Delete room"
            className="text-error hover:bg-error/10"
          />
        )}
      </div>
    </Card>
  );
};
```

---

## 🎭 Modal Components

### Modal Backdrop

```jsx
import { motion, AnimatePresence } from 'framer-motion';

export const Modal = ({ isOpen, onClose, children, title }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="bg-bg-elevated border border-border-primary rounded-xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {title && (
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-semibold text-text-primary">
                    {title}
                  </h2>
                  <IconButton
                    icon={<XIcon />}
                    onClick={onClose}
                    ariaLabel="Close modal"
                  />
                </div>
              )}
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
```

---

## 🏷️ Badge Components

### Badge

```jsx
export const Badge = ({ children, variant = 'primary', className = '' }) => {
  const variants = {
    primary: 'bg-user-1/20 text-user-1',
    success: 'bg-success/20 text-success',
    error: 'bg-error/20 text-error',
    warning: 'bg-warning/20 text-warning',
    info: 'bg-info/20 text-info',
  };

  return (
    <span
      className={`
        inline-flex items-center px-3 py-1
        rounded-full text-xs font-medium
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
};
```

---

## 🔔 Toast Component

```jsx
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircleIcon, XCircleIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

export const Toast = ({ message, type = 'info', isVisible, onClose }) => {
  const icons = {
    success: <CheckCircleIcon className="w-5 h-5 text-success" />,
    error: <XCircleIcon className="w-5 h-5 text-error" />,
    info: <InformationCircleIcon className="w-5 h-5 text-info" />,
  };

  const borders = {
    success: 'border-l-success',
    error: 'border-l-error',
    info: 'border-l-info',
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`
            fixed top-4 right-4 z-50
            bg-bg-elevated border border-border-primary rounded-lg p-4
            shadow-xl min-w-[300px] max-w-[400px]
            border-l-4 ${borders[type]}
          `}
        >
          <div className="flex items-start gap-3">
            {icons[type]}
            <div className="flex-1">
              <p className="text-sm text-text-primary">{message}</p>
            </div>
            <button
              onClick={onClose}
              className="text-text-muted hover:text-text-primary transition-colors"
            >
              <XIcon className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
```

---

## 👤 User Avatar Stack

```jsx
export const UserAvatarStack = ({ users, maxVisible = 3 }) => {
  const visibleUsers = users.slice(0, maxVisible);
  const remainingCount = users.length - maxVisible;

  return (
    <div className="flex items-center -space-x-2">
      {visibleUsers.map((user, index) => (
        <div
          key={user.id}
          className={`
            w-8 h-8 rounded-full border-2 border-bg-secondary
            flex items-center justify-center
            text-xs font-medium text-text-primary
            bg-gradient-to-br ${user.color || 'from-user-1 to-user-2'}
          `}
          style={{ zIndex: maxVisible - index }}
          title={user.name}
        >
          {user.name.charAt(0).toUpperCase()}
        </div>
      ))}
      {remainingCount > 0 && (
        <div
          className="w-8 h-8 rounded-full border-2 border-bg-secondary bg-bg-tertiary flex items-center justify-center text-xs font-medium text-text-muted"
          title={`${remainingCount} more users`}
        >
          +{remainingCount}
        </div>
      )}
    </div>
  );
};
```

---

## 💬 Chat Panel

```jsx
import { useState, useRef, useEffect } from 'react';

export const ChatPanel = ({ messages, currentUser, onSendMessage }) => {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="flex flex-col h-full bg-bg-tertiary border-t border-border-primary">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`
              flex flex-col
              ${message.senderId === currentUser.id ? 'items-end' : 'items-start'}
            `}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs text-text-muted">{message.senderName}</span>
              <span className="text-xs text-text-muted">
                {new Date(message.timestamp).toLocaleTimeString()}
              </span>
            </div>
            <div
              className={`
                max-w-[80%] px-4 py-2 rounded-lg
                ${message.senderId === currentUser.id 
                  ? 'bg-gradient-primary text-text-primary' 
                  : 'bg-bg-elevated text-text-primary border border-border-primary'
                }
              `}
            >
              <p className="text-sm whitespace-pre-wrap">{message.text}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSend} className="p-4 border-t border-border-primary">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 bg-bg-elevated border border-border-primary rounded-md text-text-primary text-sm focus:outline-none focus:border-border-accent"
          />
          <ButtonPrimary type="submit" className="px-4">
            Send
          </ButtonPrimary>
        </div>
      </form>
    </div>
  );
};
```

---

## 📊 Output Console

```jsx
export const OutputConsole = ({ output, error, isLoading, onClear }) => {
  return (
    <div className="flex flex-col h-full bg-bg-editor border-t border-border-primary">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-border-primary">
        <h3 className="text-sm font-medium text-text-secondary">Output</h3>
        <button
          onClick={onClear}
          className="text-xs text-text-muted hover:text-text-primary transition-colors"
        >
          Clear
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {isLoading && (
          <div className="flex items-center gap-2 text-text-muted">
            <div className="animate-spin w-4 h-4 border-2 border-text-muted border-t-transparent rounded-full" />
            <span className="text-sm">Executing...</span>
          </div>
        )}
        
        {error && (
          <pre className="text-sm text-error font-editor whitespace-pre-wrap">
            {error}
          </pre>
        )}
        
        {output && !error && (
          <pre className="text-sm text-text-primary font-editor whitespace-pre-wrap">
            {output}
          </pre>
        )}

        {!output && !error && !isLoading && (
          <p className="text-sm text-text-muted">No output yet. Run your code to see results.</p>
        )}
      </div>
    </div>
  );
};
```

---

## 🎨 Loading States

### Skeleton Loader

```jsx
export const Skeleton = ({ className = '' }) => {
  return (
    <div
      className={`
        animate-pulse bg-bg-tertiary rounded
        ${className}
      `}
    />
  );
};

export const RoomCardSkeleton = () => {
  return (
    <Card>
      <Skeleton className="h-6 w-3/4 mb-4" />
      <Skeleton className="h-4 w-1/2 mb-4" />
      <Skeleton className="h-10 w-full" />
    </Card>
  );
};
```

### Spinner

```jsx
export const Spinner = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  return (
    <div
      className={`
        ${sizes[size]} border-2 border-text-muted border-t-transparent
        rounded-full animate-spin
        ${className}
      `}
    />
  );
};
```

---

## 🎯 Empty States

```jsx
export const EmptyState = ({ 
  icon, 
  title, 
  description, 
  actionLabel, 
  onAction 
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      {icon && (
        <div className="mb-4 text-text-muted">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-text-primary mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-text-muted mb-6 max-w-md">
          {description}
        </p>
      )}
      {actionLabel && onAction && (
        <ButtonPrimary onClick={onAction}>
          {actionLabel}
        </ButtonPrimary>
      )}
    </div>
  );
};
```

---

## 🔍 Search Bar

```jsx
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export const SearchBar = ({ value, onChange, placeholder = 'Search...' }) => {
  return (
    <div className="relative">
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2 bg-bg-tertiary border border-border-primary rounded-md text-text-primary text-sm focus:outline-none focus:border-border-accent focus:ring-2 focus:ring-info/20"
      />
    </div>
  );
};
```

---

## 📱 Responsive Utilities

### Mobile-First Breakpoints

```jsx
// Example: Responsive Grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Cards */}
</div>

// Example: Responsive Text
<h1 className="text-3xl md:text-4xl lg:text-5xl">
  Title
</h1>

// Example: Responsive Padding
<div className="p-4 md:p-6 lg:p-8">
  Content
</div>
```

---

## 🎨 Glassmorphism Examples

```jsx
// Sidebar with glass effect
<div className="glass border-r border-border-primary h-full">
  {/* Sidebar content */}
</div>

// Navbar with glass effect
<nav className="glass border-b border-border-primary">
  {/* Navbar content */}
</nav>

// Modal with strong glass effect
<div className="glass-strong rounded-xl p-6">
  {/* Modal content */}
</div>
```

---

## 🎭 Animation Examples

```jsx
import { motion } from 'framer-motion';

// Fade in on mount
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.2 }}
>
  Content
</motion.div>

// Slide up on mount
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.2 }}
>
  Content
</motion.div>

// Stagger children
<motion.div
  initial="hidden"
  animate="visible"
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }}
>
  {items.map((item) => (
    <motion.div
      key={item.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

---

## 📚 Usage Notes

1. **Import Components**: Create a `components` folder and import these components
2. **Customization**: All components accept `className` prop for additional styling
3. **Accessibility**: Include ARIA labels and keyboard navigation
4. **Performance**: Use React.memo for frequently re-rendered components
5. **TypeScript**: Add proper TypeScript types for production use

---

**Last Updated**: 2024

