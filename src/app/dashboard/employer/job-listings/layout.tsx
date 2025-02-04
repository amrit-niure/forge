import { Metadata } from "next"
import { Separator } from "@/components/ui/separator"


export const metadata: Metadata = {
  title: "Billing",
  description: "Manage your billing, transactions and payment methods.",
}


interface JobListingLayoutProps {
  children: React.ReactNode
}

export default function JobListingLayout({ children }: JobListingLayoutProps) {
  return (
    <>
      <div className=" space-y-4 py-4 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Your Listings</h2>
          <p className="text-muted-foreground">
          Manage and create new listings.
          </p>
        </div>
        <Separator className="my-6" />
        {children}
      </div>
    </>
  )
}