import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Code, MessageCircle, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/Icons";

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-[#EAECF0] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 font-bold text-lg text-[#101828]"
            >
              <span className="w-8 h-8 rounded-lg bg-[#465FFF] flex items-center justify-center text-white">
                <Code className="w-4 h-4" />
              </span>
              <span>{siteConfig.name}</span>
            </Link>
            <p className="text-sm text-[#475467] leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.links.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-[#EAECF0] flex items-center justify-center text-[#475467] hover:text-[#465FFF] hover:border-[#465FFF] transition-colors"
                aria-label="Liên hệ qua Zalo"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${siteConfig.links.email}`}
                className="w-9 h-9 rounded-lg border border-[#EAECF0] flex items-center justify-center text-[#475467] hover:text-[#465FFF] hover:border-[#465FFF] transition-colors"
                aria-label="Gửi email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-[#EAECF0] flex items-center justify-center text-[#475467] hover:text-[#465FFF] hover:border-[#465FFF] transition-colors"
                aria-label="Xem GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-[#EAECF0] flex items-center justify-center text-[#475467] hover:text-[#465FFF] hover:border-[#465FFF] transition-colors"
                aria-label="Xem LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#101828] mb-4">
              Điều hướng
            </h3>
            <ul className="space-y-2.5">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#667085] hover:text-[#101828] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact summary */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#101828] mb-4">
              Liên hệ trực tiếp
            </h3>
            <div className="space-y-2.5 text-sm text-[#667085]">
              <p>Hỗ trợ tư vấn giải pháp kỹ thuật, triển khai website &amp; phần mềm.</p>
              <p className="font-medium text-[#101828]">Zalo: Trao đổi nhanh</p>
              <p>Email: {siteConfig.links.email}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#EAECF0] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#667085]">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
          <p>Thiết kế tinh gọn • Công nghệ thực tế • Hỗ trợ tận tâm</p>
        </div>
      </div>
    </footer>
  );
}
