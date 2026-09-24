import React from "react";
import { processStepsData } from "@/data/home";

export function ProcessSection() {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#EAECF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#465FFF] mb-2">
            Phương pháp triển khai
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#101828]">
            Quy trình làm việc
          </h2>
          <p className="mt-3 text-base text-[#475467] leading-relaxed">
            Từng bước minh bạch từ khâu tiếp nhận ý tưởng đến khi bàn giao và vận
            hành sản phẩm.
          </p>
        </div>

        {/* Process Steps: Structured Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {processStepsData.map((step) => (
            <div
              key={step.step}
              className="relative p-6 sm:p-7 bg-[#F9FAFB] rounded-xl border border-[#EAECF0] hover:border-[#D0D5DD] transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-black text-[#465FFF] tracking-tight">
                  {step.step}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#EAECF0]" />
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[#101828] mb-2">
                {step.title}
              </h3>

              <p className="text-sm text-[#475467] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
