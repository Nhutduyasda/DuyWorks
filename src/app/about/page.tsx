import { ZaloContactLink } from "@/components/shared/ZaloContactLink";
import React from "react";
import Link from "next/link";
import { MessageCircle, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Giới thiệu",
  description:
    "Tìm hiểu về phong cách làm việc, kinh nghiệm phát triển phần mềm và nguyên tắc cộng tác của DuyWorks.",
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Hero */}
        <div className="space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EEF2FF] text-[#465FFF] text-xs font-semibold">
            Giới thiệu
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101828]">
            Đồng hành biến ý tưởng thành phần mềm thực tế
          </h1>
          <p className="text-base sm:text-lg text-[#475467] leading-relaxed">
            Tôi là một independent developer tập trung vào việc thiết kế website,
            xây dựng ứng dụng web và phần mềm quản lý nội bộ cho cá nhân, cửa
            hàng và doanh nghiệp nhỏ.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 bg-white rounded-xl border border-[#EAECF0] space-y-3">
            <h2 className="text-lg font-bold text-[#101828]">Sản phẩm tôi xây dựng</h2>
            <p className="text-sm text-[#475467] leading-relaxed">
              Tôi tập trung vào các website có cấu trúc rõ ràng, web app có nghiệp vụ phân
              quyền, công cụ số hóa quy trình và tích hợp các module AI hỗ trợ giảm thao tác thủ công lặp đi lặp lại.
            </p>
          </div>

          <div className="p-6 sm:p-8 bg-white rounded-xl border border-[#EAECF0] space-y-3">
            <h2 className="text-lg font-bold text-[#101828]">Triết lý phát triển</h2>
            <p className="text-sm text-[#475467] leading-relaxed">
              Ưu tiên tính hữu dụng và ổn định trên thực tế. Một phần mềm thành
              công không phải là phần mềm có nhiều hiệu ứng nhất, mà là phần mềm
              giúp người dùng hoàn thành công việc thuận tiện hơn.
            </p>
          </div>
        </div>

        {/* Working Style */}
        <div className="p-6 sm:p-8 bg-white rounded-xl border border-[#EAECF0] space-y-4">
          <h2 className="text-lg font-bold text-[#101828]">Nguyên tắc làm việc</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#344054]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#465FFF]" />
              <span>Giao tiếp rõ ràng, cập nhật liên tục</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#465FFF]" />
              <span>Thống nhất phạm vi bàn giao mã nguồn</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#465FFF]" />
              <span>Demo theo các mốc đã thống nhất</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#465FFF]" />
              <span>Trao đổi phương án hỗ trợ sau bàn giao</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-2xl bg-[#EEF2FF] border border-[#C7D7FE] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base font-bold text-[#101828]">
              Cùng thảo luận về dự án của bạn
            </h3>
            <p className="text-sm text-[#3538CD]">
              Sẵn sàng lắng nghe và tư vấn hướng giải quyết phù hợp.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <ZaloContactLink
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#465FFF] hover:bg-[#3648E0] rounded-xl shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Trao đổi qua Zalo</span>
            </ZaloContactLink>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-[#344054] bg-white border border-[#D0D5DD] rounded-xl hover:bg-[#F9FAFB] transition-colors"
            >
              <span>Xem dự án</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
