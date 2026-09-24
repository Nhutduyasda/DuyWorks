import { ProcessStep, TechStackGroup, ValueProp, WorkingPrinciple, FAQItem } from "@/types";

export const capabilityTags = [
  "Web Development",
  "Internal Software",
  "AI Integration",
  "Automation",
  "Next.js",
  "React",
  "ASP.NET Core",
  "Supabase",
  "SQL Server",
  "Vercel",
];

export const valuePropsData: ValueProp[] = [
  {
    title: "Tập trung vào sản phẩm có thể sử dụng",
    description:
      "Thiết kế dựa trên workflow và nhu cầu thực tế thay vì chỉ làm giao diện hình thức. Mỗi tính năng làm ra đều phải giải quyết được một vấn đề cụ thể.",
    icon: "Target",
  },
  {
    title: "Giao tiếp rõ ràng",
    description:
      "Yêu cầu, phạm vi công việc (scope) và mốc tiến độ bàn giao được thống nhất cụ thể ngay từ đầu, cập nhật thường xuyên trong suốt quá trình phát triển.",
    icon: "MessageSquare",
  },
  {
    title: "Dễ phát triển tiếp",
    description:
      "Mã nguồn được tổ chức theo cấu trúc module rõ ràng, component có tính tái sử dụng cao và chú thích đầy đủ để bạn hoặc lập trình viên khác dễ dàng mở rộng.",
    icon: "Code2",
  },
  {
    title: "Hỗ trợ sau bàn giao",
    description:
      "Đồng hành hỗ trợ vận hành, khắc phục lỗi phát sinh kịp thời và luôn sẵn sàng hỗ trợ nâng cấp khi nhu cầu kinh doanh của bạn thay đổi.",
    icon: "ShieldCheck",
  },
];

export const processStepsData: ProcessStep[] = [
  {
    step: "01",
    title: "Trao đổi yêu cầu",
    description:
      "Lắng nghe bài toán của bạn, tìm hiểu mục tiêu thực tế và xác định cụ thể những tính năng thực sự cần thiết.",
  },
  {
    step: "02",
    title: "Phân tích & đề xuất giải pháp",
    description:
      "Lựa chọn công nghệ tối ưu chi phí, phác thảo kiến trúc hệ thống và đưa ra kế hoạch triển khai minh bạch.",
  },
  {
    step: "03",
    title: "Thiết kế giao diện",
    description:
      "Xây dựng layout trực quan, hiện đại, tối ưu trải nghiệm người dùng trên cả điện thoại và máy tính.",
  },
  {
    step: "04",
    title: "Phát triển sản phẩm",
    description:
      "Viết mã nguồn chuẩn chỉnh, tích hợp cơ sở dữ liệu và các module chức năng theo từng giai đoạn.",
  },
  {
    step: "05",
    title: "Kiểm thử & bàn giao",
    description:
      "Kiểm tra tính ổn định, tốc độ và bảo mật; hướng dẫn sử dụng chi tiết và chuyển giao toàn bộ mã nguồn.",
  },
  {
    step: "06",
    title: "Hỗ trợ sau triển khai",
    description:
      "Bảo hành kỹ thuật, đồng hành sửa lỗi phát sinh và luôn sẵn sàng hỗ trợ bạn khi cần thêm chức năng mới.",
  },
];

export const techStackGroupsData: TechStackGroup[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["ASP.NET Core", "Node.js"],
  },
  {
    category: "Database",
    items: ["SQL Server", "PostgreSQL", "Supabase"],
  },
  {
    category: "Deployment & Tools",
    items: ["Vercel", "Docker", "GitHub"],
  },
];

export const workingPrinciplesData: WorkingPrinciple[] = [
  {
    title: "Trao đổi yêu cầu rõ ràng",
    description:
      "Mọi chức năng đều được làm rõ mục đích sử dụng trước khi triển khai, tránh hiểu nhầm gây lãng phí thời gian và ngân sách.",
  },
  {
    title: "Demo theo từng giai đoạn",
    description:
      "Bạn luôn được xem sản phẩm chạy thực tế theo từng mốc công việc, không phải chờ đến phút cuối mới biết hình thù phần mềm.",
  },
  {
    title: "Không phát triển ngoài scope khi chưa thống nhất",
    description:
      "Mọi thay đổi phát sinh ngoài thỏa thuận ban đầu đều được trao đổi trước về tác động thời gian và chi phí.",
  },
  {
    title: "Bàn giao đầy đủ mã nguồn",
    description:
      "Toàn bộ source code, tài liệu hướng dẫn và dữ liệu cấu hình đều thuộc quyền sở hữu của bạn sau khi hoàn thành dự án.",
  },
  {
    title: "Có thể tiếp tục hỗ trợ và phát triển",
    description:
      "Mối quan hệ làm việc không kết thúc sau khi bàn giao; tôi luôn sẵn sàng hỗ trợ bảo trì hoặc nâng cấp phiên bản tiếp theo.",
  },
];

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "Bạn có nhận website nhỏ không?",
    answer:
      "Có. Tôi nhận phát triển từ các trang giới thiệu đơn giản, landing page bán hàng cho đến các hệ thống quản lý chuyên sâu. Bất kể quy mô, mỗi sản phẩm đều được tối ưu cẩn thận về tốc độ và tính thẩm mỹ.",
  },
  {
    id: "faq-2",
    question: "Có thể chỉnh sửa website có sẵn không?",
    answer:
      "Có thể. Tôi sẽ cùng bạn kiểm tra mã nguồn và kiến trúc hiện tại để đánh giá xem việc viết tiếp hay nâng cấp từng phần sẽ hiệu quả hơn cho bạn về chi phí và thời gian.",
  },
  {
    id: "faq-3",
    question: "Tôi mới chỉ có ý tưởng, chưa có thiết kế thì sao?",
    answer:
      "Rất nhiều dự án bắt đầu từ một ý tưởng trên giấy. Tôi sẽ lắng nghe quy trình của bạn, tư vấn bố cục trải nghiệm và trực tiếp thiết kế giao diện phù hợp với nhu cầu sử dụng thực tế.",
  },
  {
    id: "faq-4",
    question: "Sau khi bàn giao có hỗ trợ không?",
    answer:
      "Tất cả sản phẩm đều có chính sách hỗ trợ kỹ thuật sau bàn giao để xử lý các vấn đề phát sinh, giải đáp thắc mắc và đảm bảo hệ thống vận hành thông suốt.",
  },
  {
    id: "faq-5",
    question: "Làm sao để trao đổi yêu cầu?",
    answer:
      "Cách thuận tiện nhất là nhắn tin trực tiếp qua Zalo. Bạn chỉ cần gửi mô tả ngắn về điều bạn muốn làm, tôi sẽ phản hồi nhanh chóng và cùng bạn thảo luận giải pháp phù hợp.",
  },
];
