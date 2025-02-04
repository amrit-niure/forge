import { Separator } from "@/components/ui/separator"
import EnglishForm from "./english-form"


export default function English() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">English</h3>
        <p className="text-sm text-muted-foreground">
          Update your english history.
        </p>
      </div>
      <Separator />
      <EnglishForm />
    </div>
  )
}