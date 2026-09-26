import { ZaloContactLink } from "@/components/shared/ZaloContactLink";
import React from "react";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { Layout, Layers, Briefcase, Cpu, ArrowRight, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Dịch vụ phát triển phần mềm",
  description:
    "Danh sách các giải pháp phát triển website, web application, phần mềm quản lý và AI automation.",
};

const iconMap: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-6 h-6 text-[#465FFF]" />,
  Layers: <Layers className="w-6 h-6 text-[#465FFF]" />,
  Briefcase: <Briefcase className="w-6 h-6 text-[#465FFF]" />,
  Cpu: <Cpu className="w-6 h-6 text-[#465FFF]" />,
};

export default function ServicesPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl text-left mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#465FFF] mb-2">
            Giải pháp công nghệ
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101828]">
            Dịch vụ &amp; Giải pháp
          </h1>
          <p className="mt-3 text-base text-[#475467] leading-relaxed">
            Các gói dịch vụ được thiết kế linh hoạt, tập trung vào tính ứng dụng
            và hiệu quả thực tế cho công việc của bạn.
          </p>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {servicesData.map((service) => (
            <div
              key={service.slug}
              className="p-6 sm:p-8 bg-white rounded-xl border border-[#EAECF0] hover:border-[#C7D7FE] shadow-2xs transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] flex items-center justify-center mb-6">
                  {iconMap[service.icon] || (
                    <Layout className="w-6 h-6 text-[#465FFF]" />
                  )}
                </div>

                <h2 className="text-xl font-bold text-[#101828] mb-3">
                  {service.title}
                </h2>

                <p className="text-sm text-[#475467] leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#F9FAFB] text-[#344054] border border-[#EAECF0]"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#F2F4F7] flex items-center justify-between">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#465FFF] hover:text-[#3648E0]"
                >
                  <span>Xem chi tiết dịch vụ</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <ZaloContactLink
                  className="text-xs font-medium text-[#667085] hover:text-[#101828]"
                >
                  Liên hệ trao đổi
                </ZaloContactLink>
              </div>
            </div>
          ))}
        </div>

        {/* Notice for Phase 1 */}
        <div className="mt-16 p-6 rounded-xl bg-white border border-[#EAECF0] text-center max-w-xl mx-auto space-y-4">
          <p className="text-sm text-[#475467]">
            Bạn cần một giải pháp tùy biến theo quy trình riêng?
          </p>
          <ZaloContactLink
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#465FFF] hover:bg-[#3648E0] rounded-xl shadow-xs transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Trao đổi yêu cầu qua Zalo</span>
          </ZaloContactLink>
        </div>
      </div>
    </div>
  );
}
