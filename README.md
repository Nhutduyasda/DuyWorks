# DuyWorks

DuyWorks là website giới thiệu dịch vụ phát triển website, ứng dụng web, phần mềm quản lý và AI/automation của một lập trình viên độc lập. Trang trình bày năng lực, dự án và kênh liên hệ cho khách hàng tiềm năng. Nội dung dự án cần được đối chiếu với sản phẩm thực trước khi công bố.

## Công nghệ

Next.js App Router, React, TypeScript, Tailwind CSS và Lucide React. Mục tiêu triển khai: Vercel. Không có backend liên hệ hay cơ sở dữ liệu trong website này.

## Cấu trúc

- `src/app/`: các route công khai và metadata.
- `src/components/`: layout, section Home và UI dùng chung.
- `src/config/site.ts`: brand, URL và kênh liên hệ.
- `src/data/`: nội dung dịch vụ, dự án và Home.
- `public/images/projects/`: hình minh họa dự án.
- `docs/agent/` và `docs/roadmap/`: workflow, quy tắc, checklist và roadmap.

## Chạy cục bộ

Cần Node.js 20 và npm. Sao chép `.env.example` thành `.env.local`, sau đó:

```bash
npm ci
npm run dev
```

Mở `http://localhost:3000`.

## Biến môi trường

| Biến | Công dụng |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Origin dùng cho metadata; cục bộ mặc định `http://localhost:3000`. |
| `NEXT_PUBLIC_ZALO_URL` | URL Zalo hợp lệ; nếu thiếu, CTA dẫn đến `/contact` hoặc ẩn trên trang liên hệ. |
| `NEXT_PUBLIC_GITHUB_URL` | Hồ sơ GitHub; link ẩn nếu thiếu. |
| `NEXT_PUBLIC_LINKEDIN_URL` | Hồ sơ LinkedIn; link ẩn nếu thiếu. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Email liên hệ; link ẩn nếu thiếu. |

Các biến `NEXT_PUBLIC_` được đưa vào bản build phía client: chỉ điền thông tin công khai, không đặt secret. Đặt URL và kênh liên hệ thật trong cấu hình môi trường Vercel trước khi build production.

## Script

- `npm run dev`: chạy cục bộ.
- `npm run lint`: ESLint.
- `npm run typecheck`: TypeScript.
- `npm run build`: build production.
- `npm run start`: chạy bản đã build.

## Agent workflow và roadmap

Đọc `AGENTS.md` và các tài liệu bắt buộc theo đúng thứ tự được chỉ định trước khi sửa code. Phạm vi hiện tại nằm trong `docs/roadmap/CURRENT_PHASE.md`; các phase tiếp theo trong `docs/roadmap/ROADMAP.md`. Chạy checklist `docs/agent/QA_CHECKLIST.md` trước khi báo hoàn thành.

## Triển khai

Chưa có production domain được xác nhận. Khi chuẩn bị triển khai trên Vercel, cấu hình `NEXT_PUBLIC_SITE_URL` bằng origin thực tế và kiểm tra lại tất cả kênh liên hệ, nội dung dự án, metadata và CI. Workflow CI chỉ kiểm tra chất lượng code, không triển khai website.
