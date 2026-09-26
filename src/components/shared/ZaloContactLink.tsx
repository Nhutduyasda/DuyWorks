import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

type Props = Omit<ComponentPropsWithoutRef<"a">, "href" | "target" | "rel">;

export function ZaloContactLink({ children, ...props }: Props) {
  if (siteConfig.links.zalo) {
    return (
      <a {...props} href={siteConfig.links.zalo} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link {...props} href="/contact">
      {children}
    </Link>
  );
}
