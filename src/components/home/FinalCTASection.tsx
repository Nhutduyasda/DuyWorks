import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MessageCircle, ArrowRight } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-16 sm:py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-[#465FFF] p-8 sm:p-12 lg:p-16 text-center text-white shadow-sm">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.2]">
              Bạn đang có một ý tưởng cần biến thành sản phẩm?
            </h2>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
              Hãy gửi cho tôi yêu cầu hoặc mô tả vấn đề bạn đang gặp. Tôi sẽ cùng
              bạn xem hướng triển khai phù hợp, ước lượng khối lượng công việc và
              tư vấn kiến trúc tối ưu.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={siteConfig.links.zalo || "/contact"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-[#101828] bg-white hover:bg-[#F9FAFB] rounded-xl shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#465FFF]" />
                <span>Trao đổi qua Zalo</span>
              </a>

              <Link
                href="/projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl transition-colors"
              >
                <span>Xem các dự án</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
