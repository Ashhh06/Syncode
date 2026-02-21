# 🚀 Design System - Quick Reference

A quick reference guide for developers using the design system.

---

## 🎨 Colors

### Backgrounds
```css
bg-primary      /* #0a0e1a - Deepest background */
bg-secondary    /* #0f172a - Main background */
bg-tertiary     /* #1e293b - Elevated surfaces */
bg-elevated     /* #1e293b - Cards, modals */
bg-editor       /* #0d1117 - Monaco editor */
```

### Text
```css
text-primary    /* #f8fafc - Primary text */
text-secondary  /* #cbd5e1 - Secondary text */
text-muted      /* #94a3b8 - Muted text */
```

### Semantic
```css
success         /* #10b981 */
error           /* #ef4444 */
warning         /* #f59e0b */
info            /* #3b82f6 */
```

### Gradients (Tailwind)
```css
bg-gradient-primary    /* Purple/Blue gradient */
bg-gradient-secondary   /* Pink/Red gradient */
bg-gradient-code        /* Blue/Cyan gradient */
```

---

## 📏 Spacing

```css
space-1    /* 4px */
space-2    /* 8px */
space-3    /* 12px */
space-4    /* 16px */
space-6    /* 24px */
space-8    /* 32px */
space-12   /* 48px */
```

**Usage**: `p-4`, `m-6`, `gap-8`, etc.

---

## 🔲 Border Radius

```css
rounded-sm    /* 4px */
rounded-md    /* 8px */
rounded-lg    /* 12px */
rounded-xl    /* 16px */
rounded-2xl   /* 24px */
rounded-full  /* Full circle */
```

---

## 📝 Typography

### Font Families
```css
font-ui       /* Inter - UI elements */
font-editor   /* JetBrains Mono - Code */
font-display  /* Inter - Headings */
```

### Font Sizes
```css
text-xs      /* 12px */
text-sm      /* 14px */
text-base    /* 16px */
text-lg      /* 18px */
text-xl      /* 20px */
text-2xl     /* 24px */
text-3xl     /* 30px */
text-4xl     /* 36px */
text-5xl     /* 48px */
```

### Font Weights
```css
font-light      /* 300 */
font-normal     /* 400 */
font-medium     /* 500 */
font-semibold   /* 600 */
font-bold       /* 700 */
```

---

## 🌑 Shadows

```css
shadow-sm      /* Subtle */
shadow-md      /* Medium */
shadow-lg      /* Large */
shadow-xl      /* Extra large */
shadow-2xl     /* 2X large */
shadow-primary /* Colored - Purple */
shadow-success /* Colored - Green */
shadow-error   /* Colored - Red */
```

---

## ✨ Effects

### Glassmorphism
```css
glass         /* Standard glass effect */
glass-strong  /* Stronger glass effect */
```

### Text Gradient
```css
text-gradient  /* Gradient text effect */
```

### Background Gradient Mesh
```css
bg-gradient-mesh  /* Animated mesh background */
```

---

## 🎭 Animations

### Tailwind Classes
```css
animate-fade-in
animate-slide-up
animate-slide-down
animate-scale-in
animate-pulse
animate-spin
animate-gradient-shift
animate-typing
```

### Framer Motion (Recommended)
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.2 }}
>
```

---

## 🧩 Common Component Patterns

### Button Primary
```jsx
<button className="bg-gradient-primary text-text-primary px-6 py-3 rounded-md font-medium text-sm hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary transition-all">
  Click Me
</button>
```

### Button Secondary
```jsx
<button className="bg-bg-tertiary text-text-primary px-6 py-3 rounded-md font-medium text-sm border border-border-primary hover:bg-bg-elevated transition-all">
  Click Me
</button>
```

### Input Field
```jsx
<input className="w-full px-4 py-3 bg-bg-tertiary border border-border-primary rounded-md text-text-primary text-sm focus:outline-none focus:border-border-accent focus:ring-2 focus:ring-info/20" />
```

### Card
```jsx
<div className="bg-bg-elevated border border-border-primary rounded-lg p-6 hover:-translate-y-0.5 hover:shadow-lg transition-all">
  {/* Content */}
