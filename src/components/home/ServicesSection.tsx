import React from "react";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { Layout, Layers, Briefcase, Cpu, ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-6 h-6 text-[#465FFF]" />,
  Layers: <Layers className="w-6 h-6 text-[#465FFF]" />,
  Briefcase: <Briefcase className="w-6 h-6 text-[#465FFF]" />,
  Cpu: <Cpu className="w-6 h-6 text-[#465FFF]" />,
};

export function ServicesSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#F9FAFB] border-b border-[#EAECF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#465FFF] mb-2">
            Dịch vụ &amp; Giải pháp
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#101828]">
            Giải pháp tôi có thể hỗ trợ
          </h2>
          <p className="mt-3 text-base text-[#475467] leading-relaxed">
            Từ website giới thiệu đến hệ thống quản lý nội bộ, mỗi sản phẩm được
            xây dựng dựa trên nhu cầu sử dụng thực tế.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {servicesData.map((service) => (
            <div
              key={service.slug}
              className="group flex flex-col justify-between p-6 sm:p-8 bg-white rounded-xl border border-[#EAECF0] hover:border-[#C7D7FE] shadow-2xs hover:shadow-xs transition-all duration-200"
            >
              <div>
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200">
                  {iconMap[service.icon] || (
                    <Layout className="w-6 h-6 text-[#465FFF]" />
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#101828] mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#475467] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Capability Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.capabilities.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#F9FAFB] text-[#344054] border border-[#EAECF0]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-[#F2F4F7]">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#465FFF] group-hover:text-[#3648E0] transition-colors"
                >
                  <span>Tìm hiểu thêm</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
