import { siteConfig } from "@/config/site";
import { MessageCircle, Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/Icons";

export const metadata = {
  title: "Liên hệ",
  description:
    "Liên hệ trao đổi về dự án phát triển website, phần mềm và giải pháp AI qua Zalo hoặc Email.",
};

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-2xl text-left space-y-3">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#465FFF]">
            Kênh liên lạc
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101828]">
            Cùng trao đổi về ý tưởng của bạn
          </h1>
          <p className="text-base text-[#475467] leading-relaxed">
            Chọn kênh liên hệ được hiển thị bên dưới để trao đổi về yêu cầu của bạn.
          </p>
        </div>

        {!siteConfig.links.zalo && !siteConfig.links.email && (
          <p className="text-sm text-[#475467]">Thông tin liên hệ đang được cập nhật.</p>
        )}

        {/* Contact Methods Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Primary: Zalo */}
          {siteConfig.links.zalo && (
          <div className="p-6 sm:p-8 bg-white rounded-2xl border-2 border-[#465FFF] shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] flex items-center justify-center text-[#465FFF]">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#465FFF]">
                  Kênh chính • Phản hồi nhanh
                </span>
                <h2 className="text-xl font-bold text-[#101828] mt-1">
                  Nhắn tin qua Zalo
                </h2>
              </div>
              <p className="text-sm text-[#475467] leading-relaxed">
                Trao đổi nhanh gọn về yêu cầu, quy trình hoặc giải đáp thắc mắc
                kỹ thuật trực tiếp.
              </p>
            </div>

            <a
              href={siteConfig.links.zalo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-semibold text-white bg-[#465FFF] hover:bg-[#3648E0] rounded-xl shadow-xs transition-colors"
            >
              <span>Mở Zalo nhắn tin ngay</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          )}

          {/* Secondary: Email */}
          {siteConfig.links.email && (
          <div className="p-6 sm:p-8 bg-white rounded-2xl border border-[#EAECF0] hover:border-[#D0D5DD] shadow-2xs flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#F9FAFB] border border-[#EAECF0] flex items-center justify-center text-[#344054]">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#667085]">
                  Tài liệu &amp; Đề xuất
                </span>
                <h2 className="text-xl font-bold text-[#101828] mt-1">
                  Gửi thư điện tử (Email)
                </h2>
              </div>
              <p className="text-sm text-[#475467] leading-relaxed">
                Thích hợp nếu bạn đã có sẵn file đặc tả yêu cầu (SRS) hoặc tài
                liệu phân tích nghiệp vụ.
              </p>
            </div>

            <a
              href={`mailto:${siteConfig.links.email}`}
              className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-semibold text-[#344054] bg-[#F9FAFB] hover:bg-[#F2F4F7] border border-[#EAECF0] rounded-xl transition-colors"
            >
              <span>{siteConfig.links.email}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          )}
        </div>

        {/* Social / Code Channels */}
        {(siteConfig.links.github || siteConfig.links.linkedin) && (
        <div className="p-6 sm:p-8 bg-white rounded-xl border border-[#EAECF0]">
          <h2 className="text-base font-bold text-[#101828] mb-4">
            Kênh cộng đồng &amp; Hồ sơ mã nguồn
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {siteConfig.links.github && (
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-lg bg-[#F9FAFB] border border-[#EAECF0] hover:border-[#C7D7FE] transition-colors"
            >
              <div className="flex items-center gap-3">
                <GithubIcon className="w-5 h-5 text-[#344054]" />
                <span className="text-sm font-medium text-[#101828]">
                  GitHub Repository
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#667085]" />
            </a>
            )}

            {siteConfig.links.linkedin && (
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-lg bg-[#F9FAFB] border border-[#EAECF0] hover:border-[#C7D7FE] transition-colors"
            >
              <div className="flex items-center gap-3">
                <LinkedinIcon className="w-5 h-5 text-[#344054]" />
                <span className="text-sm font-medium text-[#101828]">
                  LinkedIn Profile
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#667085]" />
            </a>
            )}
          </div>
        </div>
        )}
      </div>
    </div>
  );
}