</div>
```

### Badge
```jsx
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-user-1/20 text-user-1">
  Badge
</span>
```

---

## 📱 Responsive Breakpoints

```css
sm:   640px   /* Small devices */
md:   768px   /* Tablets */
lg:   1024px  /* Desktops */
xl:   1280px  /* Large desktops */
2xl:  1536px  /* Extra large */
```

**Usage**: `md:text-lg`, `lg:grid-cols-3`, etc.

---

## 🎯 Z-Index Scale

```css
z-50    /* Dropdown */
z-50    /* Sticky */
z-50    /* Fixed */
z-50    /* Modal backdrop */
z-50    /* Modal */
z-50    /* Popover */
z-50    /* Tooltip */
z-50    /* Toast */
```

---

## 🔍 Common Utilities

### Flexbox
```css
flex items-center justify-between gap-4
```

### Grid
```css
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
```

### Spacing
```css
p-4          /* Padding all */
px-6         /* Padding horizontal */
py-3         /* Padding vertical */
mb-4         /* Margin bottom */
gap-4        /* Gap between items */
```

### Display
```css
hidden md:block    /* Hide on mobile, show on tablet+ */
block md:hidden    /* Show on mobile, hide on tablet+ */
```

---

## 🎨 Color Combinations

### Primary Action
```css
bg-gradient-primary text-text-primary
```

### Success State
```css
bg-success/20 text-success border-success/30
```

### Error State
```css
bg-error/20 text-error border-error/30
```

### Muted/Disabled
```css
bg-bg-tertiary text-text-muted opacity-50
```

---

## 🔗 User Presence Colors

```css
user-1  /* #667eea - Purple */
user-2  /* #f093fb - Pink */
user-3  /* #4facfe - Blue */
user-4  /* #f5576c - Red */
user-5  /* #00f2fe - Cyan */
user-6  /* #a78bfa - Light Purple */
user-7  /* #fb7185 - Light Pink */
user-8  /* #34d399 - Green */
```

**Usage**: `bg-user-1`, `text-user-2`, `border-user-3`, etc.

---

## 📐 Layout Patterns

### Container
```jsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>
```

### Split Layout
```jsx
<div className="flex h-screen">
  <aside className="w-64 glass border-r">
    {/* Sidebar */}
  </aside>
  <main className="flex-1">
    {/* Main content */}
  </main>
</div>
```

### Centered Card
```jsx
<div className="min-h-screen flex items-center justify-center p-4">
  <div className="bg-bg-elevated border border-border-primary rounded-xl p-6 max-w-md w-full">
    {/* Card content */}
  </div>
</div>
```

---

## 🎯 Focus States

```css
focus:outline-none
focus:ring-2
focus:ring-info
focus:ring-offset-2
focus:ring-offset-bg-secondary
```

---

## 📦 Import in React

```jsx
// Import design tokens CSS
import './styles/design-tokens.css';

// Or use Tailwind classes directly
<div className="bg-bg-primary text-text-primary">
  Content
</div>
```

---

## 🚨 Common Mistakes to Avoid

❌ **Don't** use arbitrary values: `p-[13px]`  
✅ **Do** use spacing scale: `p-3` or `p-4`

❌ **Don't** use hex colors directly: `bg-[#667eea]`  
✅ **Do** use design tokens: `bg-user-1` or `bg-gradient-primary`

❌ **Don't** create custom animations  
✅ **Do** use predefined animations or Framer Motion

❌ **Don't** ignore responsive breakpoints  
✅ **Do** design mobile-first: `text-base md:text-lg`

---

## 📚 Additional Resources

- **Full Design System**: See `DESIGN_SYSTEM.md`
- **Component Examples**: See `DESIGN_SYSTEM_EXAMPLES.md`
- **Tailwind Config**: See `tailwind.config.js`
- **CSS Tokens**: See `src/styles/design-tokens.css`

---

**Quick Tip**: Use Tailwind IntelliSense extension in VS Code for autocomplete!

