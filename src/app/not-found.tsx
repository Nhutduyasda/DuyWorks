import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-2xl border border-[#EAECF0] shadow-2xs">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#EEF2FF] text-[#465FFF] text-xl font-black">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-[#101828]">
            Không tìm thấy trang
          </h1>
          <p className="text-sm text-[#475467] leading-relaxed">
            Nội dung bạn đang tìm kiếm không tồn tại hoặc đã được thay đổi đường
            dẫn.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-semibold text-white bg-[#465FFF] hover:bg-[#3648E0] rounded-xl shadow-xs transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Quay lại trang chủ</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
