import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, TrendingUp } from "lucide-react"

export default function AnnouncementsTips() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Announcements & Tips</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <h3 className="font-semibold flex items-center">
              <Lightbulb className="mr-2 h-5 w-5 text-yellow-500" />
              Recruitment Tips
            </h3>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Use video interviews to screen candidates efficiently</li>
              <li>Implement skills assessments for technical roles</li>
              <li>Craft compelling job descriptions to attract top talent</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold flex items-center">
              <TrendingUp className="mr-2 h-5 w-5 text-blue-500" />
              Job Market Trends
            </h3>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Remote work continues to be in high demand</li>
              <li>Increased focus on diversity and inclusion initiatives</li>
              <li>Growing importance of soft skills in hiring decisions</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

