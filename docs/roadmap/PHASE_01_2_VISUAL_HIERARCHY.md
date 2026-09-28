# Phase 1.2 — Visual Hierarchy & Simplification

## Why

Owner review found that eleven equally weighted Home sections, repeated cards, tags and borders made the primary message and project work hard to scan. This phase reduces visual noise without adding features or advancing Phase 2.

## Home hierarchy

1. Hero: core offer, two actions and a project visual.
2. Services: four concise service links.
3. Selected Work: one featured project and two smaller projects.
4. How I Work: three values and four process steps.
5. Technology: four compact text rows.
6. Final CTA: direct contact action.

Header and Footer remain. FAQ is removed from Home; no other route is changed.

## Removed and merged

- Removed Capability Bar, standalone Featured Case Study and Home FAQ.
- Merged Why Work With Me, Working Principles and Process into How I Work.
- Simplified the Technology section from nested cards to text.
- Removed Home trust chips, service capability pills and project metadata boxes. Project and service detail data remains on their routes.

## Visual rules

- Whitespace and type establish hierarchy; cards are reserved for service grouping and project imagery.
- Avoid nested borders and repeated eyebrow labels. The blue accent primarily marks CTAs and selected links.
- Project imagery should lead Selected Work; illustrative assets must not be called real screenshots.
- Preserve accessible navigation, mobile stacking and the Zalo fallback behavior.

## Acceptance

- At most seven Home content sections, with six targeted.
- Three Home projects at most, one with larger emphasis.
- Three values and four process steps without card grids.
- No capability wall, secondary case study or technology card grid.
- Roughly half as many independent visual containers; materially fewer borders and pills.
- Responsive checks at 375, 430, 768, 1024 and 1440 pixels.
- `npm ci`, lint, typecheck and build pass. Owner reviews preview before any Phase 2 work.
