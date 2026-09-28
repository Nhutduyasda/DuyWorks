# Phase 2 — Services Completion & Conversion UX

## Existing baseline

The Phase 1 repository already contains `/services`, `/services/[slug]`, four services in `src/data/services.ts`, static slug generation, `notFound()`, and the shared Zalo link. Phase 2 improves these pages rather than rebuilding the routing or global layout. Phase 1.2's restrained typography, spacing, cards and accent usage remain the visual baseline.

## Goal

A visitor with little technical knowledge can identify the right service, understand the problem addressed and scope of work, inspect relevant existing projects, then contact through Zalo.

## Scope

- Four existing services with short descriptions, problem-oriented use cases, deliverables, a shared four-step process and distinct FAQs.
- Listing with four concise cards, a text-based decision guide, compact related work and a final CTA.
- Detail pages with open hero, use cases, capabilities, deliverables, process, actual related projects where relevant, FAQ and contextual CTA.
- Project references resolved by slug from `src/data/projects.ts`. No invented AI project.
- Testify added as owner-provided project proof for Web Application and AI & Automation. Its public landing page was inspected; the private app was not. The original SVG is an illustrative preview, not a verified screenshot. The existing Projects route and category filter remain generic.
- Preserve static params, invalid-slug 404, meaningful metadata and Zalo fallback.

## Constraints

No pricing packages, promises of guaranteed outcomes, new backend, Home redesign, fabricated case studies, nested card walls, or new dependencies. Avoid jargon; explain AI/OCR review needs and conditional deliverables.

## Acceptance

- All four detail routes and listing build; invalid slug returns 404.
- One H1 per page, accessible FAQ disclosure, links and image alt text.
- No overloaded capability pills; each page has a clear primary contact action.
- Review at 375, 430, 768, 1024 and 1440 pixels when browser access allows.
- `npm ci`, lint, typecheck and build pass; owner reviews before Phase 3.
