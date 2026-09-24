# QA Checklist

Every completed phase must be checked against this document.

---

## Code Quality

- [ ] No obvious duplicated components
- [ ] No unnecessary dependency added
- [ ] No unresolved TypeScript error
- [ ] No disabled lint rule used as a workaround
- [ ] Components remain reasonably sized
- [ ] Data/content is not needlessly duplicated in JSX

---

## Build

- [ ] Lint passes
- [ ] Typecheck passes
- [ ] Production build passes

If a command does not exist, document that fact instead of pretending it passed.

---

## Routing

- [ ] Navigation links work
- [ ] No broken public routes
- [ ] Dynamic routes handle invalid slugs appropriately
- [ ] Placeholder pages, if used, render correctly

---

## UI

- [ ] Visual style follows `DESIGN_SYSTEM.md`
- [ ] No random colors
- [ ] Spacing is consistent
- [ ] Typography hierarchy is clear
- [ ] Hover states exist where appropriate
- [ ] Focus states remain visible
- [ ] Zalo CTA remains easy to find

---

## Responsive

Verify:

- [ ] 375px
- [ ] 430px
- [ ] 768px
- [ ] 1024px
- [ ] 1440px

Check:

- [ ] no horizontal scrolling
- [ ] no clipped content
- [ ] navigation works
- [ ] CTA remains accessible
- [ ] project images maintain aspect ratio
- [ ] cards stack intentionally
- [ ] text remains readable

---

## Accessibility

- [ ] Semantic headings
- [ ] Buttons use proper elements
- [ ] Links are descriptive
- [ ] Focus states visible
- [ ] Images contain alt text
- [ ] Interactive controls have accessible names

---

## SEO

- [ ] Page title exists
- [ ] Meta description exists where appropriate
- [ ] H1/H2 hierarchy is logical
- [ ] Public pages use semantic HTML
- [ ] Open Graph baseline is present when implemented

---

## Content Integrity

- [ ] No fake client
- [ ] No fake testimonial
- [ ] No fake numbers
- [ ] No fake business claims
- [ ] No Lorem Ipsum remains
- [ ] Internal/confidential company information is not exposed

---

## Runtime

- [ ] Browser console has no unexpected errors
- [ ] No hydration warnings
- [ ] No obvious layout shift caused by implementation
- [ ] No visible broken image assets

---

## Phase Acceptance

- [ ] All acceptance criteria from the active phase are satisfied

A phase is not complete if mandatory checks fail.
