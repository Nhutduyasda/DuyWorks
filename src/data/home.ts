import { ProcessStep, TechStackGroup, ValueProp } from "@/types";

export const valuePropsData: ValueProp[] = [
  {
    title: "Tập trung vào bài toán thực tế",
    description: "Ưu tiên quy trình và nhu cầu sử dụng thực tế.",
  },
  {
    title: "Giao tiếp rõ ràng",
    description: "Phạm vi, tiến độ và thay đổi được trao đổi minh bạch.",
  },
  {
    title: "Có thể phát triển tiếp",
    description: "Mã nguồn được tổ chức để bảo trì và mở rộng.",
  },
];

export const processStepsData: ProcessStep[] = [
  { step: "01", title: "Trao đổi yêu cầu" },
  { step: "02", title: "Đề xuất giải pháp" },
  { step: "03", title: "Phát triển & demo" },
  { step: "04", title: "Bàn giao & hỗ trợ" },
];

export const techStackGroupsData: TechStackGroup[] = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["ASP.NET Core", "Node.js"] },
  { category: "Data", items: ["SQL Server", "PostgreSQL", "Supabase"] },
  { category: "Tools", items: ["Vercel", "Docker", "GitHub"] },
];
