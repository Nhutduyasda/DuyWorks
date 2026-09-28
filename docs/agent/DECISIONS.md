# Project Decisions

This file records meaningful product and architecture decisions.

Do not record trivial code changes.

---

## DEC-001 — Visual Direction

**Date:** 2026-09-24

**Decision:**

The public website uses the visual direction of TailAdmin/BizSpace and the information architecture principles of NexStudio.

**Reason:**

The site should feel like a professional technology service company rather than a traditional developer CV or admin dashboard.

---

## DEC-002 — Primary Conversion

**Date:** 2026-09-24

**Decision:**

Zalo is the primary conversion CTA.

**Reason:**

The initial target audience is Vietnamese and direct conversation is preferred.

---

## DEC-003 — Initial Product Scope

**Date:** 2026-09-24

**Decision:**

The initial release does not contain:

- authentication
- database
- CMS
- dashboard
- CRM
- e-commerce
- checkout

**Reason:**

The first objective is lead generation, trust building and project showcase.

---

## DEC-004 — Content Integrity

**Date:** 2026-09-24

**Decision:**

The site will not use fake testimonials, fabricated client names, invented statistics or fabricated project metrics.

**Reason:**

Trust should be built using real projects and transparent information.

---

## DEC-005 — Component Composition and External Data Architecture in Phase 1

**Date:** 2026-09-24

**Decision:**

All section content, services, projects, capabilities, and site config are externalized into dedicated typed data modules (`src/data/`, `src/config/`). Home page composes isolated section components adhering strictly to Server Component architecture wherever possible (client interaction limited to mobile menu, accordion, and interactive filters).

**Reason:**

Prevents bulky JSX files, ensures easy maintenance and updates without modifying UI markup, and prepares clean data integration for future phases.

---

## Decision Template

### DEC-XXX — Title

**Date:** YYYY-MM-DD

**Decision:**

Describe the decision.

**Reason:**

Explain why the decision exists.

**Impact:**

Optional explanation of what this changes.

## DEC-006 — Pre-deployment identity and contact configuration

**Date:** 2026-09-26

**Decision:**

DuyWorks is the public brand. Site origin and public contact channels are environment-based; optional channels without verified values are hidden on the contact page and footer. Other Zalo CTAs point to `/contact` until Zalo is configured.

**Reason:**

The production domain and owner contact details have not yet been supplied; publishing sample values would misdirect visitors.

## DEC-007 — Existing public routes retained as baseline

**Date:** 2026-09-26

**Decision:**

The implemented Services, Projects, About, and Contact routes remain in place. Their existence does not mark Phases 2–4 complete.

**Reason:**

The Phase 1 implementation exceeded the placeholder route scope. Future phases should inspect and refine the existing pages against their own acceptance criteria.

## DEC-008 — Visual Simplification

**Date:** 2026-09-28

**Decision:**

Home uses fewer sections and visual containers. The separate Featured Case Study is absorbed into Selected Work, Working Principles and Process into How I Work, and the Capability Bar is removed. Technology becomes a text list and the process has four steps.

**Reason:**

Reduce cognitive load and give the offer, project imagery and contact action clear visual priority.

## DEC-009 — Services organized around client problems

**Date:** 2026-09-28

**Decision:**

The four Services pages lead with situations and use cases that non-technical visitors can recognize. A shared four-step process and service-specific FAQs live in service data; related projects are stored as slugs and resolved from `projectsData`. A service without a matching project omits that section.

**Reason:**

Visitors need to choose a solution from their problem, and project evidence must use a single source of truth rather than fabricated examples.
