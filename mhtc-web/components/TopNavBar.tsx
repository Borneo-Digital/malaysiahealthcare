"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  {
    label: "Home",
    items: [
      { label: "Home 4", href: "/home4" },
    ],
  },
];

export default function TopNavBar() {
  const pathname = usePathname();
  return (
    <nav className="w-full bg-gray-100 border-b border-primary/30 text-sm font-semibold z-[60] relative">
      <div className="container mx-auto px-4 flex items-center h-10">
        <ul className="flex space-x-8">
          {navItems.map((nav) => (
            <li key={nav.label} className="relative group">
              <button
                className="py-2 px-3 text-primary hover:text-primary-dark focus:outline-none group-hover:text-primary-dark transition-colors duration-200"
              >
                {nav.label}
              </button>
              <ul className="absolute left-0 top-full w-40 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100] border border-gray-200">
                {nav.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block px-4 py-2 hover:bg-primary/10 transition-colors duration-150 ${pathname === item.href ? "text-primary font-bold" : "text-gray-800"}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
} 