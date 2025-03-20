"use client";
import { useEditIconContext } from "@/context/ShowEditIconContext";
import { DataFetcherResponse, useDataFetcher } from "@/utils/useDataFetcher";
import { Edit } from "@mui/icons-material";
import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import { useState } from "react";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import GeneralGraph from "../GeneralGraph";
function UsersChart() {
  const {
    data,
    error,
    isLoading,
    setdata: setUserCount,
  }: DataFetcherResponse = useDataFetcher("data/usersCount");
  const { editable } = useEditIconContext();
  const [open, setOpen] = useState<boolean>(false);
  return (
    <GeneralGraph
      query={"data/usersCount"}
      open={open}
      setOpen={setOpen}
      error={error}
      isLoading={isLoading}
      setState={setUserCount}
    >
      <Card sx={{ p: 2, borderRadius: 2, boxShadow: 3 }}>
        <CardContent>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h6" align="left" gutterBottom>
              Total Users
            </Typography>
            {editable && (
              <Button color="inherit" onClick={() => setOpen(true)}>
                <Edit />
              </Button>
            )}
          </Stack>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="thisYear"
                stroke="#0066CC"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="lastYear"
                stroke="#FF9933"
                strokeWidth={2}
                strokeDasharray="5 5"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </GeneralGraph>
  );
}

export default UsersChart;
