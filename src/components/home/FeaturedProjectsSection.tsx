import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export function FeaturedProjectsSection() {
  const projects = projectsData.filter((project) => project.featured).slice(0, 3);
  const [featured, ...others] = projects;

  return (
    <section id="projects" className="bg-white pb-20 pt-8 sm:pb-28 sm:pt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:mb-12 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold text-[#465FFF]">Dự án nổi bật</p>
            <h2 className="text-3xl font-bold tracking-tight text-[#101828] sm:text-4xl">Một số sản phẩm tôi đã thực hiện</h2>
            <p className="mt-4 text-base leading-relaxed text-[#475467]">Xem sản phẩm và cách tôi giải quyết những bài toán thực tế.</p>
          </div>
          <Link href="/projects" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#465FFF] hover:text-[#3648E0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#465FFF]">
            Xem tất cả dự án <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        {featured && (
          <article className="group grid items-center gap-6 lg:grid-cols-[1.35fr_1fr] lg:gap-10">
            <Link href={`/projects/${featured.slug}`} aria-label={`Xem dự án ${featured.name}`} className="block overflow-hidden rounded-xl bg-[#F9FAFB] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#465FFF]">
              <Image src={featured.image} alt={featured.imageAlt ?? `Hình minh họa giao diện dự án ${featured.name}`} width={800} height={500} className="h-auto w-full transition-transform duration-200 group-hover:scale-[1.01]" />
            </Link>
            <div>
              <p className="text-sm text-[#667085]">{featured.category}</p>
              <h3 className="mt-2 text-2xl font-bold text-[#101828] sm:text-3xl">{featured.name}</h3>
              <p className="mt-3 max-w-lg text-base leading-relaxed text-[#475467]">{featured.shortDescription}</p>
              <p className="mt-4 text-sm text-[#667085]">{featured.technologies.slice(0, 3).join(" · ")}</p>
              <Link href={`/projects/${featured.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#465FFF] hover:text-[#3648E0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#465FFF]">Xem dự án <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </div>
          </article>
        )}
        <div className="mt-12 grid gap-10 sm:mt-16 md:grid-cols-2 md:gap-8">
          {others.map((project) => (
            <article key={project.slug} className="group">
              <Link href={`/projects/${project.slug}`} aria-label={`Xem dự án ${project.name}`} className="block overflow-hidden rounded-xl bg-[#F9FAFB] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#465FFF]">
                <Image src={project.image} alt={project.imageAlt ?? `Hình minh họa giao diện dự án ${project.name}`} width={800} height={500} className="h-auto w-full transition-transform duration-200 group-hover:scale-[1.01]" />
              </Link>
              <h3 className="mt-5 text-xl font-bold text-[#101828] sm:text-2xl">{project.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#475467] sm:text-base">{project.shortDescription}</p>
              <Link href={`/projects/${project.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#465FFF] hover:text-[#3648E0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#465FFF]">Xem dự án <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
