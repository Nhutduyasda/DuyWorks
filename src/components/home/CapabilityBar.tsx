import React from "react";
import { capabilityTags } from "@/data/home";

export function CapabilityBar() {
  return (
    <section
      aria-label="Khả năng công nghệ"
      className="py-6 sm:py-8 bg-white border-b border-[#EAECF0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#667085] whitespace-nowrap">
            Năng lực cốt lõi:
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 sm:gap-2.5">
            {capabilityTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-[#F9FAFB] text-[#344054] border border-[#EAECF0]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
