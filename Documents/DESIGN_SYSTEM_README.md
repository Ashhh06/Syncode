# 🎨 Design System Documentation

Welcome to the Design System for the **Real-Time Collaborative Code Editor**. This comprehensive design system provides everything you need to build a visually stunning, professional SaaS application.

---

## 📚 Documentation Structure

This design system consists of several documents:

1. **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** - Complete design system specification
   - Color palette
   - Typography
   - Spacing & Layout
   - Components
   - Animations
   - Accessibility guidelines

2. **[DESIGN_SYSTEM_EXAMPLES.md](./DESIGN_SYSTEM_EXAMPLES.md)** - React component examples
   - Button components
   - Input fields
   - Cards
   - Modals
   - Chat panels
   - And more...

3. **[DESIGN_SYSTEM_QUICK_REFERENCE.md](./DESIGN_SYSTEM_QUICK_REFERENCE.md)** - Quick reference guide
   - Common patterns
   - Color codes
   - Spacing scale
   - Typography shortcuts

4. **[tailwind.config.js](./tailwind.config.js)** - Tailwind CSS configuration
   - Extended theme
   - Custom colors
   - Animations
   - Plugins

5. **[src/styles/design-tokens.css](./src/styles/design-tokens.css)** - CSS custom properties
   - All design tokens as CSS variables
   - Base styles
   - Utility classes

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install tailwindcss @tailwindcss/forms @tailwindcss/typography
npm install framer-motion  # For animations
```

### 2. Import Design Tokens

In your main CSS file (e.g., `src/index.css`):

```css
@import './styles/design-tokens.css';
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. Use Tailwind Classes

```jsx
import React from 'react';

function App() {
  return (
    <div className="bg-bg-primary min-h-screen">
      <h1 className="text-4xl font-bold text-text-primary">
        Welcome
      </h1>
      <button className="bg-gradient-primary text-text-primary px-6 py-3 rounded-md">
        Get Started
      </button>
    </div>
  );
}
```

### 4. Use CSS Variables (Alternative)

```css
.my-component {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  padding: var(--space-4);
  border-radius: var(--radius-md);
}
```

---

## 🎨 Design Principles

### 1. **Dark Theme First**
The entire system is optimized for dark themes with carefully chosen contrast ratios.

### 2. **Glassmorphism**
Modern glass effects for elevated surfaces (sidebars, modals, navbars).

### 3. **Gradient Accents**
Beautiful gradients for CTAs and important elements.

### 4. **Micro-interactions**
Smooth animations and transitions for better UX.

### 5. **Accessibility**
WCAG AA compliant with proper focus states and reduced motion support.

---

## 🎯 Key Features

### Color System
- **8 background layers** for depth
- **Semantic colors** (success, error, warning, info)
- **8 user presence colors** for collaboration
- **Multiple gradient options**

### Typography
- **3 font families**: UI, Editor, Display
- **11 font sizes** with proper line heights
- **5 font weights** for hierarchy

### Spacing
- **8px base scale** for consistency
- **12 spacing values** from 4px to 96px

### Components
- Pre-built React components
- Tailwind utility classes
- CSS variable support

### Animations
- **8 keyframe animations**
- Framer Motion integration
- Reduced motion support

---

## 📖 Usage Examples

### Creating a Button

```jsx
// Using Tailwind classes
<button className="bg-gradient-primary text-text-primary px-6 py-3 rounded-md font-medium hover:-translate-y-0.5 hover:shadow-lg transition-all">
  Click Me
</button>

// Using component from examples
import { ButtonPrimary } from './components/Button';
<ButtonPrimary onClick={handleClick}>
  Click Me
</ButtonPrimary>
```

### Creating a Card

```jsx
<div className="bg-bg-elevated border border-border-primary rounded-lg p-6 hover:-translate-y-0.5 hover:shadow-lg transition-all">
  <h3 className="text-xl font-semibold text-text-primary mb-2">
    Card Title
  </h3>
  <p className="text-text-secondary">
    Card content goes here.
  </p>
</div>
```

### Creating a Glassmorphic Sidebar

```jsx
<aside className="w-64 glass border-r border-border-primary h-screen">
  {/* Sidebar content */}
</aside>
```

### Responsive Design

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Responsive grid */}
</div>

<h1 className="text-3xl md:text-4xl lg:text-5xl">
  Responsive Heading
</h1>
```

---

## 🎨 Customization

### Changing Colors

Edit `tailwind.config.js`:

```js
colors: {
  bg: {
    primary: '#your-color',
    // ...
  }
}
```

Or edit CSS variables in `src/styles/design-tokens.css`:

```css
:root {
  --bg-primary: #your-color;
}
```

### Adding New Components

1. Create component in `src/components/`
2. Use design system tokens
3. Document in `DESIGN_SYSTEM_EXAMPLES.md`

### Creating Custom Animations

Add to `tailwind.config.js`:

```js
keyframes: {
  yourAnimation: {
    '0%': { /* ... */ },
    '100%': { /* ... */ },
  }
},
animation: {
  'your-animation': 'yourAnimation 1s ease',
}
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Size | Usage |
|------------|------|-------|
| `sm` | 640px | Small devices |
| `md` | 768px | Tablets |
| `lg` | 1024px | Desktops |
| `xl` | 1280px | Large desktops |
| `2xl` | 1536px | Extra large |

