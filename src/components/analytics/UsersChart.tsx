"use client";
import { Card, CardContent, Typography } from "@mui/material";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const lineData = [
  { name: "Jan", thisYear: 10000, lastYear: 8000 },
  { name: "Feb", thisYear: 12000, lastYear: 10000 },
  { name: "Mar", thisYear: 15000, lastYear: 11000 },
  { name: "Apr", thisYear: 25000, lastYear: 17000 },
  { name: "May", thisYear: 28000, lastYear: 20000 },
  { name: "Jun", thisYear: 22000, lastYear: 24000 },
  { name: "Jul", thisYear: 26000, lastYear: 28000 },
];

function UsersChart() {
  return (
    <Card sx={{ p: 2, borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" align="left" gutterBottom>
          Total Users
        </Typography>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={lineData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="thisYear"
              stroke="#000000"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="lastYear"
              stroke="#99ccff"
              strokeWidth={2}
              strokeDasharray="5 5"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export default UsersChart;
