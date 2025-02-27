import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, UserCheck, BarChart } from "lucide-react"

export default function CompanyPerformanceMetrics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Company Performance</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-4">
          <Eye className="h-6 w-6 " />
          <div>
            <p className="text-sm font-medium text-muted-foreground">Job Views</p>
            <p className="text-2xl font-bold">12,543</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <UserCheck className="h-6 w-6 " />
          <div>
            <p className="text-sm font-medium text-muted-foreground">Application Rate</p>
            <p className="text-2xl font-bold">8.7%</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <BarChart className="h-6 w-6" />
          <div>
            <p className="text-sm font-medium text-muted-foreground">Interview Conversion</p>
            <p className="text-2xl font-bold">24%</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

