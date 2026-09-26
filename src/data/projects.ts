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
      "Phát triển ứng dụng web với trải nghiệm mượt mà, tích hợp tài khoản cá nhân hóa, hệ thống thẻ từ vựng tương tác và cơ chế cộng điểm XP khi hoàn thành bài học.",
    keyFeatures: [
      "Hệ thống xác thực người dùng và lưu trữ tiến độ trên Supabase",
      "Thẻ từ vựng tương tác theo chủ đề theo nội dung bài học",
      "Cơ chế tính điểm kinh nghiệm (XP) theo tiến độ bài học",
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
      "Ứng dụng bảng tính cộng tác trực tuyến giúp nhiều người dùng cùng theo dõi, chỉnh sửa dữ liệu đồng thời mà với trạng thái chỉnh sửa được đồng bộ.",
    problem:
      "Các bảng tính Excel gửi qua lại qua chat thường xuyên bị xung đột phiên bản, khó theo dõi lịch sử chỉnh sửa.",
    solution:
      "Xây dựng ứng dụng web bảng tính cộng tác thời gian thực với cơ chế phân quyền bảo vệ ô tính và lưu trữ lịch sử thao tác rõ ràng.",
    keyFeatures: [
      "Đồng bộ hóa dữ liệu ô tính theo thời gian thực qua SignalR",
      "Phân quyền truy cập tài liệu theo người dùng",
      "Lịch sử chỉnh sửa chi tiết hỗ trợ đối soát dữ liệu nghiệp vụ",
      "Các thao tác bảng tính cơ bản trong giao diện web",
    ],
    technologies: ["React", "TypeScript", "ASP.NET Core", "SignalR", "Tailwind CSS"],
    image: "/images/projects/collaborative-excel.svg",
    featured: true,
    qualitativeOutcome:
      "Giúp đội ngũ nghiệp vụ cộng tác tập trung, giảm nhu cầu trao đổi nhiều phiên bản file Excel.",
  },
  {
    slug: "attendance-management-system",
    name: "Attendance Management System",
    category: "Internal Enterprise Software",
    shortDescription:
      "Hệ thống quản lý chấm công và chuẩn hóa quy trình xử lý dữ liệu nhân sự nội bộ cho doanh nghiệp.",
    overview:
      "Phần mềm nội bộ giúp hỗ trợ ghi nhận giờ công, luồng duyệt và tổng hợp dữ liệu chấm công.",
    problem:
      "Bộ phận nhân sự cần thời gian mỗi kỳ để đối soát máy chấm công, đơn xin nghỉ phép giấy và các bảng tính thủ công rời rạc.",
    solution:
      "Thiết kế phần mềm quản lý chấm công tập trung, hỗ trợ nhập và xử lý dữ liệu chấm công, cùng luồng kiểm tra theo vai trò nhân viên, trưởng nhóm và nhân sự.",
    keyFeatures: [
      "Nhập và xử lý dữ liệu giờ công",
      "Luồng kiểm tra và duyệt dữ liệu chấm công",
      "Bảng tổng hợp dữ liệu công phục vụ đối soát",
      "Phân quyền theo vai trò nhân viên, trưởng nhóm và nhân sự",
    ],
    technologies: ["ASP.NET Core", "React", "TypeScript", "SQL Server", "Docker"],
    image: "/images/projects/attendance-system.svg",
    featured: true,
    qualitativeOutcome:
      "Giúp chuẩn hóa quy trình dữ liệu nội bộ, hỗ trợ đối soát dữ liệu chấm công theo quy trình rõ ràng.",
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
      "Cấu trúc trang rõ ràng và điều hướng dễ hiểu",
      "Giao diện thích ứng với di động và máy tính bảng",
      "Nút liên hệ Zalo nổi bật trên toàn hệ thống",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide React", "Vercel"],
    image: "/images/projects/developer-portfolio.svg",
    featured: false,
    qualitativeOutcome:
      "Trình bày dịch vụ, dự án và kênh liên hệ trong một cấu trúc dễ theo dõi.",
  },
];
