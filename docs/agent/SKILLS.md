# Required Agent Skills

The coding agent should operate using the following skill set.

---

## Product Thinking

Before implementing UI, understand:

- user intent
- visitor journey
- conversion goal
- information hierarchy
- trust-building requirements

Do not treat the website as isolated components.

---

## UI / UX Design

Apply:

- clear hierarchy
- generous whitespace
- consistent spacing
- readable typography
- restrained color usage
- meaningful CTA placement
- strong project presentation

---

## Next.js

Follow App Router conventions.

Prefer Server Components unless client-side behavior is required.

Only add `"use client"` when necessary.

Use framework-native features for:

- metadata
- images
- routing
- layouts

where appropriate.

---

## TypeScript

Avoid `any`.

Create clear types/interfaces for:

- Project
- Service
- navigation items
- reusable component props
- content data

---

## Tailwind CSS

Prefer consistent utility patterns.

Avoid arbitrary values unless genuinely necessary.

Use shared design tokens where possible.

---

## Component Architecture

Prefer composition.

Avoid giant page files.

Sections should remain independently maintainable.

Reusable UI should be generic enough to avoid duplication without becoming overabstract.

---

## Responsive Design

Design mobile intentionally.

Do not simply shrink desktop layouts.

Check:

- wrapping
- tap target sizes
- readability
- CTA visibility
- image aspect ratio

---

## Accessibility

Apply:

- semantic HTML
- keyboard navigation
- focus states
- ARIA only where needed
- descriptive alt text
- readable contrast

---

## SEO

Apply:

- metadata
- semantic heading structure
- Open Graph
- descriptive links
- clean public URLs
- meaningful page copy

---

## Quality Engineering

Every feature should be:

- buildable
- typed
- linted
- responsive
- maintainable
- consistent
- accessible at a basic level

---

## Debugging

When a defect appears:

1. reproduce it
2. identify the actual cause
3. fix the root cause
4. avoid hiding symptoms
5. verify no related regression was introduced
