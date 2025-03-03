// components/LocaleLink.tsx
"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

interface LocaleLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void; // Add this line to support onClick
}

export default function LocaleLink({
  href,
  children,
  className = "",
  onClick,
}: LocaleLinkProps) {
  const params = useParams();
  const locale = (params?.locale as string) || "en";

  // Ensure the URL starts with slash
  const url = href.startsWith("/") ? href : `/${href}`;

  // Create the proper localized URL
  const localizedHref = `/${locale}${url}`;

  return (
    <Link href={localizedHref} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
