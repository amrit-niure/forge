import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, Clock, CheckCircle, XCircle } from "lucide-react"

export default function JobPostingsOverview() {
  return (
    <Card className="overflow-hidden border-none">
      <CardContent className="pt-6 px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <JobStatCard
            icon={<Briefcase className="h-8 w-8 text-primary" strokeWidth={1} />}
            title="12"
            description="Active Jobs"
            details="Currently live and accepting applications"
          />
          <JobStatCard
            icon={<Clock className="h-8 w-8 text-primary" strokeWidth={1}/>}
            title="5"
            description="Pending Jobs"
            details="Awaiting review or scheduled to go live"
          />
          <JobStatCard
            icon={<XCircle className="h-8 w-8 text-primary" strokeWidth={1}/>}
            title="8"
            description="Closed Jobs"
            details="No longer accepting applications"
          />
        </div>
        <div className="mt-8 flex justify-between items-center">
          <div className="text-sm text-gray-600">
            <CheckCircle className="inline-block mr-2 h-5 w-5 text-green-500" />
            Last updated: 2 hours ago
          </div>
          <div className="space-x-2">
            <Button variant="outline">Manage Jobs</Button>
            <Button className="bg-primary text-white">Post New Job</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function JobStatCard({ icon, title, description, details }: any) {
  return (
    <div className="bg-white p-4 rounded-lg  border border-gray-200 transition-all duration-300 hover:shadow-sm hover:cursor-pointer">
      <div className="flex items-center space-x-4">
        <div className="bg-gray-100 p-3 rounded-full">{icon}</div>
        <div>
          <h3 className="text-3xl font-bold">{title}</h3>
          <p className="text-sm font-medium text-gray-600">{description}</p>
        </div>
      </div>
      <p className="mt-2 text-xs text-gray-500">{details}</p>
    </div>
  )
}

