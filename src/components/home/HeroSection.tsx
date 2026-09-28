import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ZaloContactLink } from "@/components/shared/ZaloContactLink";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="bg-[#F9FAFB] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:gap-12 lg:px-8">
        <div>
          <p className="mb-5 text-sm font-semibold tracking-wide text-[#465FFF]">
            {siteConfig.tagline}
          </p>
          <h1 className="max-w-2xl text-4xl font-bold leading-[1.16] tracking-tight text-[#101828] sm:text-5xl lg:text-[3.25rem]">
            Biến ý tưởng của bạn thành sản phẩm hoạt động thực tế.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#475467] sm:text-lg">
            Thiết kế website, phần mềm và giải pháp AI phù hợp với nhu cầu sử dụng thực tế.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/projects" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#465FFF] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#3648E0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#465FFF]">
              Xem dự án <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <ZaloContactLink className="inline-flex items-center justify-center rounded-xl border border-[#D0D5DD] bg-white px-6 py-3.5 text-sm font-semibold text-[#344054] transition-colors hover:bg-[#F2F4F7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#465FFF]">
              Trao đổi qua Zalo
            </ZaloContactLink>
          </div>
          <p className="mt-7 text-sm text-[#667085]">Website · Web App · Internal Software · AI Automation</p>
        </div>
        <Link href="/projects/zhonglish" aria-label="Xem dự án Zhonglish" className="group block overflow-hidden rounded-xl bg-white shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#465FFF]">
          <Image src="/images/projects/zhonglish.svg" alt="Hình minh họa giao diện ứng dụng học tiếng Trung Zhonglish" width={800} height={500} priority className="h-auto w-full transition-transform duration-200 group-hover:scale-[1.01]" />
        </Link>
      </div>
    </section>
  );
}
