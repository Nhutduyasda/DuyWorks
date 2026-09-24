import React from "react";
import { workingPrinciplesData } from "@/data/home";
import { CheckCircle } from "lucide-react";

export function WorkingPrinciplesSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#F9FAFB] border-b border-[#EAECF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#465FFF] mb-2">
            Nguyên tắc hợp tác
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#101828]">
            Cách tôi làm việc
          </h2>
          <p className="mt-3 text-base text-[#475467] leading-relaxed">
            Tôi không sử dụng các nhận xét đánh giá giả mạo. Niềm tin được xây
            dựng từ sự minh bạch, cam kết trách nhiệm và chất lượng thực tế của
            sản phẩm.
          </p>
        </div>

        {/* 5 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workingPrinciplesData.map((item, index) => (
            <div
              key={item.title}
              className="p-6 sm:p-7 bg-white rounded-xl border border-[#EAECF0] hover:border-[#D0D5DD] shadow-2xs transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-[#ECFDF3] text-[#027A48] flex items-center justify-center font-bold text-xs">
                  0{index + 1}
                </span>
                <h3 className="text-base font-bold text-[#101828]">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-[#475467] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

          {/* Guarantee / Commitment card to balance the grid */}
          <div className="p-6 sm:p-7 bg-[#EEF2FF] rounded-xl border border-[#C7D7FE] flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2 text-[#465FFF] font-bold text-sm">
              <CheckCircle className="w-4 h-4" />
              <span>Cam kết minh bạch</span>
            </div>
            <p className="text-sm text-[#3538CD] leading-relaxed">
              Bạn luôn nắm quyền chủ động đối với ý tưởng, sản phẩm và tiến độ
              triển khai trong mọi giai đoạn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
