import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function RevenueSubscription() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue & Subscription</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium">Current Plan</p>
            <p className="text-2xl font-bold">Pro</p>
          </div>
          <div>
            <p className="text-sm font-medium">Usage</p>
            <Progress value={75} className="mt-2" />
            <p className="text-sm text-gray-500 mt-1">75% of 100 job postings</p>
          </div>
          <div>
            <p className="text-sm font-medium">Revenue this month</p>
            <p className="text-2xl font-bold">$1,234</p>
          </div>
          <Button className="w-full">Upgrade Plan</Button>
        </div>
      </CardContent>
    </Card>
  )
}

