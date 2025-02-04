import { Separator } from "@/components/ui/separator"
import SkillsForm from "./skills-form"


export default function OtherSkills() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Skills</h3>
        <p className="text-sm text-muted-foreground">
          Update your skills and proficencies.
        </p>
      </div>
      <Separator />
      <SkillsForm />
    </div>
  )
}