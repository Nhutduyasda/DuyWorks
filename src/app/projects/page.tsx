"use client";

import { ZaloContactLink } from "@/components/shared/ZaloContactLink";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { ArrowRight, MessageCircle } from "lucide-react";

const categories = ["Tất cả", ...new Set(projectsData.map((project) => project.category))];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");

  const filteredProjects =
    selectedCategory === "Tất cả"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl text-left mb-10 sm:mb-12">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#465FFF] mb-2">
            Showcase
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101828]">
            Dự án đã thực hiện
          </h1>
          <p className="mt-3 text-base text-[#475467] leading-relaxed">
            Các sản phẩm từ website, ứng dụng web đến hệ thống quản lý nội bộ
            được xây dựng từ bài toán thực tế.
          </p>
        </div>

        {/* Client-side Category Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                  isSelected
                    ? "bg-[#465FFF] text-white"
                    : "bg-white text-[#475467] border border-[#EAECF0] hover:bg-[#F9FAFB] hover:text-[#101828]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.slug}
              className="group flex flex-col justify-between bg-white rounded-2xl border border-[#EAECF0] hover:border-[#D0D5DD] shadow-2xs hover:shadow-xs transition-all overflow-hidden"
            >
              <div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="block bg-[#F9FAFB] border-b border-[#EAECF0] overflow-hidden"
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt ?? `Minh họa giao diện dự án ${project.name}`}
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-300"
                  />
                </Link>

                <div className="p-6 sm:p-7 space-y-4">
                  <div className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-[#EEF2FF] text-[#465FFF]">
                    {project.category}
                  </div>

                  <h2 className="text-xl font-bold text-[#101828]">
                    {project.name}
                  </h2>

                  <p className="text-sm text-[#475467] leading-relaxed">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded text-xs font-medium bg-[#F9FAFB] text-[#475467] border border-[#EAECF0]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0 border-t border-[#F2F4F7] mt-4 flex items-center justify-between">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#465FFF] group-hover:text-[#3648E0] transition-colors"
                >
                  <span>Xem Case Study</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                {project.featured && (
                  <span className="text-xs font-medium text-[#027A48] bg-[#ECFDF3] px-2 py-0.5 rounded">
                    Featured
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-white border border-[#EAECF0] text-center max-w-xl mx-auto space-y-4">
          <p className="text-base font-semibold text-[#101828]">
            Bạn cần một sản phẩm tương tự cho doanh nghiệp của mình?
          </p>
          <ZaloContactLink
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#465FFF] hover:bg-[#3648E0] rounded-xl shadow-xs transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Trao đổi yêu cầu qua Zalo</span>
          </ZaloContactLink>
        </div>
      </div>
    </div>
  );
}
