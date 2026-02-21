# 🎨 Design System
## Real-Time Collaborative Code Editor

> A comprehensive design system for building a professional, visually stunning collaborative code editor.

---

## 📋 Table of Contents

1. [Color Palette](#color-palette)
2. [Typography](#typography)
3. [Spacing & Layout](#spacing--layout)
4. [Shadows & Effects](#shadows--effects)
5. [Components](#components)
6. [Animations](#animations)
7. [Icons](#icons)
8. [Responsive Breakpoints](#responsive-breakpoints)
9. [Accessibility](#accessibility)
10. [Usage Guidelines](#usage-guidelines)

---

## 🎨 Color Palette

### Background Colors

```css
/* Primary Backgrounds - Layered Depth */
--bg-primary: #0a0e1a;        /* Deepest background */
--bg-secondary: #0f172a;      /* Main background */
--bg-tertiary: #1e293b;       /* Elevated surfaces */
--bg-elevated: #1e293b;       /* Cards, modals */
--bg-editor: #0d1117;         /* Monaco editor background */
--bg-sidebar: rgba(15, 23, 42, 0.8);  /* Glassmorphic sidebar */
--bg-navbar: rgba(15, 23, 42, 0.7);   /* Glassmorphic navbar */
```

### Accent Gradients

```css
/* Primary Accent - Purple/Blue */
--gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Secondary Accent - Pink/Red */
--gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);

/* Code Accent - Blue/Cyan */
--gradient-code: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);

/* Success Gradient */
--gradient-success: linear-gradient(135deg, #10b981 0%, #059669 100%);

/* Warning Gradient */
--gradient-warning: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
```

### Semantic Colors

```css
/* Success */
--color-success: #10b981;
--color-success-light: #34d399;
--color-success-dark: #059669;

/* Error */
--color-error: #ef4444;
--color-error-light: #f87171;
--color-error-dark: #dc2626;

/* Warning */
--color-warning: #f59e0b;
--color-warning-light: #fbbf24;
--color-warning-dark: #d97706;

/* Info */
--color-info: #3b82f6;
--color-info-light: #60a5fa;
--color-info-dark: #2563eb;
```

### Text Colors

```css
/* Primary Text */
--text-primary: #f8fafc;
--text-secondary: #cbd5e1;
--text-muted: #94a3b8;
--text-disabled: #64748b;

/* Inverse Text (for dark backgrounds) */
--text-inverse: #0f172a;
```

### Border Colors

```css
--border-primary: rgba(148, 163, 184, 0.1);
--border-secondary: rgba(148, 163, 184, 0.2);
--border-accent: rgba(102, 126, 234, 0.3);
--border-error: rgba(239, 68, 68, 0.3);
```

### User Presence Colors

```css
/* Cursor colors for different users */
--user-color-1: #667eea;
--user-color-2: #f093fb;
--user-color-3: #4facfe;
--user-color-4: #f5576c;
--user-color-5: #00f2fe;
--user-color-6: #a78bfa;
--user-color-7: #fb7185;
--user-color-8: #34d399;
```

---

## 📝 Typography

### Font Families

```css
/* UI Font - Clean Sans-serif */
--font-ui: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Editor Font - Monospace */
--font-editor: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;

/* Display Font - For Headings */
--font-display: 'Inter', sans-serif;
```

### Font Sizes

```css
/* Display Sizes */
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */
--text-6xl: 3.75rem;     /* 60px */
```

### Font Weights

```css
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### Line Heights

```css
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.6;
--leading-loose: 2;
```

### Letter Spacing

```css
--tracking-tight: -0.025em;
--tracking-normal: 0;
--tracking-wide: 0.025em;
```

### Typography Scale

```css
/* Headings */
h1 {
  font-family: var(--font-display);
  font-size: var(--text-5xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--text-primary);
}

h2 {
  font-family: var(--font-display);
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  color: var(--text-primary);
}

h3 {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-normal);
  color: var(--text-primary);
}

h4 {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-normal);
  color: var(--text-primary);
}

/* Body Text */
body {
  font-family: var(--font-ui);
  font-size: var(--text-base);
  font-weight: var(--font-normal);
  line-height: var(--leading-relaxed);
  color: var(--text-secondary);
}

/* Code/Editor Text */
code, .editor {
  font-family: var(--font-editor);
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
  color: var(--text-primary);
}
```

---

## 📐 Spacing & Layout

### Spacing Scale (8px base)

```css
--space-0: 0;
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

### Border Radius

```css
--radius-sm: 0.25rem;   /* 4px */
--radius-md: 0.5rem;    /* 8px */
--radius-lg: 0.75rem;   /* 12px */
--radius-xl: 1rem;      /* 16px */
--radius-2xl: 1.5rem;   /* 24px */
--radius-full: 9999px;  /* Full circle */
```

### Container Widths

```css
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1536px;
```

### Z-Index Scale

```css
--z-base: 0;
--z-dropdown: 1000;
--z-sticky: 1020;
--z-fixed: 1030;
--z-modal-backdrop: 1040;
--z-modal: 1050;
--z-popover: 1060;
--z-tooltip: 1070;
--z-toast: 1080;
```

---

## 🌑 Shadows & Effects

### Box Shadows

```css
/* Subtle shadows */
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

/* Colored shadows for accents */
--shadow-primary: 0 10px 25px -5px rgba(102, 126, 234, 0.3);
--shadow-success: 0 10px 25px -5px rgba(16, 185, 129, 0.3);
--shadow-error: 0 10px 25px -5px rgba(239, 68, 68, 0.3);
```

### Glassmorphism

```css
/* Glass effect */
.glass {
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(148, 163, 184, 0.1);
}

.glass-strong {
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(148, 163, 184, 0.2);
}
```

### Gradients

```css
/* Background Gradients */
.gradient-mesh {
  background: 
    radial-gradient(at 0% 0%, rgba(102, 126, 234, 0.1) 0px, transparent 50%),
    radial-gradient(at 100% 0%, rgba(118, 75, 162, 0.1) 0px, transparent 50%),
    radial-gradient(at 100% 100%, rgba(79, 172, 254, 0.1) 0px, transparent 50%),
    radial-gradient(at 0% 100%, rgba(245, 87, 108, 0.1) 0px, transparent 50%);
}

/* Text Gradients */
.text-gradient {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## 🧩 Components

### Buttons

#### Primary Button

```css
.btn-primary {
  background: var(--gradient-primary);
  color: var(--text-primary);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  font-weight: var(--font-medium);
  font-size: var(--text-sm);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: var(--shadow-md);
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-lg), var(--shadow-primary);
}

.btn-primary:active {
  transform: translateY(0);
}

.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

#### Secondary Button

```css
.btn-secondary {
  background: var(--bg-tertiary);
  color: var(--text-primary);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  font-weight: var(--font-medium);
  font-size: var(--text-sm);
  border: 1px solid var(--border-primary);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: var(--bg-elevated);
  border-color: var(--border-secondary);
}
```

#### Ghost Button

```css
.btn-ghost {
  background: transparent;
  color: var(--text-secondary);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  font-weight: var(--font-medium);
  font-size: var(--text-sm);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-ghost:hover {
  background: var(--bg-tertiary);
  color: var(--text-primary);
}
```

### Input Fields

```css
.input {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  background: var(--bg-tertiary);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-md);
  color: var(--text-primary);
  font-size: var(--text-sm);
  font-family: var(--font-ui);
  transition: all 0.2s ease;
}

.input:focus {
  outline: none;
  border-color: var(--border-accent);
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.input::placeholder {
  color: var(--text-muted);
}

.input-error {
  border-color: var(--color-error);
}

.input-error:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}
```

### Cards

```css
.card {
  background: var(--bg-elevated);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  border-color: var(--border-secondary);
}

.card-interactive {
  cursor: pointer;
}
```

### Modals

```css
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  z-index: var(--z-modal-backdrop);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  background: var(--bg-elevated);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  max-width: 90vw;
  max-height: 90vh;
  box-shadow: var(--shadow-2xl);
  border: 1px solid var(--border-primary);
  z-index: var(--z-modal);
}
```

### Badges

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  line-height: 1;
}

.badge-primary {
  background: rgba(102, 126, 234, 0.2);
  color: var(--user-color-1);
}

.badge-success {
  background: rgba(16, 185, 129, 0.2);
  color: var(--color-success);
}

.badge-error {
  background: rgba(239, 68, 68, 0.2);
  color: var(--color-error);
}
```

### Toast Notifications

```css
.toast {
  background: var(--bg-elevated);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-lg);
  padding: var(--space-4);
  box-shadow: var(--shadow-xl);
  min-width: 300px;
  max-width: 400px;
}

.toast-success {
  border-left: 3px solid var(--color-success);
}

.toast-error {
  border-left: 3px solid var(--color-error);
}

.toast-info {
  border-left: 3px solid var(--color-info);
}
```

---

## ✨ Animations

### Transitions

```css
/* Standard Transitions */
--transition-fast: 150ms ease;
--transition-base: 200ms ease;
--transition-slow: 300ms ease;
--transition-slower: 500ms ease;
```

### Keyframe Animations

```css
/* Fade In */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Slide Up */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Slide Down */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Scale In */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Pulse */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Spin */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Gradient Shift */
@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Typing Indicator */
@keyframes typing {
  0%, 60%, 100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-10px);
  }
}
```

### Animation Classes

```css
.animate-fade-in {
  animation: fadeIn var(--transition-base);
}

.animate-slide-up {
  animation: slideUp var(--transition-base);
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-spin {
  animation: spin 1s linear infinite;
}
```

---

## 🎯 Icons

### Icon Sizes

```css
--icon-xs: 0.75rem;   /* 12px */
--icon-sm: 1rem;      /* 16px */
--icon-md: 1.25rem;   /* 20px */
--icon-lg: 1.5rem;    /* 24px */
--icon-xl: 2rem;      /* 32px */
```

### Icon Guidelines

- Use consistent stroke width (1.5px recommended)
- Maintain visual weight across icon set
- Use SVG for scalability
- Support both filled and outlined variants
- Ensure icons are accessible (ARIA labels)

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
--breakpoint-sm: 640px;   /* Small devices */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Desktops */
--breakpoint-xl: 1280px;  /* Large desktops */
--breakpoint-2xl: 1536px; /* Extra large */
```

### Usage Example

```css
/* Mobile */
.container {
  padding: var(--space-4);
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding: var(--space-6);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    padding: var(--space-8);
  }
}
```

---

## ♿ Accessibility

### Color Contrast

- Text on background: Minimum 4.5:1 ratio
- Large text: Minimum 3:1 ratio
- Interactive elements: Minimum 3:1 ratio

### Focus States

```css
.focus-ring {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus-ring:focus {
  outline: 2px solid var(--color-info);
  outline-offset: 2px;
}
```

### ARIA Guidelines

- Use semantic HTML
- Provide ARIA labels for icons
- Use ARIA live regions for dynamic content
- Ensure keyboard navigation support
- Provide skip links

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 📖 Usage Guidelines

### Do's ✅

- Use consistent spacing scale (multiples of 4px)
- Maintain color contrast ratios
- Use semantic HTML elements
- Provide loading states
- Handle error states gracefully
- Test on multiple screen sizes
- Ensure keyboard accessibility
- Use appropriate animation durations

### Don'ts ❌

- Don't use arbitrary spacing values
- Don't skip focus states
- Don't use color alone to convey information
- Don't create animations longer than 500ms
- Don't ignore reduced motion preferences
- Don't use too many gradients at once
- Don't create components without error states
- Don't forget to test with screen readers

---

## 🎨 Theme Tokens (CSS Variables)

Complete CSS variable file structure:

```css
:root {
  /* Colors */
  --bg-primary: #0a0e1a;
  --bg-secondary: #0f172a;
  --bg-tertiary: #1e293b;
  --bg-elevated: #1e293b;
  --bg-editor: #0d1117;
  
  --text-primary: #f8fafc;
  --text-secondary: #cbd5e1;
  --text-muted: #94a3b8;
  
  --color-success: #10b981;
  --color-error: #ef4444;
  --color-warning: #f59e0b;
  --color-info: #3b82f6;
  
  /* Gradients */
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  --gradient-code: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  
  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  
  /* Border Radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  
  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 200ms ease;
  --transition-slow: 300ms ease;
  
  /* Typography */
  --font-ui: 'Inter', sans-serif;
  --font-editor: 'JetBrains Mono', monospace;
  
  /* Z-Index */
  --z-dropdown: 1000;
  --z-modal: 1050;
  --z-toast: 1080;
}
```

---

## 📚 Component Examples

### Button Variants

```jsx
// Primary Button
<button className="btn-primary">
  Create Room
</button>

// Secondary Button
<button className="btn-secondary">
  Cancel
</button>

// Ghost Button
<button className="btn-ghost">
  Learn More
</button>
```

### Card Component

```jsx
<div className="card card-interactive">
  <h3>Room Name</h3>
  <p>Description</p>
</div>
```

### Input with Error

```jsx
<div>
  <input 
    className="input input-error" 
    placeholder="Enter email"
  />
  <span className="text-error">Invalid email</span>
</div>
```

---

## 🚀 Implementation Notes

1. **CSS-in-JS or CSS Modules**: Choose based on your preference
2. **Theme Provider**: Use React Context for theme switching
3. **Dark Mode**: This system is optimized for dark theme
4. **Customization**: All values are CSS variables for easy theming
5. **Performance**: Use CSS variables for runtime theme switching

---

## 📝 Version History

- **v1.0.0** - Initial design system document
  - Color palette
  - Typography scale
  - Component styles
  - Animation guidelines
  - Accessibility standards

---

**Last Updated**: 2024

**Maintained by**: Development Team

