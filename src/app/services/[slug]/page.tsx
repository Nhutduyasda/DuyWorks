import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData, serviceProcess } from "@/data/services";
import { projectsData } from "@/data/projects";
import { ZaloContactLink } from "@/components/shared/ZaloContactLink";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = servicesData.find((item) => item.slug === slug);
  return service
    ? { title: `${service.title} | Dịch vụ`, description: service.description }
    : { title: "Không tìm thấy dịch vụ" };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = servicesData.find((item) => item.slug === slug);
  if (!service) notFound();
  const relatedProjects = service.relatedProjectSlugs
    .map((projectSlug) => projectsData.find((project) => project.slug === projectSlug))
    .filter((project): project is (typeof projectsData)[number] => Boolean(project))
    .slice(0, 2);

  return (
    <div className="bg-white">
      <section className="bg-[#F9FAFB] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Đường dẫn trang" className="mb-10">
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-medium text-[#475467] hover:text-[#465FFF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#465FFF]"><ArrowLeft className="h-4 w-4" aria-hidden="true" /> Tất cả dịch vụ</Link>
          </nav>
          <p className="text-sm font-semibold text-[#465FFF]">Dịch vụ</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-[#101828] sm:text-5xl">{service.title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#475467] sm:text-lg">{service.description}</p>
          {service.targetAudience && <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#475467]"><span className="font-semibold text-[#101828]">Phù hợp với: </span>{service.targetAudience}</p>}
          <ZaloContactLink className="mt-8 inline-flex justify-center rounded-xl bg-[#465FFF] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#3648E0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#465FFF]">Trao đổi qua Zalo</ZaloContactLink>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-[#101828] sm:text-4xl">Dịch vụ này phù hợp khi nào?</h2>
          <ul className="mt-9 grid gap-x-12 gap-y-6 md:grid-cols-2">
            {service.useCases.map((useCase, index) => (
              <li key={useCase} className="flex gap-4">
                <span className="shrink-0 text-sm font-semibold tabular-nums text-[#667085]">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-base leading-relaxed text-[#344054]">{useCase}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#F9FAFB] py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div>
            <h2 className="text-2xl font-bold text-[#101828] sm:text-3xl">Có thể triển khai những gì?</h2>
            <ul className="mt-6 space-y-4">
              {service.capabilities.map((capability) => <li key={capability} className="border-l-2 border-[#D0D5DD] pl-4 text-sm leading-relaxed text-[#475467] sm:text-base">{capability}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#101828] sm:text-3xl">Bạn sẽ nhận được gì?</h2>
            <ul className="mt-6 space-y-4">
              {service.deliverables.map((deliverable) => <li key={deliverable} className="border-l-2 border-[#D0D5DD] pl-4 text-sm leading-relaxed text-[#475467] sm:text-base">{deliverable}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#101828] sm:text-4xl">Quy trình triển khai</h2>
          <p className="mt-3 max-w-2xl text-base text-[#475467]">Các bước cụ thể sẽ được thống nhất theo phạm vi từng dự án.</p>
          <ol className="mt-9 grid gap-6 border-t border-[#EAECF0] pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {serviceProcess.map((step, index) => <li key={step} className="flex gap-4 sm:block"><span className="text-sm font-semibold tabular-nums text-[#667085]">{String(index + 1).padStart(2, "0")}</span><h3 className="text-base font-semibold text-[#101828] sm:mt-3">{step}</h3></li>)}
          </ol>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="bg-[#F9FAFB] py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#101828] sm:text-4xl">Dự án liên quan</h2>
            <div className="mt-9 grid gap-10 md:grid-cols-2">
              {relatedProjects.map((project) => (
                <article key={project.slug}>
                  <Link href={`/projects/${project.slug}`} aria-label={`Xem dự án ${project.name}`} className="block overflow-hidden rounded-xl bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#465FFF]"><Image src={project.image} alt={project.imageAlt ?? `Hình minh họa giao diện dự án ${project.name}`} width={800} height={500} className="h-auto w-full" /></Link>
                  <h3 className="mt-5 text-xl font-bold text-[#101828]">{project.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#475467] sm:text-base">{project.shortDescription}</p>
                  <p className="mt-3 text-sm text-[#667085]">{project.technologies.slice(0, 3).join(" · ")}</p>
                  <Link href={`/projects/${project.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#465FFF] hover:text-[#3648E0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#465FFF]">Xem Case Study <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#101828] sm:text-4xl">Câu hỏi thường gặp</h2>
          <div className="mt-8 max-w-3xl divide-y divide-[#EAECF0] border-t border-b border-[#EAECF0]">
            {service.faq.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="cursor-pointer list-none pr-7 text-base font-semibold text-[#101828] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#465FFF] [&::-webkit-details-marker]:hidden">{item.question}<span aria-hidden="true" className="float-right text-[#667085] group-open:rotate-45">+</span></summary>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#475467] sm:text-base">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#465FFF] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-3xl text-3xl font-bold sm:text-4xl">Bạn đang cân nhắc {service.title} cho công việc của mình?</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90">Gửi mô tả ngắn về vấn đề hiện tại. Chúng ta sẽ cùng xem hướng triển khai phù hợp trước khi thống nhất phạm vi.</p>
          <ZaloContactLink className="mt-7 inline-flex justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#101828] hover:bg-[#F9FAFB] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Trao đổi qua Zalo</ZaloContactLink>
        </div>
      </section>
    </div>
  );
}
