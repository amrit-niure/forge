import { Separator } from "@/components/ui/separator"
import EducationForm from "./education-form"


export default function Education() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Education</h3>
        <p className="text-sm text-muted-foreground">
          Update your education history.
        </p>
      </div>
      <Separator />
    <EducationForm />
    </div>
  )
}