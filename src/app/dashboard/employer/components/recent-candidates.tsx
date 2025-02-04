import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const recentApplications = [
  { id: 1, name: "Amrit Niure", role: "Frontend Developer", status: "Pending" },
  { id: 2, name: "Amrit Shrestha", role: "UX Designer", status: "Interviewed" },
  { id: 3, name: "Sahil Devkota", role: "Backend Developer", status: "Rejected" },
  { id: 4, name: "Saroj Desai", role: "Product Manager", status: "Hired" },
  { id: 5, name: "Ethan Niraula", role: "DevOps Engineer", status: "Pending" },
]

export default function RecentApplications() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Applications</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentApplications.map((application) => (
              <TableRow key={application.id}>
                <TableCell>{application.name}</TableCell>
                <TableCell>{application.role}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      application.status === "Hired"
                        ? "outline"
                        : application.status === "Rejected"
                          ? "destructive"
                          : "default"
                    }
                  >
                    {application.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

