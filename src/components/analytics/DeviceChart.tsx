"use client";
import { Card, CardContent, Typography } from "@mui/material";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import H6 from "../material-ui-wrapper/Typography/H6";

const barData = [
  { name: "Linux", value: 12000 },
  { name: "Mac", value: 25000 },
  { name: "Windows", value: 30000 },
  { name: "Other", value: 22000 },
];
function DeviceChart() {
  return (
    <Card sx={{ flex: 1, p: 2, borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <H6>Traffic by Device</H6>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export default DeviceChart;
