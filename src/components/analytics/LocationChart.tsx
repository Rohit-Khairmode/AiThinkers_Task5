"use client";
import { Card, CardContent, Typography } from "@mui/material";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
const pieData = [
  { name: "United States", value: 52.1, color: "#000000" },
  { name: "Canada", value: 22.8, color: "#82ca9d" },
  { name: "Mexico", value: 13.9, color: "#8884d8" },
  { name: "Other", value: 11.2, color: "#99ccff" },
];
function LocationChart() {
  return (
    <Card sx={{ flex: 1, p: 2, borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" align="left" gutterBottom>
          Traffic by Location
        </Typography>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export default LocationChart;
