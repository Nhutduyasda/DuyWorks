import Link from "next/link";
import { servicesData } from "@/data/services";
import { homeServiceDescriptions } from "@/data/home";
import { Layout, Layers, Briefcase, Cpu, ArrowRight } from "lucide-react";

const icons = { Layout, Layers, Briefcase, Cpu };

export function ServicesSection() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl sm:mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-[#101828] sm:text-4xl">Tôi có thể giúp bạn xây gì?</h2>
          <p className="mt-4 text-base leading-relaxed text-[#475467]">Từ website giới thiệu đến phần mềm phục vụ công việc hằng ngày.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
          {servicesData.map((service) => {
            const Icon = icons[service.icon as keyof typeof icons] ?? Layout;
            return (
              <article key={service.slug} className="flex flex-col rounded-xl border border-[#EAECF0] p-6 sm:p-8">
                <Icon className="mb-5 h-6 w-6 text-[#465FFF]" aria-hidden="true" />
                <h3 className="text-xl font-bold text-[#101828]">{service.title}</h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#475467] sm:text-base">{homeServiceDescriptions[service.slug]}</p>
                <Link href={`/services/${service.slug}`} className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#465FFF] hover:text-[#3648E0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#465FFF]">
                  Tìm hiểu thêm <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
