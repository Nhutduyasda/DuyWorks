# Phase 1 — Foundation & Home

## Goal

Create a production-quality Home page that establishes the visual system for the entire website.

The Home page is the design reference for all future pages.

---

## Product Positioning

The website is:

**Technology Service Website + Developer Portfolio + Project Showcase**

Primary visitor journey:

**Discover services → View real projects → Build trust → Contact via Zalo**

---

## Required Sections

1. Header
2. Hero
3. Capability Bar
4. Services
5. Featured Projects
6. Why Work With Me
7. Development Process
8. Technology Stack
9. Featured Case Study
10. Working Principles
11. FAQ
12. Final CTA
13. Footer
14. Floating Zalo CTA

---

## Section Requirements

### 1. Header

Desktop:

- brand/logo
- Dịch vụ
- Dự án
- Giới thiệu
- Liên hệ
- Zalo CTA

Requirements:

- sticky
- white/light surface
- subtle bottom border
- responsive mobile menu
- no sidebar navigation

---

### 2. Hero

Eyebrow:

`Website • Software • AI Solutions`

Suggested headline:

`Biến ý tưởng của bạn thành sản phẩm hoạt động thực tế.`

Suggested supporting text:

`Thiết kế website, phần mềm quản lý và giải pháp AI phù hợp cho cá nhân, cửa hàng và doanh nghiệp.`

Primary CTA:

`Xem dự án đã thực hiện`

Secondary CTA:

`Trao đổi qua Zalo`

Optional trust chips:

- Website hiện đại
- Responsive
- Hỗ trợ sau bàn giao

Visual:

Use a professional browser/product mockup or project screenshot.

Do not use generic stock photography as the primary hero visual.

---

### 3. Capability Bar

Show a lightweight capability/technology row.

Examples:

- Web Development
- Internal Software
- AI Integration
- Automation

or:

- Next.js
- React
- .NET
- Supabase
- SQL Server
- Vercel

Keep it visually light.

---

### 4. Services

Heading:

`Giải pháp tôi có thể hỗ trợ`

Suggested description:

`Từ website giới thiệu đến hệ thống quản lý nội bộ, mỗi sản phẩm được xây dựng dựa trên nhu cầu sử dụng thực tế.`

Initial service cards:

#### Website & Landing Page

Website doanh nghiệp, portfolio, giới thiệu sản phẩm và landing page marketing.

#### Web Application

Ứng dụng web có database, authentication và business workflow.

#### Phần mềm quản lý

Các hệ thống quản lý nội bộ cho cửa hàng và doanh nghiệp.

#### AI & Automation

OCR, AI integration, xử lý dữ liệu và tự động hóa quy trình.

Each card should include:

- icon
- title
- short description
- capability tags
- `Tìm hiểu thêm →`

Service data must live outside page JSX.

---

### 5. Featured Projects

Heading:

`Một số dự án đã thực hiện`

Suggested supporting text:

`Những sản phẩm được phát triển từ nhu cầu thực tế, từ website đến hệ thống nghiệp vụ.`

Use large project cards.

Initial sample project entries may include:

- Zhonglish
- Collaborative Excel
- Attendance Management System
- Developer Portfolio

Project data must live in:

`src/data/projects.ts`

For internal/business projects:

- do not expose confidential company names
- do not expose private data
- describe the business problem generically where necessary

---

### 6. Why Work With Me

Heading:

`Không chỉ là giao diện đẹp`

Suggested value propositions:

#### Tập trung vào sản phẩm có thể sử dụng

Thiết kế dựa trên workflow và nhu cầu thực tế thay vì chỉ làm giao diện.

#### Giao tiếp rõ ràng

Yêu cầu, scope và tiến độ được trao đổi rõ ngay từ đầu.

#### Dễ phát triển tiếp

Code có cấu trúc và component reusable để có thể mở rộng.

#### Hỗ trợ sau bàn giao

Có thể tiếp tục sửa lỗi, cải tiến và phát triển chức năng mới.

Do not use generic buzzwords such as:

- Creative
- Passionate
- Amazing
- World-class

---

### 7. Development Process

Heading:

`Quy trình làm việc`

Steps:

