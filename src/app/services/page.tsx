import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { projectsData } from "@/data/projects";
import { ZaloContactLink } from "@/components/shared/ZaloContactLink";
import { Layout, Layers, Briefcase, Cpu, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Dịch vụ phát triển website và phần mềm",
  description: "Tìm giải pháp phù hợp: website giới thiệu, ứng dụng web, phần mềm quản lý hoặc AI hỗ trợ xử lý công việc.",
};

const icons = { Layout, Layers, Briefcase, Cpu };
const relatedWork = projectsData.filter((project) => ["zhonglish", "attendance-management-system"].includes(project.slug));

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <section className="bg-[#F9FAFB] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-[#465FFF]">Dịch vụ</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#101828] sm:text-5xl">Giải pháp phù hợp với bài toán của bạn</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#475467] sm:text-lg">Từ website giới thiệu đến phần mềm quản lý và AI, tôi tập trung vào sản phẩm giải quyết nhu cầu sử dụng thực tế.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ZaloContactLink className="inline-flex justify-center rounded-xl bg-[#465FFF] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#3648E0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#465FFF]">Trao đổi qua Zalo</ZaloContactLink>
            <a href="#danh-sach-dich-vu" className="inline-flex justify-center rounded-xl px-6 py-3.5 text-sm font-semibold text-[#344054] hover:bg-[#EAECF0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#465FFF]">Xem các dịch vụ</a>
          </div>
        </div>
      </section>

      <section id="danh-sach-dich-vu" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-[#101828] sm:text-4xl">Tôi có thể hỗ trợ bạn ở đâu?</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:gap-6">
            {servicesData.map((service) => {
              const Icon = icons[service.icon as keyof typeof icons] ?? Layout;
              return (
                <article key={service.slug} className="flex flex-col rounded-xl border border-[#EAECF0] p-6 sm:p-8">
                  <Icon className="h-6 w-6 text-[#465FFF]" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-bold text-[#101828]">{service.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-[#475467]">{service.shortDescription}</p>
                  <p className="mt-5 text-sm leading-relaxed text-[#475467]"><span className="font-semibold text-[#101828]">Phù hợp khi: </span>{service.suitableWhen}</p>
                  <Link href={`/services/${service.slug}`} className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#465FFF] hover:text-[#3648E0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#465FFF]">Xem chi tiết <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F9FAFB] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#101828] sm:text-3xl">Chưa chắc mình cần dịch vụ nào?</h2>
          <p className="mt-3 text-base text-[#475467]">Bắt đầu từ vấn đề hiện tại của bạn:</p>
          <ul className="mt-8 grid gap-x-12 gap-y-5 md:grid-cols-2">
            {servicesData.map((service) => (
              <li key={service.slug} className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <span className="text-sm text-[#475467] sm:text-base">{service.decisionPrompt}</span>
                <Link href={`/services/${service.slug}`} className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-[#465FFF] hover:text-[#3648E0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#465FFF]">{service.title} <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#101828] sm:text-4xl">Sản phẩm thực tế</h2>
              <p className="mt-3 max-w-xl text-base text-[#475467]">Một số sản phẩm liên quan đến ứng dụng web và quy trình nội bộ.</p>
            </div>
            <Link href="/projects" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#465FFF] hover:text-[#3648E0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#465FFF]">Xem tất cả dự án <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
          <div className="mt-9 grid gap-9 md:grid-cols-2">
            {relatedWork.map((project) => (
              <article key={project.slug}>
                <Link href={`/projects/${project.slug}`} className="block overflow-hidden rounded-xl bg-[#F9FAFB] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#465FFF]" aria-label={`Xem dự án ${project.name}`}>
                  <Image src={project.image} alt={`Hình minh họa giao diện dự án ${project.name}`} width={800} height={500} className="h-auto w-full" />
                </Link>
                <h3 className="mt-4 text-xl font-bold text-[#101828]">{project.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#475467]">{project.shortDescription}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#465FFF] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">Bạn có bài toán chưa biết bắt đầu từ đâu?</h2>
          <p className="mt-4 max-w-2xl text-base text-white/90">Gửi mô tả ngắn về nhu cầu hiện tại để cùng xem hướng triển khai phù hợp.</p>
          <ZaloContactLink className="mt-7 inline-flex justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#101828] hover:bg-[#F9FAFB] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Trao đổi qua Zalo</ZaloContactLink>
        </div>
      </section>
    </div>
  );
}