**Example:**
```jsx
<div className="text-base md:text-lg lg:text-xl">
  Responsive text
</div>
```

---

## ♿ Accessibility

### Focus States
All interactive elements have visible focus states:

```css
focus:outline-none
focus:ring-2
focus:ring-info
```

### Reduced Motion
Animations respect user preferences:

```css
@media (prefers-reduced-motion: reduce) {
  /* Animations disabled */
}
```

### Color Contrast
All text meets WCAG AA standards (4.5:1 minimum).

---

## 🛠️ Development Workflow

### 1. Design First
- Review design system tokens
- Choose appropriate colors/spacing
- Check component examples

### 2. Implement
- Use Tailwind classes or components
- Follow spacing scale
- Add animations thoughtfully

### 3. Test
- Check responsive breakpoints
- Verify accessibility
- Test with reduced motion

### 4. Refine
- Ensure consistency
- Optimize performance
- Document custom patterns

---

## 📦 File Structure

```
project-root/
├── DESIGN_SYSTEM.md                    # Main documentation
├── DESIGN_SYSTEM_EXAMPLES.md           # Component examples
├── DESIGN_SYSTEM_QUICK_REFERENCE.md    # Quick reference
├── DESIGN_SYSTEM_README.md             # This file
├── tailwind.config.js                  # Tailwind configuration
└── src/
    └── styles/
        └── design-tokens.css           # CSS variables
```

---

## 🎯 Best Practices

### ✅ Do's

- Use design system tokens consistently
- Follow the 8px spacing scale
- Use semantic color names
- Test on multiple screen sizes
- Ensure accessibility compliance
- Use Framer Motion for complex animations
- Document custom components

### ❌ Don'ts

- Don't use arbitrary values (`p-[13px]`)
- Don't create custom colors outside the system
- Don't ignore responsive breakpoints
- Don't skip focus states
- Don't use animations longer than 500ms
- Don't forget reduced motion support

---

## 🔗 Integration with Frameworks

### React
See `DESIGN_SYSTEM_EXAMPLES.md` for React component examples.

### Next.js
Import design tokens in `app/layout.tsx` or `pages/_app.tsx`.

### Vue
Use Tailwind classes directly or create Vue components using the same patterns.

### Vanilla JS
Use CSS variables from `design-tokens.css` directly.

---

## 📊 Design Tokens Overview

| Category | Count | Examples |
|----------|-------|----------|
| Colors | 30+ | bg-primary, text-primary, success, error |
| Spacing | 12 | space-1 (4px) to space-24 (96px) |
| Typography | 11 sizes | text-xs to text-6xl |
| Shadows | 8 | shadow-sm to shadow-2xl |
| Gradients | 5 | gradient-primary, gradient-code |
| Animations | 8 | fadeIn, slideUp, pulse, spin |

---

## 🐛 Troubleshooting

### Colors not working?
- Ensure Tailwind config is loaded
- Check CSS import order
- Verify class names are correct

### Animations not smooth?
- Use Framer Motion for complex animations
- Check `prefers-reduced-motion`
- Verify transition durations

### Responsive not working?
- Check breakpoint syntax (`md:text-lg`)
- Verify Tailwind is processing classes
- Check container widths

---

## 📝 Contributing

When adding new components or tokens:

1. Update `DESIGN_SYSTEM.md` with specifications
2. Add examples to `DESIGN_SYSTEM_EXAMPLES.md`
3. Update `DESIGN_SYSTEM_QUICK_REFERENCE.md` if needed
4. Test across breakpoints
5. Ensure accessibility

---

## 📚 Additional Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Design Tokens Specification](https://design-tokens.github.io/community-group/format/)

---

## 🎉 Getting Started Checklist

- [ ] Install dependencies (`tailwindcss`, `framer-motion`)
- [ ] Import design tokens CSS
- [ ] Configure Tailwind with provided config
- [ ] Review component examples
- [ ] Set up your first component
- [ ] Test responsive breakpoints
- [ ] Verify accessibility

---

## 📞 Support

For questions or issues:
1. Check the quick reference guide
2. Review component examples
3. Consult the full design system documentation

---

**Version**: 1.0.0  
**Last Updated**: 2024  
**Maintained by**: Development Team

---

## 🎨 Visual Preview

### Color Palette
- **Primary Background**: Deep dark (#0a0e1a)
- **Accent Gradient**: Purple to Blue (#667eea → #764ba2)
- **Success**: Green (#10b981)
- **Error**: Red (#ef4444)

### Typography
- **UI Font**: Inter (clean, modern)
- **Editor Font**: JetBrains Mono (monospace, readable)

### Effects
- **Glassmorphism**: Frosted glass effect
- **Gradients**: Smooth color transitions
- **Shadows**: Layered depth

---

**Happy Designing! 🚀**

