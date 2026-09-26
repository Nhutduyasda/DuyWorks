import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 border-b border-[#EAECF0] bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#EEF2FF] border border-[#C7D7FE] text-[#465FFF] text-xs sm:text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#465FFF]" />
              <span>{siteConfig.tagline}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101828] leading-[1.2]">
              Biến ý tưởng của bạn thành sản phẩm hoạt động thực tế.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#475467] leading-relaxed max-w-xl">
              {siteConfig.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#465FFF] hover:bg-[#3648E0] rounded-xl shadow-xs transition-colors"
              >
                <span>Xem dự án đã thực hiện</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={siteConfig.links.zalo || "/contact"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#344054] bg-white hover:bg-[#F9FAFB] border border-[#D0D5DD] rounded-xl shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#465FFF]" />
                <span>Trao đổi qua Zalo</span>
              </a>
            </div>

            {/* 3 Trust Chips */}
            <div className="pt-4 border-t border-[#EAECF0] flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#475467]">
              {siteConfig.trustChips.map((chip) => (
                <div key={chip} className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#465FFF]" />
                  <span>{chip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: High-Fidelity Product Mockup Preview */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto rounded-2xl p-2 sm:p-3 bg-white border border-[#EAECF0] shadow-sm">
              <div className="overflow-hidden rounded-xl bg-[#F9FAFB] border border-[#EAECF0]">
                <Image
                  src="/images/projects/hero-preview.svg"
                  alt="Giao diện phần mềm và hệ thống số hóa quy trình nghiệp vụ"
                  width={1200}
                  height={780}
                  priority
                  className="w-full h-auto object-cover rounded-lg shadow-inner"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
