import React from "react";
import { valuePropsData } from "@/data/home";
import { Target, MessageSquare, Code2, ShieldCheck } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Target: <Target className="w-5 h-5 text-[#465FFF]" />,
  MessageSquare: <MessageSquare className="w-5 h-5 text-[#465FFF]" />,
  Code2: <Code2 className="w-5 h-5 text-[#465FFF]" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#465FFF]" />,
};

export function WhyWorkWithMeSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#F9FAFB] border-b border-[#EAECF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#465FFF] mb-2">
            Giá trị thực tế
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#101828]">
            Không chỉ là giao diện đẹp
          </h2>
          <p className="mt-3 text-base text-[#475467] leading-relaxed">
            Một sản phẩm công nghệ tốt phải chạy ổn định, giải quyết được bài
            toán nghiệp vụ và dễ dàng nâng cấp khi cần.
          </p>
        </div>

        {/* 4 Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuePropsData.map((item) => (
            <div
              key={item.title}
              className="p-6 bg-white rounded-xl border border-[#EAECF0] hover:border-[#D0D5DD] shadow-2xs transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-[#EEF2FF] flex items-center justify-center mb-5">
                {iconMap[item.icon] || (
                  <Target className="w-5 h-5 text-[#465FFF]" />
                )}
              </div>
              <h3 className="text-base font-bold text-[#101828] mb-2.5">
                {item.title}
              </h3>
              <p className="text-sm text-[#475467] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
