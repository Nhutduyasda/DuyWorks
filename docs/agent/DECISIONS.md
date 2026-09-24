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
