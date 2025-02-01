import React from "react";
import Image from "next/image";
import { Search } from "@/app/dashboard/employer/components/search";
import { UserNav } from "@/app/dashboard/employer/components/user-nav";
import { NavItems } from "@/app/dashboard/employer/components/nav-items";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="border-b">
        <div className="flex h-16 items-center px-4 max-w-7xl mx-auto">
          <Link href="/" className="min-w-10 hidden md:block ">
            <Image
              src="/logo.png"
              width={50}
              height={20}
              alt="Dashboard"
              className="block dark:hidden"
            />
            <Image
              src="/examples/dashboard-dark.png"
              width={50}
              height={20}
              alt="Dashboard"
              className="hidden dark:block"
            />
          </Link>
          <NavItems className="mx-0 md:mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <Search />
            <Button variant="outline" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <UserNav />
          </div>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto ">{children}</div>
    </>
  );
}
