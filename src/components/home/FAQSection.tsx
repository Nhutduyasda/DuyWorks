"use client";

import { ZaloContactLink } from "@/components/shared/ZaloContactLink";

import React, { useState } from "react";
import { faqData } from "@/data/home";
import { ChevronDown, MessageCircle } from "lucide-react";

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#EAECF0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#465FFF] mb-2">
            Giải đáp thắc mắc
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#101828]">
            Câu hỏi thường gặp
          </h2>
          <p className="mt-3 text-base text-[#475467] leading-relaxed">
            Những điều khách hàng thường quan tâm trước khi bắt đầu dự án.
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div className="space-y-3.5">
          {faqData.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="rounded-xl border border-[#EAECF0] bg-[#F9FAFB] transition-colors overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 text-left text-base font-semibold text-[#101828] hover:text-[#465FFF] transition-colors focus-visible:outline-2 focus-visible:outline-[#465FFF]"
                >
                  <span className="pr-4">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#667085] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#465FFF]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-[#475467] leading-relaxed border-t border-[#EAECF0] bg-white">
                    <p>{item.answer}</p>
                    {item.id === "faq-5" && (
                      <div className="mt-4 pt-3 border-t border-[#F2F4F7]">
                        <ZaloContactLink
                          className="inline-flex items-center gap-2 text-sm font-semibold text-[#465FFF] hover:text-[#3648E0]"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Nhắn tin Zalo trực tiếp ngay bây giờ →</span>
                        </ZaloContactLink>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
