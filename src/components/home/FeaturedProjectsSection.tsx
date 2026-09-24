import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export function FeaturedProjectsSection() {
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="projects" className="py-16 sm:py-24 bg-white border-b border-[#EAECF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div className="max-w-2xl text-left">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#465FFF] mb-2">
              Dự án thực tế
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#101828]">
              Một số dự án đã thực hiện
            </h2>
            <p className="mt-3 text-base text-[#475467] leading-relaxed">
              Những sản phẩm được phát triển từ nhu cầu thực tế, từ website đến hệ
              thống nghiệp vụ.
            </p>
          </div>

          <Link
            href="/projects"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-[#465FFF] hover:text-[#3648E0] transition-colors"
          >
            <span>Xem tất cả dự án</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Large Project Cards */}
        <div className="space-y-12 sm:space-y-16">
          {featuredProjects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={project.slug}
                className="group p-4 sm:p-6 lg:p-8 bg-[#F9FAFB] rounded-2xl border border-[#EAECF0] hover:border-[#D0D5DD] transition-all duration-200"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image Showcase Column */}
                  <div
                    className={`lg:col-span-7 ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <Link
                      href={`/projects/${project.slug}`}
                      className="block overflow-hidden rounded-xl bg-white border border-[#EAECF0] shadow-2xs group-hover:shadow-xs transition-shadow"
                    >
                      <Image
                        src={project.image}
                        alt={`Ảnh mô phỏng giao diện ${project.name}`}
                        width={800}
                        height={500}
                        className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-300"
                      />
                    </Link>
                  </div>

                  {/* Metadata Column */}
                  <div
                    className={`lg:col-span-5 space-y-4 sm:space-y-5 text-left ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-[#EEF2FF] text-[#465FFF]">
                      {project.category}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#101828]">
                      {project.name}
                    </h3>

                    <p className="text-sm sm:text-base text-[#475467] leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Qualitative Outcome */}
                    {project.qualitativeOutcome && (
                      <div className="p-3.5 rounded-lg bg-white border border-[#EAECF0] text-xs sm:text-sm text-[#344054]">
                        <span className="font-semibold text-[#101828]">Kết quả: </span>
                        {project.qualitativeOutcome}
                      </div>
                    )}

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded text-xs font-medium bg-white text-[#475467] border border-[#EAECF0]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA Link */}
                    <div className="pt-2">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#465FFF] group-hover:text-[#3648E0] transition-colors"
                      >
                        <span>Xem Case Study</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-10 text-center md:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-semibold text-[#344054] bg-white border border-[#D0D5DD] rounded-xl hover:bg-[#F9FAFB] transition-colors"
          >
            <span>Xem tất cả dự án</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
