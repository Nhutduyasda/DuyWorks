# Phase 2 — Services

## Goal

Build the complete public services experience.

Visitors should understand what problems can be solved, what each service includes, and how to start a conversation through Zalo.

---

## Scope

Implement:

- `/services`
- `/services/[slug]`
- service data model
- service cards
- service detail layout
- related projects
- service FAQ
- Zalo conversion CTA

---

## Services Listing

The main `/services` page should include:

- clear hero
- service categories
- concise descriptions
- capability examples
- CTA
- selected related projects
- FAQ or process summary

Avoid fake package pricing unless real pricing is later supplied.

---

## Service Detail

Each `/services/[slug]` should include:

1. Breadcrumb
2. Service hero
3. Problems / use cases
4. What is included
5. Typical deliverables
6. Development approach
7. Related project(s)
8. FAQ
9. Zalo CTA

---

## Initial Services

- Website & Landing Page
- Web Application
- Phần mềm quản lý
- AI & Automation

---

## Data Architecture

Service content should live in:

`src/data/services.ts`

Suggested type fields:

- slug
- title
- shortDescription
- description
- icon
- capabilities
- useCases
- deliverables
- relatedProjectSlugs
- faq

---

## Constraints

Do not add:

- pricing calculator
- checkout
- cart
- payment
- CRM lead capture backend

unless explicitly approved.

---

## Acceptance Criteria

- services are understandable to non-technical visitors
- routes work
- no duplicate service copy is spread across JSX
- visual language matches Phase 1
- Zalo CTA is visible
- responsive behavior passes
- lint/typecheck/build pass
