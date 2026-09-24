import React from "react";
import { techStackGroupsData } from "@/data/home";
import { Monitor, Server, Database, Cloud } from "lucide-react";

const groupIcons: Record<string, React.ReactNode> = {
  Frontend: <Monitor className="w-5 h-5 text-[#465FFF]" />,
  Backend: <Server className="w-5 h-5 text-[#465FFF]" />,
  Database: <Database className="w-5 h-5 text-[#465FFF]" />,
  "Deployment & Tools": <Cloud className="w-5 h-5 text-[#465FFF]" />,
};

export function TechStackSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#F9FAFB] border-b border-[#EAECF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#465FFF] mb-2">
            Công nghệ cốt lõi
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#101828]">
            Công nghệ tôi thường sử dụng
          </h2>
          <p className="mt-3 text-base text-[#475467] leading-relaxed">
            Lựa chọn công nghệ hiện đại, có cộng đồng lớn, ổn định cao và sẵn sàng
            mở rộng theo quy mô người dùng.
          </p>
        </div>

        {/* 4 Groups Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStackGroupsData.map((group) => (
            <div
              key={group.category}
              className="p-6 bg-white rounded-xl border border-[#EAECF0] hover:border-[#D0D5DD] shadow-2xs transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-[#EEF2FF] flex items-center justify-center mb-4">
                {groupIcons[group.category] || (
                  <Monitor className="w-5 h-5 text-[#465FFF]" />
                )}
              </div>

              <h3 className="text-base font-bold text-[#101828] mb-4">
                {group.category}
              </h3>

              <div className="space-y-2">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-[#344054] py-1 px-2.5 rounded-md bg-[#F9FAFB] border border-[#EAECF0]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#465FFF]" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
