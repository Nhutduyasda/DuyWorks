import { ZaloContactLink } from "@/components/shared/ZaloContactLink";
import Link from "next/link";

export function FinalCTASection() {
  return (
    <section className="bg-[#465FFF] py-16 text-white sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Bạn đang có một ý tưởng cần biến thành sản phẩm?</h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">Hãy chia sẻ yêu cầu hoặc vấn đề bạn đang gặp để cùng tìm hướng triển khai phù hợp.</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <ZaloContactLink className="inline-flex justify-center rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-[#101828] transition-colors hover:bg-[#F9FAFB] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Trao đổi qua Zalo</ZaloContactLink>
            <Link href="/projects" className="inline-flex justify-center px-4 py-3 text-sm font-semibold text-white underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Xem các dự án</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
