import { Metadata } from "next"
import { Separator } from "@/components/ui/separator"


export const metadata: Metadata = {
  title: "Billing",
  description: "Manage your billing, transactions and payment methods.",
}


interface BillingLayoutProps {
  children: React.ReactNode
}

export default function BillingLayout({ children }: BillingLayoutProps) {
  return (
    <>
      <div className="  space-y-4 py-4 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Billings</h2>
          <p className="text-muted-foreground">
          Manage your billing, transactions and payment methods.
          </p>
        </div>
        <Separator className="my-6" />
        {children}
      </div>
    </>
  )
}