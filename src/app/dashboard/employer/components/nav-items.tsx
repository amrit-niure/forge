"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import type React from "react"; // Added import for React
import { Icons } from "@/components/icons";

const navItems = [
  { href: "/dashboard/employer", label: "Overview" },
  { href: "/dashboard/employer/applications", label: "Applications" },
  { href: "/dashboard/employer/job-listings", label: "Job Listings" },
  { href: "/dashboard/employer/billing", label: "Billing" },
  { href: "/dashboard/employer/settings", label: "Settings" },
];

export function NavItems({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoverStyle, setHoverStyle] = useState({});
  const [activeStyle, setActiveStyle] = useState({ left: "0px", width: "0px" });
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    if (hoveredIndex !== null) {
      const hoveredElement = navRefs.current[hoveredIndex];
      if (hoveredElement) {
        const { offsetLeft, offsetWidth } = hoveredElement;
        setHoverStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        });
      }
    }
  }, [hoveredIndex]);

  useEffect(() => {
    const activeIndex = navItems.findIndex((item) => item.href === pathname);
    if (activeIndex !== -1) {
      const activeElement = navRefs.current[activeIndex];
      if (activeElement) {
        const { offsetLeft, offsetWidth } = activeElement;

        setActiveStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        });
      }
    }
  }, [pathname]);

  return (
    <>
      <nav
        className={cn(
          "hidden md:flex items-center space-x-1 relative",
          className
        )}
        {...props}
      >
        {/* Hover Highlight */}
        <div
          className="absolute h-full transition-all duration-100 ease-out bg-[#adb1ba14] dark:bg-[#ffffff1a] rounded-[6px] flex items-center"
          style={{
            ...hoverStyle,
            opacity: hoveredIndex !== null ? 1 : 0,
          }}
        />

        {/* Active Indicator */}
        <div
          className="absolute bottom-[-15px] h-[2px] w-4 bg-primary dark:bg-white transition-all duration-300 ease-out "
          style={activeStyle}
        />

        {navItems.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            ref={(el) => {
              navRefs.current[index] = el;
            }}
            className={cn(
              "px-3 py-2 text-sm font-medium transition-colors relative",
              pathname === item.href
                ? "text-primary"
                : "text-muted-foreground hover:text-primary"
            )}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="p-2 md:hidden" size="icon">
            <Icons.hamburger className="w-6 h-6" />
            <span className="sr-only">Open main menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="top">
          <nav className="flex flex-col space-y-4 mt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
