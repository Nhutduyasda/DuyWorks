import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export function FeaturedCaseStudySection() {
  const highlights = [
    "Xác thực người dùng & phân quyền bảo mật qua Supabase Auth",
    "Bài học theo chủ đề và theo dõi tiến độ",
    "Hệ thống tính điểm kinh nghiệm (XP) khi hoàn thành bài học",
    "Triển khai ứng dụng web với Next.js và Supabase",
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#EAECF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 lg:p-12 bg-[#F9FAFB] rounded-2xl border border-[#EAECF0]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EEF2FF] text-[#465FFF] text-xs font-semibold">
                Featured Case Study
              </div>

              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#667085]">
                  Dự án: Zhonglish — Learning Platform
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#101828]">
                  From idea to production.
                </h2>
              </div>

              <p className="text-base text-[#475467] leading-relaxed">
                Nền tảng học tiếng Trung với authentication, learning progress,
                XP system và backend được xây dựng trên Supabase. Sản phẩm được
                thiết kế hướng đến trải nghiệm học tập tập trung, giúp người dùng
                duy trì thói quen học mỗi ngày.
              </p>

              {/* Highlights List */}
              <ul className="space-y-2.5 pt-2">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#344054]">
                    <span className="w-5 h-5 rounded-full bg-[#ECFDF3] text-[#027A48] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  href="/projects/zhonglish"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#465FFF] hover:bg-[#3648E0] rounded-xl shadow-xs transition-colors"
                >
                  <span>Xem Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Visual Column */}
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-xl bg-white border border-[#EAECF0] shadow-sm">
                <Image
                  src="/images/projects/zhonglish.svg"
                  alt="Case study Zhonglish - Nền tảng học tiếng Trung trực tuyến"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
