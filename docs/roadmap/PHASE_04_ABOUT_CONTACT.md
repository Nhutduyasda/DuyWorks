# Phase 4 — About & Contact

## Goal

Help visitors understand who is behind the work and make contacting the developer frictionless.

---

## Scope

Implement:

- `/about`
- `/contact`
- Zalo
- Email
- LinkedIn
- GitHub
- contact UX

---

## About Page

Avoid turning the page into a long CV.

Suggested structure:

1. Hero
2. Short personal introduction
3. What I build
4. How I work
5. Technology
6. Development philosophy
7. Selected projects
8. Contact CTA

Tone:

professional, clear and approachable.

---

## Contact Page

Suggested heading:

`Cùng trao đổi về ý tưởng của bạn`

Contact priority:

1. Zalo
2. Email
3. LinkedIn
4. GitHub

A simple form UI may be used.

If no backend exists:

- use `mailto`
- or direct users to Zalo

Do not simulate successful form submission if nothing is actually sent.

---

## Privacy

Do not expose unnecessary personal details.

Only show contact data that the project owner explicitly intends to publish.

---

## Acceptance Criteria

- contact options work
- Zalo remains primary
- About does not look like a resume dump
- no fake professional claims
- mobile experience is polished
- lint/typecheck/build pass