1. Trao đổi yêu cầu
2. Phân tích & đề xuất giải pháp
3. Thiết kế giao diện
4. Phát triển sản phẩm
5. Kiểm thử & bàn giao
6. Hỗ trợ sau triển khai

Desktop:

horizontal or structured grid.

Mobile:

vertical timeline.

---

### 8. Technology Stack

Heading:

`Công nghệ tôi thường sử dụng`

Groups:

#### Frontend

- React
- Next.js
- TypeScript
- Tailwind CSS

#### Backend

- ASP.NET Core
- Node.js

#### Database

- SQL Server
- PostgreSQL
- Supabase

#### Deployment & Tools

- Vercel
- Docker
- GitHub

Do not use skill percentages or ratings.

---

### 9. Featured Case Study

Default featured project:

Zhonglish

Eyebrow:

`Featured Case Study`

Suggested title:

`From idea to production.`

Suggested description:

`Nền tảng học tiếng Trung với authentication, learning progress, XP system và backend được xây dựng trên Supabase.`

CTA:

`Xem Case Study`

Use a large product screenshot/mockup.

---

### 10. Working Principles

Do not create fake testimonials.

Use:

`Cách tôi làm việc`

Possible points:

- Trao đổi yêu cầu rõ ràng
- Demo theo từng giai đoạn
- Không phát triển ngoài scope khi chưa thống nhất
- Bàn giao source code
- Có thể tiếp tục hỗ trợ và phát triển

---

### 11. FAQ

Heading:

`Câu hỏi thường gặp`

Initial questions:

- Bạn có nhận website nhỏ không?
- Có thể chỉnh sửa website có sẵn không?
- Tôi mới chỉ có ý tưởng, chưa có thiết kế thì sao?
- Sau khi bàn giao có hỗ trợ không?
- Làm sao để trao đổi yêu cầu?

Use an accessible accordion.

---

### 12. Final CTA

Suggested headline:

`Bạn đang có một ý tưởng cần biến thành sản phẩm?`

Suggested description:

`Hãy gửi cho tôi yêu cầu hoặc mô tả vấn đề bạn đang gặp. Tôi sẽ cùng bạn xem hướng triển khai phù hợp.`

Primary CTA:

`Trao đổi qua Zalo`

Secondary CTA:

`Xem các dự án`

Do not use:

- Buy Now
- Start Free Trial
- Subscribe
- Purchase

---

### 13. Footer

Include:

- brand
- short description
- Dịch vụ
- Dự án
- Giới thiệu
- Liên hệ
- GitHub
- LinkedIn
- Email
- Zalo

Suggested copyright:

`© 2026 [Brand Name]. All rights reserved.`

---

### 14. Floating Zalo CTA

Desktop:

floating button bottom-right.

Text:

`Trao đổi qua Zalo`

Mobile:

compact floating action or sticky CTA.

Use:

`NEXT_PUBLIC_ZALO_URL`

Fallback placeholder:

`https://zalo.me/YOUR_PHONE`

Do not hard-code a real phone number directly into reusable UI.

---

## Technical Requirements

Use:

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui where useful
- Lucide React
- Framer Motion only for light motion

Recommended structure:

```text
src/
  app/
  components/
    layout/
    home/
    shared/
  data/
    projects.ts
    services.ts
  lib/

public/
  images/
    projects/
```

---

## Responsive Targets

Must work intentionally at:

- 375px
- 430px
- 768px
- 1024px
- 1440px

No horizontal overflow.

---

## Accessibility

Required baseline:

- semantic HTML
- visible focus states
- keyboard-friendly navigation
- accessible accordion
- alt text
- sufficient contrast

---

## Acceptance Criteria

The Home page must:

- follow `DESIGN_SYSTEM.md`
- not resemble an admin dashboard
- clearly communicate available services
- prominently showcase projects
- make Zalo contact easy
- work well on mobile and desktop
- contain no fake testimonials
- contain no fake metrics
- contain no Lorem Ipsum
- pass required validation

---

## Out of Scope

Do not implement full:

- Services pages
- Projects case studies
- About page
- Contact page
- backend
- CMS
- authentication
- database

Minimal route placeholders are acceptable.

---

## Exit Condition

Phase 1 is complete only after owner review and explicit approval to continue to Phase 2.
