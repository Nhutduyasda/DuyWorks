import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    slug: "zhonglish",
    name: "Zhonglish",
    category: "Learning Platform",
    shortDescription:
      "Nền tảng học tiếng Trung trực tuyến với lộ trình học bài bản, theo dõi tiến độ và cơ chế tích điểm khích lệ học tập.",
    overview:
      "Nền tảng học tiếng Trung với authentication, learning progress, XP system và backend được xây dựng trên Supabase.",
    problem:
      "Người học tiếng Trung thường gặp khó khăn trong việc duy trì động lực, thiếu một công cụ trực quan để theo dõi tiến độ tích lũy từ vựng và xem lại bài học có hệ thống.",
    solution:
      "Phát triển ứng dụng web với trải nghiệm mượt mà, tích hợp tài khoản cá nhân hóa, hệ thống thẻ từ vựng tương tác và cơ chế cộng điểm XP khi hoàn thành bài học mỗi ngày.",
    keyFeatures: [
      "Hệ thống xác thực người dùng và lưu trữ tiến độ trên Supabase",
      "Thẻ từ vựng tương tác theo chủ đề với phát âm và ví dụ",
      "Cơ chế tính điểm kinh nghiệm (XP) và chuỗi học tập (Streak)",
      "Giao diện responsive trực quan, mượt mà trên cả desktop và mobile",
    ],
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Vercel"],
    image: "/images/projects/zhonglish.svg",
    featured: true,
    qualitativeOutcome:
      "Giúp người học có lộ trình theo dõi rõ ràng, hỗ trợ học đều đặn và tiếp thu kiến thức khoa học hơn.",
  },
  {
    slug: "collaborative-excel",
    name: "Collaborative Excel",
    category: "Business Productivity",
    shortDescription:
      "Công cụ cộng tác bảng tính và xử lý dữ liệu nghiệp vụ theo thời gian thực cho đội ngũ vận hành.",
    overview:
      "Ứng dụng bảng tính cộng tác trực tuyến giúp nhiều người dùng cùng theo dõi, chỉnh sửa dữ liệu đồng thời mà không bị ghi đè.",
    problem:
      "Các bảng tính Excel gửi qua lại qua chat thường xuyên bị xung đột phiên bản, mất mát dữ liệu và không thể kiểm soát được ai đã thay đổi nội dung gì.",
    solution:
      "Xây dựng ứng dụng web bảng tính cộng tác thời gian thực với cơ chế phân quyền bảo vệ ô tính và lưu trữ lịch sử thao tác rõ ràng.",
    keyFeatures: [
      "Đồng bộ hóa dữ liệu ô tính theo thời gian thực qua WebSockets",
      "Khóa dòng/cột theo vai trò để tránh chỉnh sửa ngoài ý muốn",
      "Lịch sử chỉnh sửa chi tiết hỗ trợ đối soát dữ liệu nghiệp vụ",
      "Bộ lọc và tính toán công thức cơ bản chạy trực tiếp trên client",
    ],
    technologies: ["React", "TypeScript", "Node.js", "WebSockets", "Tailwind CSS"],
    image: "/images/projects/collaborative-excel.svg",
    featured: true,
    qualitativeOutcome:
      "Giúp đội ngũ nghiệp vụ cộng tác tập trung, loại bỏ hoàn toàn việc gửi file Excel đính kèm qua lại.",
  },
  {
    slug: "attendance-management-system",
    name: "Attendance Management System",
    category: "Internal Enterprise Software",
    shortDescription:
      "Hệ thống quản lý chấm công và chuẩn hóa quy trình xử lý dữ liệu nhân sự nội bộ cho doanh nghiệp.",
    overview:
      "Phần mềm nội bộ giúp số hóa toàn bộ khâu ghi nhận giờ công, duyệt đơn nghỉ phép và tổng hợp bảng lương tự động.",
    problem:
      "Bộ phận nhân sự mất nhiều ngày công mỗi cuối tháng để đối soát máy chấm công, đơn xin nghỉ phép giấy và các bảng tính thủ công rời rạc.",
    solution:
      "Thiết kế phần mềm quản lý chấm công tập trung, kết nối dữ liệu máy quẹt thẻ, cung cấp cổng tự phục vụ cho nhân viên và bảng tính công tự động cho nhân sự.",
    keyFeatures: [
      "Thu thập và xử lý dữ liệu giờ công tự động hàng ngày",
      "Luồng duyệt đơn xin nghỉ phép, đi muộn về sớm trực tuyến",
      "Bảng tổng hợp công ca tự động tính toán theo quy định công ty",
      "Phân quyền phân cấp bảo mật giữa nhân viên, trưởng nhóm và ban giám đốc",
    ],
    technologies: ["ASP.NET Core", "SQL Server", "Next.js", "Tailwind CSS", "Docker"],
    image: "/images/projects/attendance-system.svg",
    featured: true,
    qualitativeOutcome:
      "Giúp chuẩn hóa quy trình dữ liệu nội bộ, giảm thiểu tối đa sai sót và rút ngắn đáng kể thời gian chốt công hàng tháng.",
  },
  {
    slug: "developer-portfolio",
    name: "Developer Portfolio & Service Site",
    category: "Portfolio Website",
    shortDescription:
      "Website dịch vụ công nghệ cá nhân giới thiệu năng lực, giải pháp và các sản phẩm đã phát triển.",
    overview:
      "Trang giới thiệu năng lực phát triển phần mềm được thiết kế với ngôn ngữ tối giản, hiện đại và tập trung vào trải nghiệm người dùng.",
    problem:
      "Khách hàng cần một nơi uy tín để hiểu rõ các dịch vụ phát triển phần mềm mà không bị choáng ngợp bởi thuật ngữ kỹ thuật hay giao diện phức tạp.",
    solution:
      "Xây dựng website theo định hướng digital product studio, cấu trúc thông tin rõ ràng, minh bạch quy trình và hỗ trợ kết nối nhanh qua Zalo.",
    keyFeatures: [
      "Giao diện hiện đại lấy cảm hứng từ TailAdmin & BizSpace",
      "Cấu trúc trang rõ ràng, tốc độ tải tức thì",
      "Tối ưu hoàn chỉnh cho di động và máy tính bảng",
      "Nút liên hệ Zalo nổi bật trên toàn hệ thống",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide React", "Vercel"],
    image: "/images/projects/developer-portfolio.svg",
    featured: false,
    qualitativeOutcome:
      "Truyền tải hình ảnh chuyên nghiệp, đáng tin cậy và minh bạch về năng lực công nghệ đến khách hàng.",
  },
];
