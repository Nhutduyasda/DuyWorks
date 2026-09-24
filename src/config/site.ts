export const siteConfig = {
  name: "DuyDev",
  tagline: "Website • Software • AI Solutions",
  title: "DuyDev — Website, Software & AI Solutions",
  description:
    "Thiết kế website, web application, phần mềm quản lý và giải pháp AI/automation phù hợp cho cá nhân, cửa hàng và doanh nghiệp.",
  url: "https://duydev.vn",
  author: "Duy",
  links: {
    zalo: process.env.NEXT_PUBLIC_ZALO_URL || "https://zalo.me/YOUR_PHONE",
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-profile",
    email: "contact@duydev.vn",
  },
  navItems: [
    { label: "Dịch vụ", href: "/services" },
    { label: "Dự án", href: "/projects" },
    { label: "Giới thiệu", href: "/about" },
    { label: "Liên hệ", href: "/contact" },
  ],
  trustChips: [
    "Website hiện đại",
    "Responsive",
    "Hỗ trợ sau bàn giao",
  ],
};
