"use client";

import { ZaloContactLink } from "@/components/shared/ZaloContactLink";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Menu, X, MessageCircle, Code } from "lucide-react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-xs border-b border-[#EAECF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 font-bold text-lg sm:text-xl text-[#101828] hover:text-[#465FFF] transition-colors"
            aria-label={`Trang chủ ${siteConfig.name}`}
          >
            <span className="w-9 h-9 rounded-xl bg-[#465FFF] flex items-center justify-center text-white shadow-xs">
              <Code className="w-5 h-5" />
            </span>
            <span className="tracking-tight">{siteConfig.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main Navigation"
          >
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#475467] hover:text-[#101828] transition-colors py-1"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Primary CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ZaloContactLink
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#465FFF] hover:bg-[#3648E0] rounded-xl shadow-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#465FFF]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Trao đổi qua Zalo</span>
            </ZaloContactLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-[#475467] hover:text-[#101828] hover:bg-[#F2F4F7] transition-colors"
              aria-label={isMobileMenuOpen ? "Đóng menu" : "Mở menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-[#EAECF0] bg-white px-4 pt-2 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-[#344054] hover:bg-[#F9FAFB] hover:text-[#465FFF] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="pt-2">
            <ZaloContactLink
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold text-white bg-[#465FFF] hover:bg-[#3648E0] rounded-xl shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Trao đổi qua Zalo</span>
            </ZaloContactLink>
          </div>
        </div>
      )}
    </header>
  );
}
