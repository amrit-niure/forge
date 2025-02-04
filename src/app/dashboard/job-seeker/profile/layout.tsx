import { Metadata } from "next"

import { Separator } from "@/components/ui/separator"
import { ProfileSidebarNav } from "./components/profile-sidebar"

export const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
}

const sidebarNavItems = [
  {
    title: "Basic Information",
    href: "/dashboard/job-seeker/profile",
  },
  {
    title: "Work Experience",
    href: "/dashboard/job-seeker/profile/work-experience",
  },
  {
    title: "Education",
    href: "/dashboard/job-seeker/profile/education",
  },
  {
    title: "English",
    href: "/dashboard/job-seeker/profile/english",
  },
  {
    title: "Skills",
    href: "/dashboard/job-seeker/profile/skills",
  },

]

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function ProfileLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className="  space-y-4 py-4 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Profile</h2>
          <p className="text-muted-foreground">
            Manage your profile and update your information.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <ProfileSidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  )
}