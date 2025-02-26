# Haven Landing Page Design System

## Core Components

### Layout Components

- `Section`: Base layout component with consistent spacing and background variants
- `Container`: Responsive container with consistent max-widths and padding
- `Card`: Flexible card component with various styles and hover effects

### Typography Components

- `Heading`: Consistent heading styles with responsive sizing
- `Text`: Text component with various sizes and styles

### Interactive Components

- `Button`: Primary interaction component with multiple variants
- `IconButton`: Specialized button for icon-only interactions
- `NavLink`: Navigation link with hover animations

### Visual Components

- `Spinner`: Loading indicator
- `GradientBackground`: Animated gradient backgrounds with retro blur effects
- `RetroBlur`: Component for creating retro-style blur effects with noise
- `NoiseTexture`: Overlay component for adding grain/noise effects
- `GridPattern`: Decorative grid patterns

## Design Tokens

### Colors

- Primary Gradient: `from-red-400 to-pink-600`
- Background Blur: `backdrop-blur-[100px]`
- Noise Opacity: `opacity-[0.15]`
- Glass Effect: `bg-white/10 backdrop-blur-lg`
- Primary: Used for main brand elements
- Secondary: Used for supporting elements
- Accent: Used for highlights and attention-grabbing elements
- Muted: Used for subtle backgrounds and disabled states
- Background: Base background colors
- Foreground: Base text colors

### Blur & Noise Effects

- Retro Blur:
  ```css
  .retro-blur {
    backdrop-filter: blur(100px);
    -webkit-backdrop-filter: blur(100px);
  }
  ```
- Noise Texture:
  ```css
  .noise {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E");
    opacity: 0.15;
    mix-blend-mode: overlay;
  }
  ```

### Typography

- Font Families:
  - Clash Display: Used for headings and display text
  - Plus Jakarta Sans: Used for body text
- Font Sizes:
  - xs: 0.75rem
  - sm: 0.875rem
  - base: 1rem
  - lg: 1.125rem
  - xl: 1.25rem
  - 2xl: 1.5rem
  - 3xl: 1.875rem
  - 4xl: 2.25rem

### Spacing

- 0: 0
- 1: 0.25rem
- 2: 0.5rem
- 3: 0.75rem
- 4: 1rem
- 5: 1.25rem
- 6: 1.5rem
- 8: 2rem
- 10: 2.5rem
- 12: 3rem
- 16: 4rem

### Animations

- Text Transitions:
  ```typescript
  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };
  ```
- Title Change Animation:
  ```typescript
  const titleChangeVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
      },
    },
    exit: {
      opacity: 0,
      y: -50,
    },
  };
  ```
- Transitions:
  - Default: all 0.2s cubic-bezier(0.4, 0, 0.2, 1)
  - Colors: color 0.2s cubic-bezier(0.4, 0, 0.2, 1)
- Motion:
  - Float: Subtle up and down movement
  - Wave: Wave-like motion
  - Pulse: Gentle pulsing effect

### Shadows

- sm: Subtle elevation
- default: Standard elevation
- md: Medium elevation
- lg: High elevation

### Border Radius

- sm: 0.375rem
- default: 0.5rem
- lg: 0.75rem
- xl: 1rem
- full: 9999px

## Component Patterns

### Section Structure

```tsx
<Section>
  <Container>
    <motion.div variants={staggerChildren}>{/* Content */}</motion.div>
  </Container>
</Section>
```

### Card Pattern

```tsx
<Card variant="glass" hover="scale">
  <CardContent>
    <Text>Content</Text>
  </CardContent>
</Card>
```

### Button Pattern

```tsx
<Button variant="gradient" size="lg">
  Call to Action
</Button>
```

## Best Practices

1. **Consistent Spacing**

   - Use the Section and Container components for layout
   - Follow the spacing scale for margins and padding

2. **Typography Hierarchy**

   - Use Heading for section titles
   - Use Text for body content
   - Follow the established size scale

3. **Animation Patterns**

   - Use motion.div for animated elements
   - Follow the established animation variants
   - Keep animations subtle and purposeful

4. **Responsive Design**

   - Use container queries where appropriate
   - Follow the established breakpoint system
   - Test on multiple screen sizes

5. **Accessibility**

   - Include proper ARIA labels
   - Ensure sufficient color contrast
   - Support keyboard navigation

6. **Performance**
   - Lazy load components when possible
   - Use appropriate image formats and sizes
   - Monitor and optimize bundle size

## Maintenance

1. **Adding New Components**

   - Follow the established patterns
   - Include TypeScript types
   - Add appropriate variants
   - Document usage patterns

2. **Updating Styles**

   - Update tokens in the theme configuration
   - Test changes across all components
   - Document breaking changes

3. **Testing**
   - Test across different browsers
   - Verify responsive behavior
   - Check accessibility compliance
