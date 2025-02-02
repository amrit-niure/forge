"use client";

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from "recharts";

const data = [
  { name: "Jan", applicants: 400 },
  { name: "Feb", applicants: 300 },
  { name: "Mar", applicants: 500 },
  { name: "Apr", applicants: 280 },
  { name: "May", applicants: 590 },
  { name: "Jun", applicants: 320 },
];

export default function ApplicantStatistics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Applicant Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend wrapperStyle={{color:'#ffffff' }}  />
            <Line
              type="monotone"
              dataKey="applicants"
              stroke="#8884d8"
              strokeWidth={2}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}