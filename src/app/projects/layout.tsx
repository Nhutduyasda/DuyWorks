import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dự án",
  description: "Các dự án website, ứng dụng web và phần mềm quản lý được giới thiệu trên DuyWorks.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
