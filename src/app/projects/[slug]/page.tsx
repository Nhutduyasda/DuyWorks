import { ZaloContactLink } from "@/components/shared/ZaloContactLink";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import { ArrowLeft, Check, MessageCircle, Layers } from "lucide-react";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Không tìm thấy dự án",
    };
  }

  return {
    title: `${project.name} | Case Study`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#667085] hover:text-[#465FFF] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại danh sách dự án</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="space-y-4 mb-8 text-left">
          <div className="inline-flex items-center px-3 py-1 rounded-md bg-[#EEF2FF] text-[#465FFF] text-xs font-semibold">
            {project.category}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101828]">
            {project.name}
          </h1>

          <p className="text-base sm:text-lg text-[#475467] max-w-3xl leading-relaxed">
            {project.overview || project.shortDescription}
          </p>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#465FFF] hover:text-[#3648E0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#465FFF]"
            >
              Xem sản phẩm <span aria-hidden="true">↗</span>
            </a>
          )}

          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-md text-xs font-medium bg-white text-[#344054] border border-[#EAECF0]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Large Screenshot */}
        <div className="overflow-hidden rounded-2xl bg-white border border-[#EAECF0] shadow-sm mb-12">
          <Image
            src={project.image}
            alt={project.imageAlt ?? `Minh họa giao diện ${project.name}`}
            width={1200}
            height={750}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Case Study Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Main Details */}
          <div className="lg:col-span-8 space-y-8">
            {/* Problem */}
            {project.problem && (
              <div className="p-6 sm:p-8 bg-white rounded-xl border border-[#EAECF0]">
                <h2 className="text-lg font-bold text-[#101828] mb-3">
                  Bài toán đặt ra (Problem)
                </h2>
                <p className="text-sm sm:text-base text-[#475467] leading-relaxed">
                  {project.problem}
                </p>
              </div>
            )}

            {/* Solution */}
            {project.solution && (
              <div className="p-6 sm:p-8 bg-white rounded-xl border border-[#EAECF0]">
                <h2 className="text-lg font-bold text-[#101828] mb-3">
                  Giải pháp thực hiện (Solution)
                </h2>
                <p className="text-sm sm:text-base text-[#475467] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}

            {/* Key Features */}
            {project.keyFeatures && (
              <div className="p-6 sm:p-8 bg-white rounded-xl border border-[#EAECF0]">
                <h2 className="text-lg font-bold text-[#101828] mb-4">
                  Tính năng nổi bật
                </h2>
                <ul className="space-y-3">
                  {project.keyFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm sm:text-base text-[#344054]"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#ECFDF3] text-[#027A48] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar / Outcomes */}
          <div className="lg:col-span-4 space-y-6">
            {/* Outcome Card */}
            {project.qualitativeOutcome && (
              <div className="p-6 bg-white rounded-xl border border-[#EAECF0]">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#101828] mb-3">
                  Hướng giải quyết
                </h3>
                <p className="text-sm text-[#475467] leading-relaxed">
                  {project.qualitativeOutcome}
                </p>
              </div>
            )}

            {/* Architecture Card */}
            <div className="p-6 bg-white rounded-xl border border-[#EAECF0] space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#101828]">
                Công nghệ áp dụng
              </h3>
              <div className="space-y-2">
                {project.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-2 text-xs font-medium text-[#344054]"
                  >
                    <Layers className="w-3.5 h-3.5 text-[#465FFF]" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Box */}
            <div className="p-6 bg-[#EEF2FF] rounded-xl border border-[#C7D7FE] space-y-4">
              <h3 className="text-sm font-bold text-[#101828]">
                Cần sản phẩm tương tự?
              </h3>
              <p className="text-xs text-[#3538CD] leading-relaxed">
                Nhắn tin trao đổi ý tưởng và bài toán thực tế của bạn.
              </p>
              <ZaloContactLink
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-xs font-bold text-white bg-[#465FFF] hover:bg-[#3648E0] rounded-lg shadow-xs transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Trao đổi qua Zalo</span>
              </ZaloContactLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
