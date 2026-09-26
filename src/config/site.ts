const optionalUrl = (value: string | undefined, host: string) => {
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && (url.hostname === host || url.hostname.endsWith(`.${host}`))
      ? url.toString()
      : null;
  } catch {
    return null;
  }
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000";
const validatedSiteUrl = (() => {
  try {
    const url = new URL(siteUrl);
    return ["http:", "https:"].includes(url.protocol) ? url.origin : "http://localhost:3000";
  } catch {
    return "http://localhost:3000";
  }
})();
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || null;

export const siteConfig = {
  name: "DuyWorks",
  tagline: "Website • Software • AI Solutions",
  title: "DuyWorks — Website, Software & AI Solutions",
  description:
    "Thiết kế website, web application, phần mềm quản lý và giải pháp AI/automation phù hợp cho cá nhân, cửa hàng và doanh nghiệp.",
  url: validatedSiteUrl,
  author: "Duy",
  links: {
    zalo: optionalUrl(process.env.NEXT_PUBLIC_ZALO_URL, "zalo.me"),
    github: optionalUrl(process.env.NEXT_PUBLIC_GITHUB_URL, "github.com"),
    linkedin: optionalUrl(process.env.NEXT_PUBLIC_LINKEDIN_URL, "linkedin.com"),
    email: contactEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail) ? contactEmail : null,
  },
  navItems: [
    { label: "Dịch vụ", href: "/services" },
    { label: "Dự án", href: "/projects" },
    { label: "Giới thiệu", href: "/about" },
    { label: "Liên hệ", href: "/contact" },
  ],
  trustChips: ["Website hiện đại", "Responsive", "Hỗ trợ sau bàn giao"],
};
