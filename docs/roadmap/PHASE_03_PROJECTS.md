# Phase 3 — Projects & Case Studies

## Goal

Use real project work as the strongest trust-building content on the website.

---

## Scope

Implement:

- `/projects`
- client-side project filtering
- `/projects/[slug]`
- project gallery
- case study structure
- related project navigation
- Zalo CTA

---

## Projects Page

Include:

- hero
- short positioning copy
- filters
- project cards
- CTA

Suggested filters:

- All
- Website
- Web Application
- Internal Software
- AI / Automation

Client-side filtering is enough for this phase.

---

## Case Study Structure

Each project page should include:

1. Project hero
2. Large screenshot
3. Overview
4. Problem
5. Solution
6. Key Features
7. Technology
8. Development Notes
9. Screenshots
10. Result / Outcome
11. CTA

---

## Content Rules

Never expose confidential company data.

Never invent quantitative outcomes.

If metrics are unknown, use qualitative outcomes.

Good example:

`Giúp chuẩn hóa quy trình xử lý dữ liệu và giảm thao tác thủ công.`

Bad example:

`Tăng năng suất 80%.`

unless that number is real and verified.

---

## Data Architecture

Project content should live in:

`src/data/projects.ts`

Suggested fields:

- slug
- name
- category
- shortDescription
- overview
- problem
- solution
- features
- technologies
- screenshots
- liveUrl
- repositoryUrl
- featured
- outcome

---

## Acceptance Criteria

- projects are easy to browse
- real work is presented clearly
- case studies are readable by non-technical clients
- internal project confidentiality is preserved
- images are responsive and optimized
- no fake metrics
- visual consistency with Home
- lint/typecheck/build pass
