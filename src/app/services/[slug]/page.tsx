import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import { siteConfig } from "@/config/site";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Không tìm thấy dịch vụ",
    };
  }

  return {
    title: `${service.title} | Dịch vụ`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Back link */}
        <div className="mb-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#667085] hover:text-[#465FFF] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại danh sách dịch vụ</span>
          </Link>
        </div>

        {/* Hero Card */}
        <div className="p-8 sm:p-10 bg-white rounded-2xl border border-[#EAECF0] shadow-2xs space-y-6">
          <div className="inline-flex items-center px-3 py-1 rounded-md bg-[#EEF2FF] text-[#465FFF] text-xs font-semibold">
            Dịch vụ chuyên sâu
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#101828]">
            {service.title}
          </h1>

          <p className="text-base sm:text-lg text-[#475467] leading-relaxed">
            {service.description}
          </p>

          {/* Capabilities */}
          <div className="pt-6 border-t border-[#EAECF0]">
            <h2 className="text-lg font-bold text-[#101828] mb-4">
              Năng lực triển khai
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.capabilities.map((cap) => (
                <div
                  key={cap}
                  className="flex items-start gap-2.5 text-sm text-[#344054]"
                >
                  <span className="w-5 h-5 rounded-full bg-[#ECFDF3] text-[#027A48] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          {service.deliverables && (
            <div className="pt-6 border-t border-[#EAECF0]">
              <h2 className="text-lg font-bold text-[#101828] mb-4">
                Sản phẩm bàn giao
              </h2>
              <ul className="space-y-2.5">
                {service.deliverables.map((del) => (
                  <li
                    key={del}
                    className="flex items-start gap-2.5 text-sm text-[#344054]"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#465FFF] shrink-0 mt-2" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA Box */}
          <div className="pt-8 border-t border-[#EAECF0] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-[#101828]">
                Bạn đang quan tâm đến dịch vụ này?
              </p>
              <p className="text-xs text-[#667085]">
                Trao đổi yêu cầu cụ thể để nhận tư vấn kiến trúc kỹ thuật.
              </p>
            </div>
            <a
              href={siteConfig.links.zalo || "/contact"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#465FFF] hover:bg-[#3648E0] rounded-xl shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Trao đổi qua Zalo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
