import React from "react";
import { siteConfig } from "@/config/site";
import { MessageCircle } from "lucide-react";

export function FloatingZaloCTA() {
  const zaloUrl =
    process.env.NEXT_PUBLIC_ZALO_URL || siteConfig.links.zalo;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center print:hidden">
      <a
        href={zaloUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Trao đổi công việc qua Zalo"
        className="group flex items-center gap-2.5 bg-[#465FFF] hover:bg-[#3648E0] text-white px-3.5 py-3 sm:px-4 sm:py-3 rounded-full sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#465FFF]"
      >
        <span className="relative flex h-5 w-5 items-center justify-center">
          <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
        </span>
        <span className="hidden sm:inline text-sm font-semibold tracking-wide">
          Trao đổi qua Zalo
        </span>
      </a>
    </div>
  );
}
