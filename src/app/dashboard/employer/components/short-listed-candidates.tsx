import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const shortlistedCandidates = [
  { id: 1, name: "Rohini Waston", role: "Frontend Developer" },
  { id: 2, name: "Liam Pandey", role: "UX Designer" },
  { id: 3, name: "Olivia Chaudhary", role: "Product Manager" },
]

export default function ShortlistedCandidates() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Shortlisted Candidates</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {shortlistedCandidates.map((candidate) => (
            <div key={candidate.id} className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={candidate.name} />
                <AvatarFallback>
                  {candidate.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{candidate.name}</p>
                <p className="text-sm text-gray-500">{candidate.role}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

