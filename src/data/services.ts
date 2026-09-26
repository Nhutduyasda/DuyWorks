import { Service } from "@/types";

export const servicesData: Service[] = [
  {
    slug: "website-landing-page",
    title: "Website & Landing Page",
    description:
      "Website doanh nghiệp, portfolio, giới thiệu sản phẩm và landing page marketing với bố cục rõ ràng, nền tảng SEO và giao diện phù hợp nhiều kích thước màn hình.",
    icon: "Layout",
    capabilities: [
      "Responsive đa thiết bị",
      "Landing page tập trung vào trải nghiệm người dùng và CTA",
      "Website doanh nghiệp & thương hiệu",
      "Chú ý hiệu năng và SEO cơ bản",
    ],
    deliverables: [
      "Giao diện hiện đại, sạch sẽ và nhất quán",
      "Mã nguồn có cấu trúc dễ bảo trì",
      "Thiết lập metadata và thẻ chia sẻ mạng xã hội",
      "Hướng dẫn quản trị và cập nhật nội dung",
    ],
    targetAudience:
      "Cá nhân, freelancer, cửa hàng hoặc doanh nghiệp vừa & nhỏ cần hiện diện chuyên nghiệp trên Internet.",
  },
  {
    slug: "web-application",
    title: "Web Application",
    description:
      "Ứng dụng web có cơ sở dữ liệu, xác thực người dùng (authentication) và quy trình nghiệp vụ (business workflow) tùy chỉnh theo bài toán thực tế.",
    icon: "Layers",
    capabilities: [
      "Xác thực & phân quyền bảo mật",
      "Đồng bộ dữ liệu theo nhu cầu nghiệp vụ",
      "Quy trình nghiệp vụ tùy biến",
      "Tích hợp API bên thứ ba",
    ],
    deliverables: [
      "Kiến trúc web an toàn, dễ bảo trì",
      "Hệ thống cơ sở dữ liệu được chuẩn hóa",
      "Giao diện người dùng trực quan, dễ thao tác",
      "Tài liệu hướng dẫn vận hành",
    ],
    targetAudience:
      "Các nhóm khởi nghiệp hoặc doanh nghiệp cần phần mềm web phục vụ khách hàng hoặc đối tác.",
  },
  {
    slug: "phan-mem-quan-ly",
    title: "Phần mềm quản lý",
    description:
      "Các hệ thống quản lý nội bộ phục vụ cửa hàng và doanh nghiệp, giúp số hóa quy trình chấm công, kho bãi, đơn hàng và xử lý công việc hằng ngày.",
    icon: "Briefcase",
    capabilities: [
      "Công cụ quản trị nội bộ (Internal Tools)",
      "Quản lý đơn hàng & tồn kho",
      "Báo cáo & thống kê nghiệp vụ",
      "Hỗ trợ kiểm tra và đối soát dữ liệu",
    ],
    deliverables: [
      "Phần mềm được xây dựng theo quy trình đã thống nhất",
      "Phân quyền nhân sự chi tiết",
      "Sao lưu và bảo mật dữ liệu nội bộ",
      "Bàn giao trọn gói mã nguồn",
    ],
    targetAudience:
      "Chủ cửa hàng, xưởng sản xuất, doanh nghiệp đang gặp khó khăn khi quản lý qua Excel rời rạc.",
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    description:
      "Ứng dụng OCR, tích hợp mô hình AI (OpenAI / Claude / Gemini), xử lý tự động tài liệu và tự động hóa các tác vụ lặp đi lặp lại trong doanh nghiệp.",
    icon: "Cpu",
    capabilities: [
      "Tích hợp AI / LLM vào sản phẩm",
      "OCR đọc trích xuất chứng từ & hóa đơn",
      "Tự động hóa luồng dữ liệu liên ứng dụng",
      "Bot hỗ trợ trả lời và phân loại thông tin",
    ],
    deliverables: [
      "Quy trình tự động hóa có bước kiểm tra kết quả",
      "Giảm thời gian thao tác nhập liệu thủ công",
      "Xem xét quyền truy cập và cách xử lý dữ liệu nhạy cảm",
      "Theo dõi và điều chỉnh mức sử dụng API",
    ],
    targetAudience:
      "Doanh nghiệp muốn tăng tốc quy trình xử lý văn bản, chứng từ hoặc muốn đưa tính năng thông minh vào sản phẩm.",
  },
];
